import { Webhook } from "svix";
import User from "../models/User.js";

// API Controller Function to manage Clerk User with database
export const clerkWebhooks = async (req, res) => {
    try {
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        // ✅ Fix: Corrected JSON.stringify and missing parentheses
        await whook.verify(JSON.stringify(req.body), {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        });

        const { data, type } = req.body;

        switch (type) {
            case 'user.created': {
                const userData = {
                    _id: data.id,
                    email: data.email_addresses[0].email_address,
                    name: data.first_name + " " + data.last_name,
                    imageUrl: data.image_url,
                };
                await User.create(userData);
                res.json({});
                break;
            }
            
            // ✅ Fix: Missing colon `:` after `case 'user.updated'`
            case 'user.updated': {
                const userData = {
                    _id: data.id,
                    email: data.email_addresses[0].email_address,
                    name: data.first_name + " " + data.last_name,
                    imageUrl: data.image_url,
                };
                await User.findByIdAndUpdate(data.id, userData);
                res.json({});
                break;
            }
            
            case 'user.deleted': {
                await User.findByIdAndDelete(data.id);
                res.json({});
                break;
            }

            default:
                res.status(400).json({ success: false, message: "Invalid webhook event type" });
                break;
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
