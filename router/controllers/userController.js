const userModal = require('../../schemas/user')


exports.getAllUser = async (req,res)=>{
    await userModal.find().then(data=>{
        res.status(200).json({status:true,result:data,msg:"Getting Successfully"})
    }).catch(err=>{
        res.status(500).json({status:false,result:err,msg:"Internal Server Error"})
    }) 
}

exports.getSingleUser = async (req, res)=>{

    const userId = req.params.user_id;
    await userModal.findOneById(userId).then(data=>{
    res.status(200).json({status:true,result:data,msg:"Getting Successfully"})
    }).catch(err=>{
        res.status(500).json({status:false,result:err,msg:"Internal Server Error"})
    }) 
};

exports.createUser = async (req,res)=>{
    const body = {...req.body}; 
    const [
        name, 
        email,
        address,
        dob,
        description
    ] = [
        body.name, 
        body.email,
        body.address,
        body.dob,
        body.description 

    ];
   await new userModal({ 
       name: name,
       email: email,
       address: address,
       dob: dob,
       description: description
   }).save().then((data)=>{
       res.status(201).json({status:true,result:data,message:"New User created Successfully"})
   }).catch(err=>{res.status(500).json({status:false,result:err,message:"Something went wrong"})})

}


exports.updateUser = async (req,res)=>{
    const body   = {...req.body}; 
    const userId = req.params.user_id; 
    const [
        
        name, 
        email,
        address,
        dob,
        description
    ] = [
        body.name, 
        body.email,
        body.address,
        body.dob, 
        body.description
    ];
    await userModal.findByIdAndUpdate(userId,{
    $set:{
        name:name,
        dob:dob,
        email:email,
        address:address,
        description:description
    }
    }).then(data=>{
        res.status(200).json({status:true,result:data,msg:"Updated Successfully"})
    }).catch(err=>{
        res.status(500).json({status:false,result:err,msg:"Internal Server Error"})
    }) 
}

exports.deleteUser = async (req,res)=>{
    
    const userId = req.params.user_id; 

    await userModal.findByIdAndDelete(userId).then(data=>{
        res.status(200).json({status:true,result:data,msg:"Deleted Successfully"})
    }).catch(err=>{
        res.status(500).json({status:false,result:err,msg:"Internal Server Error"})
    }) 
}