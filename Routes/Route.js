
const express =require ("express");
const {createUser,getAllusers,Updateuser,removeUser} = require("../Controllers/user");



 const route = express.Router();

 route.post("/createUser",createUser);
 route.get("/allusers",getAllusers);
 route.put("/Updateuser/:id",Updateuser);
 route.delete("/removeuser/:id",removeUser);


 module.exports=route;