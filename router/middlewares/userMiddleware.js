let userModal=require('../../schemas/user');

async function checkEmail(req,res,next){
  let email=req.body.email;
  let checkexitemail=userModal.findOne({email:email});
  checkexitemail.exec();
  await checkexitemail.then((result)=>{
    //console.log(result);
    if(result==null || result==undefined){
     next();
    }else{
      res.status(200).json({
        status:false,
        message:"This email is already registered"
      })
    }
  })
  .catch((err)=>{console.log(err)})
}


module.exports={
    checkEmail 
}