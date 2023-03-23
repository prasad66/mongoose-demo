import User from '../mongodb/models/users.js';

const getAllUsers = async (req, res) => {

};

const registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const userExists = await User.findOne({ username });

        if (userExists) {
            return res.status(200).json({ message: 'User already exists', user: userExists })
        }

        const newUser = await User.create({
            username, password
        });
        return res.status(200).json({ message: 'User Created Successfully!', user: newUser })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const loginUser = async (req, res) => {

};

export { getAllUsers, registerUser, loginUser }