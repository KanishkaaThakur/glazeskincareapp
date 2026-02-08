import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Razorpay from 'razorpay'

// Global variables
const currency = 'inr'
const deliveryCharge = 10

// Gateway initialization
// We initialize lazily to ensure .env is loaded
let razorpayInstance = null;

const initRazorpay = () => {
    if (!razorpayInstance) {
        razorpayInstance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
        })
    }
    return razorpayInstance;
}

// Placing orders using COD Method
const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId, { cartData: {} });

        res.json({ success: true, message: "Order Placed" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// Placing orders using Razorpay Method
const placeOrderRazorpay = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;

        // 1. Validation: Check if keys exist
        if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
            return res.json({ success: false, message: "Server Error: Razorpay Keys Not Found" });
        }

        // 2. Prepare Razorpay Options
        // We use a temporary receipt ID since we haven't saved to DB yet
        const options = {
            amount: Math.round(amount * 100),
            currency: currency.toUpperCase(),
            receipt: `receipt_${Date.now()}`
        }

        // 3. ATTEMPT RAZORPAY CALL FIRST (Critical Fix)
        // If this fails (Invalid Keys), the code jumps to 'catch' immediately.
        // NO order is saved to the database.
        const instance = initRazorpay();
        const razorpayOrder = await instance.orders.create(options);

        // -------------------------------------------------------------
        // IF WE REACH HERE, IT MEANS RAZORPAY KEYS ARE VALID
        // -------------------------------------------------------------
        
        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "Razorpay",
            payment: false,
            date: Date.now()
        }

        // 4. NOW we save the order to MongoDB
        const newOrder = new orderModel(orderData);
        await newOrder.save();

        // Send success back to frontend
        res.json({ success: true, order: razorpayOrder });

    } catch (error) {
        console.log("RAZORPAY ERROR:", error);
        
        // Handle Key Error specifically
        if (error.statusCode === 401) {
             return res.json({ success: false, message: "Authentication Failed: Check Key ID/Secret" });
        }

        const errorMessage = error.error?.description || error.message || "Razorpay Error";
        res.json({ success: false, message: errorMessage });
    }
}

// Verify Razorpay Payment
const verifyRazorpay = async (req, res) => {
    try {
        const { userId, razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        const crypto = await import('crypto');
        
        const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
        hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
        const generated_signature = hmac.digest('hex');

        if (generated_signature === razorpay_signature) {
            // Find the latest Razorpay order for this user
            const orders = await orderModel.find({ userId, paymentMethod: "Razorpay", payment: false }).sort({ date: -1 });
            
            if (orders.length > 0) {
                // Update the correct order
                const orderId = orders[0]._id;
                await orderModel.findByIdAndUpdate(orderId, { payment: true });
                await userModel.findByIdAndUpdate(userId, { cartData: {} });
                res.json({ success: true, message: "Payment Verified" });
            } else {
                res.json({ success: false, message: "Order Not Found" });
            }

        } else {
            res.json({ success: false, message: "Payment Verification Failed" });
        }

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// All Orders data for Admin Panel
const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        res.json({ success: true, orders })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

// User Order Data for Frontend
const userOrders = async (req, res) => {
    try {
        const { userId } = req.body;
        const orders = await orderModel.find({ userId });
        res.json({ success: true, orders })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// Update Order Status from Admin Panel
const updateStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body;
        await orderModel.findByIdAndUpdate(orderId, { status });
        res.json({ success: true, message: 'Status Updated' })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

// Cancel Order
const cancelOrder = async (req, res) => {
    try {
        const { userId, orderId } = req.body;
        await orderModel.findByIdAndUpdate(orderId, { status: 'Cancelled' });
        res.json({ success: true, message: "Order Cancelled" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export { placeOrder, placeOrderRazorpay, verifyRazorpay, allOrders, userOrders, updateStatus, cancelOrder }