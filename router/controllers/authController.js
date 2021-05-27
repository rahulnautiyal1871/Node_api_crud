const keyValue = require('../../helper/keyValues')
const bcrypt = require('bcrypt');
let jwt=require('jsonwebtoken');

const saltRounds = 10;
const userModal=require('../../schemas/user');

console.log(keyValue.jwtTokenKey)
exports.registerUser= async (req,res)=>{
     
    const body = {...req.body}; 
    const [
        name, 
        email,
        address,
        dob,
        description,
        password,
        confPassword
    ] = [
        body.name, 
        body.email,
        body.address,
        body.dob,
        body.description, 
        body.password,
        body.confPassword

    ];
    if(confPassword!=password){
        res.json({message:'Password Not Matched !'});
    }else{
    await bcrypt.hash(password, saltRounds,async function(err, hash) {
    if(err){return res.json({message:"Something Wrong ! , Try Again !",error:err});} 
    else{
    await new userModal({ 
        name: name,
        email: email,
        address: address,
        dob: dob,
        description: description,
        password:hash
    }).save().then((data)=>{
    res.status(201).json({status:true,result:data,message:"New User created Successfully"})
   }).catch(err=>{res.status(500).json({status:false,result:err,message:"Something went wrong"})})  
   }
  })
 }
}

exports.loginUser =async (req,res) => {
    let email=req.body.email;
    console.log(email)
    await userModal.findOne({email:email}).exec()
    .then((user)=>{
        if(!user){
          res.status(200).json({ message:"User Not Exists !"})
        }else{

         bcrypt.compare(req.body.password,user.password, function(err, result) {
            if(err) {
                res.status(200).json({status:false,message:"Password Is Wrong !" })
            }
            if(result){
            var tokenId=  jwt.sign({id:user._id},keyValue.jwtTokenKey , {expiresIn:"10h"});   
                res.status(200).json({ status:true, message:"User Login Successfully",tokenId:tokenId})
            }
            else{ res.status(200).json({status:'failed', message:"Password Is Wrong!"})}     
            });  
        }
    }).catch(err=>{res.json({error:err})})
}