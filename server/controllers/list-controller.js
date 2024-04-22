const User = require('../models/user-model');
const ToDo = require('../models/todo-model')
const List = require('../models/list-model')

const addNewList = async (req, res) =>{
    try{
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
        res.status(500).json({message: 'Adding List Failed ' + error})
    }
}

const getListNames = async(req, res) => {
    try{
        const { userId } = req.params;
        const user = await User.findById(userId)
        console.log(user)
        const lists = user.lists
        console.log(lists)
        const names = []
        for(i = 0; i < lists.length; i++){
            const currentList = await List.findById(lists[i])
            names.push(currentList.name)
        }
        console.log(names)
        res.status(201).json({ names });
    }
    catch(error){
        res.status(500).json({message: "Finding lists failed"})
    }

}


module.exports = {
    addNewList, 
    getListNames
};
