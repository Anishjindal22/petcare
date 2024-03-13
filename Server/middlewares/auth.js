const jwt = require("jsonwebtoken")


exports.auth = async (req,res, next) => {

    try {
        
        const token = req.body.token || req.cookies.token || req.get("Authorization")?.replace("Bearer ", "");
        
        if(!token) {
            return res.status(401).json({
                success:false,
                message:'TOken is missing',
            });
        }
        try {
            const payload = jwt.verify(token,process.env.JWT_SECRET);
            req.user = payload;
        } catch (error) {
            return res.status(401).json({
                success:false,
                message:"Invaild token."
            })
        } 
        next();
    } catch (error) {
        console.log(error)
        return res.status(401).json({
            success:false,
            message:"Error in validating token"
        })
    }
}



exports.isAdmin = async(req,res,next) => {

    try {
        if(req.user.accountType !== "Admin"){
            return res.status(400).json({
                success:false,
                message:"This is protected routes for admin"
            })
        }
        next();
    } catch (error) {
        return res.status(401).json({
            success:false,
            message:"Admin role cannot be verified please try again later"
        })
    }
}