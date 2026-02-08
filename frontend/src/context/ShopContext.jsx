import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { products as assetProducts } from "../assets/assets"; 
// axios is commented out to prevent crashes if it's not installed correctly
// import axios from 'axios'; 

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

    // --- SIMPLEST ADD TO CART LOGIC ---
    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error('Select Product Size');
            return;
        }

        // Using a simpler way to update the object to avoid any "Clone" errors
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

        toast.success("Added to cart");
        console.log("Cart updated locally!");
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