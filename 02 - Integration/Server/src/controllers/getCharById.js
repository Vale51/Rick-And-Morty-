const axios = require("axios")
const url = "https://rickandmortyapi.com/api/character/"

const getCharById = (req, res)=> {
    const id = req.params.id 
    axios(url + id)
    .then((response)=> response.data)
    .then((data)=> {
        if (!data) {
            res.status(response.status).json({ error: 'Not found' });
        }


        const character = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            image: data.image,
            status: data.status
        }
        res.writeHead(200, { "Content-type": "application/json"})
        res.end(JSON.stringify(character))
    })

    .catch((error)=> {
        res.writeHead(500, {"Content-type": "text/plain"})
        res.end(error.message)
    })

}

module.exports = getCharById