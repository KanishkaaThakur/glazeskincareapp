import mongoose from 'mongoose'

const connectDB = async () => {
    mongoose.connection.on('connected', () => {
        console.log('DB Connected Successfully')
    })
    
    // THIS IS THE FIX:
    // We removed "/e-commerce" so it connects to your default database (where your products are).
    await mongoose.connect(`${process.env.MONGODB_URI}`)
}

export default connectDB;