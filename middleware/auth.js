const jwt = require("jsonwebtoken");

// Middleware to authenticate user and check token validity
const authenticate = (req, res, next) => {
    // Retrieve token from the Authorization header
    const token = req.header("Authorization");

    // Check if the token is provided
    if (!token) {
        return res.status(401).json({ message: "Unauthorized user, token missing" });
    }

    // Ensure token is prefixed with 'Bearer ' (e.g., 'Bearer YOUR_TOKEN')
    if (!token.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Token must be prefixed with 'Bearer '" });
    }

    // Extract the token from the 'Bearer ' prefix
    const jwtToken = token.split(" ")[1];

    try {
        // Verify the token using the secret key
        const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        req.user = decoded; // Attach decoded user data to the request object
        next(); // Proceed to the next middleware or route handler
    } catch (err) {
        return res.status(401).json({ message: "Invalid token or token expired" });
    }
};

module.exports = authenticate;
