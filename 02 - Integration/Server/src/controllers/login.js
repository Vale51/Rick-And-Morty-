const users = require("../utils/users.js")

const login = (req, res) => {
    const email = req.query.email
    const password = req.query.password

    if (users.includes({email, password})) {
        res.writeHead(200, { "Content-type": "application/json"})
        res.end(JSON({access : true}))
    }
    else{
        res.writeHead(200, { "Content-type": "application/json"})
        res.end(JSON({access : true}))
    }

}

module.exports = login