import User from "../models/User.js";

export const protectRoute = async (req, res, next) => {
    
    try {

        const token = req.cookies.jwt;

        if(!token){
            return res.status(401).json({ message: "Not authorized, token missing" })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({ message: "Not authorized, token invalid" })
        }

        const user = await User.findById(decoded.userId).select('-password');

        if(!user){
            return res.status(401).json({ message: "Not authorized, user not found" })
        }


        req.userId = decoded.userId;

        next();
        
    } catch (error) {

        console.log('Error in protectRoute middleware:', error);
        res.status(500).json({ message: "Server error" });
        
    }
}