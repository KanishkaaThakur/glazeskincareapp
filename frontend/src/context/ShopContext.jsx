import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { products as assetProducts } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '₹';
    const delivery_fee = 100;
    const navigate = useNavigate();

    // Fallback URL
    const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState(assetProducts);
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    // Load saved cart from DB when user is logged in
    useEffect(() => {
        if (!token) return;
        const fetchCart = async () => {
            try {
                const { data } = await axios.post(backendUrl + '/api/cart/get', {}, { headers: { token } });
                if (data.success && data.message && typeof data.message === 'object') {
                    setCartItems(data.message);
                } else if (!data.success && data.message && /invalid signature|jwt expired|not authorized/i.test(data.message)) {
                    // Token expired or invalid - clear it so user can log in again
                    setToken('');
                    localStorage.removeItem('token');
                }
            } catch (err) {
                console.error('Failed to load cart', err);
            }
        };
        fetchCart();
    }, [token, backendUrl]);

    // --- ADD TO CART: local state + persist to DB when logged in ---
    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error('Select Product Size');
            return;
        }

        setCartItems((prev) => {
            const updatedCart = { ...prev };
            if (!updatedCart[itemId]) {
                updatedCart[itemId] = {};
            }
            if (!updatedCart[itemId][size]) {
                updatedCart[itemId][size] = 1;
            } else {
                updatedCart[itemId][size] += 1;
            }
            return updatedCart;
        });

        if (token) {
            try {
                await axios.post(backendUrl + '/api/cart/add', { itemId, size }, { headers: { token } });
            } catch (err) {
                console.error('Failed to save cart', err);
                toast.error('Cart could not be saved');
            }
        }

        toast.success("Added to cart");
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const size in cartItems[items]) {
                if (cartItems[items][size] > 0) {
                    totalCount += cartItems[items][size];
                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId, size, quantity) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev };
            updatedCart[itemId][size] = quantity;
            return updatedCart;
        });
        if (token) {
            try {
                await axios.post(backendUrl + '/api/cart/update', { itemId, size, quantity }, { headers: { token } });
            } catch (err) {
                console.error('Failed to update cart', err);
            }
        }
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            if (itemInfo) {
                for (const size in cartItems[items]) {
                    if (cartItems[items][size] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][size];
                    }
                }
            }
        }
        return totalAmount;
    }

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart, setCartItems,
        getCartCount, updateQuantity,
        getCartAmount, navigate,
        setToken, token, backendUrl
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;