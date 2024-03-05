const User = require('../models/user-model');
const ToDo = require('../models/todo-model')
const Lists = require('../models/list-model')

const addToDo = async (req, res) =>{
    try{
        const {userId, listName, title, description} = req.body
        console.log("request: ", req.body) 
        const toDo = new ToDo({title: title, description: description})
        await toDo.save()
            .then(toDo =>{
                console.log("To Do Saved: " , toDo)
            })
        console.log(userId)
        const user = await User.findById(userId)
        console.log(user)
        res.status(201) .json({ message: "ToDo Added Successfully", success: true, user });
    }
    catch(error){
        res.status(500).json({message: 'Adding Todo Failed ' + error})
    }
}


module.exports = {
    addToDo
};
