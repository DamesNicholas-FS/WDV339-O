const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    console.log('protected route: ', req.user);
    res.json({ user: req.user });
});

module.exports = router;