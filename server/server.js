import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/mongodb.js'; // Ensure .js is included
import { clerkWebhooks } from './controllers/webhook.js';
import educatorRouter from './routes/educatorRoutes.cjs';
import { clerkMiddleware } from '@clerk/express'

// Initialize Express
const app = express();

// connect to database
await connectDB()

// Middlewares
app.use(cors());
app.use(clerkMiddleware())

// Routes
app.get('/', (req, res) => res.send('API Working'));
app.post('/clerk', express.json(), clerkWebhooks)
app.use('/api/educator', express.json(), educatorRouter)

// Port
const PORT = process.env.PORT || 5000;

// Function to start the server
const startServer = async () => {
    try {
        await connectDB(); // Connect to MongoDB before starting the server
        app.listen(PORT, () => {
            console.log(`✅ Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("❌ Failed to start server:", error);
        process.exit(1); // Exit if the server fails to start
    }
};

// Start the server
startServer();
