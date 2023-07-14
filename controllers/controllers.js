const axios = require('axios');

const search = async (req, res) => {
    await axios({
        method: 'get',
        url: 'https://api.github.com/search/repositories',
        params: {
            type: 'album, artist, track',
            q: req.query.q,
            limit: 10,
        },
        headers: {
            Authorization: `Bearer ${process.env.TOKEN}`,
        },
    })
    .then((response) => {
        res.json(response.data);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('done');
    });
};