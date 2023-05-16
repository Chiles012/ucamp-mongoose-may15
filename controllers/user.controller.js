const userModel = require('../models/user.model');

// crear nuestro CRUD

// GET ( obtener )
const getUsers = async (req, res) => {

    const users = await userModel.find(); // find = obtener todo

    res
        .status(200) // 200 = OK
        .json({
            users: users
        })
        .send()

}

// POST ( crear )
const createUser = async (req, res) => {
    const { email, name, password, age } = req.body;

    const user = new userModel({
        email: email,
        name: name,
        password: password,
        age: age
    })

    await user.save()

    res
        .status(201) // 201 = Create
        .json({
            message: 'Usuario creado'
        })
        .send()

}

// PUT ( actualizar )
const userUpdate = async (req, res) => {

    const { id } = req.params;
    const { email, name, password, age } = req.body;

    await userModel.findByIdAndUpdate(id, {
        email: email,
        name: name,
        password: password,
        age: age
    });

    res
        .status(200)
        .json({
            message: 'Actualizado correctamente'
        })
        .send()

}

// DELETE ( eliminar )
const userDelete = async (req, res) => {

    const { id } = req.params;

    await userModel.findByIdAndDelete(id);

    res
        .status(200)
        .json({
            message: 'Eliminado correctamente'
        })
        .send()

}

module.exports = {
    getUsers,
    createUser,
    userDelete,
    userUpdate
}