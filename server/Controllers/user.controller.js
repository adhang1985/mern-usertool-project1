
const User = require("../Model/user.model");


// create user
const createUser = async(req,res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({
            message: "User created successfully",
            data:newUser
        });
    } catch (error) {
        res.status(500).json("Internal server error");
    }
}

// get all users
const getAllUsers = async(req,res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json({
            status:"success",
            data:allUsers
        })
    } catch (error) {
        res.status(500).json("Internal server error");
    }
}

// get user by id
const getUserById = async(req,res) => {
    try {
        const userId = req.params.id;
        const selectedUser = await User.findOne({_id:userId});
        res.status(200).json({
            status:"success",
            data:selectedUser,
            message:"data fetched successfully"
        })
    } catch (error) {
        res.status(500).json("Internal server error");
    }
}

// update user
const updateUser = async(req,res) => {
    try {
        const userId = req.params.id;
        const updatedUser = await User.updateOne({_id:userId},{
            $set: {
                name: req.body.name,
                age: req.body.age,
                email: req.body.email,
                role : req.body.role
            }
        });
        if(updatedUser){
            res.status(200).send({
                message : "user updated",
                success : true,
                data: updatedUser
            })
        }
        else{
            res.status(404).send({
                success : false,
                message : 'user not found'
            })
        }
    } catch (error) {
        res.status(500).send('Internal server error');
    }
}

// delete user
const deleteUser = async(req,res) => {
    try {
        const userId = req.params.id;
        await User.deleteOne({_id:userId});
        res.status(200).json({ message: "person is deleted" });
    } catch (error) {
        res.status(500).send('Internal server error');
    }
}

module.exports = {createUser,getAllUsers,getUserById,updateUser,deleteUser};