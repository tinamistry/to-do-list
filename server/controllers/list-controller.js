const User = require('../models/user-model');
const ToDo = require('../models/todo-model')
const List = require('../models/list-model')

const addNewList = async (req, res) =>{
    try{
        console.log("in controller")
        const{userId, listName} = req.body
        const list = new List({user:userId, name: listName})
        await list.save()
            .then(list =>{
                console.log("List saved: ", list)
            })
        const user = await  User.findById(userId)
        console.log(user)
        const lists = user.lists
        lists.push(list._id)
       await user.save()
            .then(user =>{
        console.log("List added to user and saved: ", user)
         })
        res.status(201) .json({ message: "List Added Successfully", success: true, list });
    }
    catch(error){
        res.status(500).json({message: 'Adding Lisr Failed ' + error})
    }
}


module.exports = {
    addNewList
};
