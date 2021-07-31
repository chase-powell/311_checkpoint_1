const users = require('../data/index.js')
const sample = require('../data/sampleUser.js')

const getUsers =(req,res) => {res.json(users)}



const getUsersById =(req,res) =>{
     const found = users.some(user => user.id == req.params.id)
        if(found) {
            res.json(users.find(user => user.id == req.params.id))
        }else {res.status(404).json({msg : `User id ${req.params.id} not found`}
}


 








 }
const createUser =(req,res) => {users.unshift(sample) res.json(users)}

const updateUser =(req,res) => { 
    const found = users.some(user => user.id == req.params.id)
    if (found) {
        const updateThis = users.filter(user => user.id == req.params.id)
        updateThis[0].id = req.body.id
        updateThis[0].body = req.body.body;
        updateThis[0].name = req.body.name
        const updateUser = {
            id: req.params.id,
            name: req.body.name,
            body: req.body.body,
            
        }
        updateThis.push(updateUser)
        // users.push(updateUser)
        res.send(users)
    } else { res.status(400).json({msg : `Bad Request`})}}

const deleteUser =(req,res) => {
    const found = users.some(user => user.id == req.params.id)
    if(found) {
        const deleteThis = users.map(user => user).indexOf(req.user.id)
        users.splice(deleteThis, 1)
       
    }else { res.status(400).json({msg : `Bad Request`}} 

module.exports = {getUsers, getUsersById, createUser, updateUser, deleteUser}