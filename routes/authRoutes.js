router.post('/signup', async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await Users.create({
            email,
            password,
        })

    const token = jwt.sign({id: user._id}, process.env.SECRET);
    res.json({token, loggedIn: true});
    } catch (error) {
        console.error(error.message);
        return res.status(400).send(error.message);
    }
});

router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    if (!email || !password) {
        return res.status(400).send('Please provide email and password');
    }

    try {
        const [user] = await Users.findAll({
            where: {
                email,
            },
        })

        const match = await bcrypt.compare(password, user.password);
    } catch (error) {
        console.log('error', error);
        return res.status(400).send('Invalid Credentials');
    }
});