const {User} = require('../models/');
const Authmiddleware = async (req, res, next) => {
    let token = req.headers.token;
    if (token) {
        let [id, email, password] = token.split(":")
        let user = await User.findById(id);

        if (user.email === email && user.password === password) {
            next()
        } else {
            res.status(401).send("User is not authenticated check Credintials")
        }
    } else {
        res.status(401).send("User is not authenticated check Credintials")
    }
}

module.exports = Authmiddleware;
