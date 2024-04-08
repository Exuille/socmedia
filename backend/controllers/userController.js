const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const registerUser = async (req, res) => {
    const { firstName, middleName, lastName, emailAddress, username, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Passwords do not match!' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ firstName, middleName, lastName, emailAddress, username, password: hashedPassword });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const loginUser = async (req, res) => {
    const { emailAddress, username, password } = req.body;

    try {
        let user = await User.findOne({ emailAddress });
        if (!user) {
            user = await User.findOne({ username });
        }

        if (!user) {
            return res.status(404).json({ error: 'User not found!' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password!' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


module.exports = {
    registerUser,
    loginUser
};
