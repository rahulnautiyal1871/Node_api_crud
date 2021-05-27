let jwt=require('jsonwebtoken');
const userModal=require('../../schemas/user');
const keyValue=require('../../helper/keyValues')


module.exports=(req,res,next)=>{
    try{
         jwt.verify(req.headers['x-access-token'],keyValue.jwtTokenKey, async function(err,decoded){
            if(err){
                return res.status(200).json({
                    status:false,
                    message:'Unauthorised request'})
            }else{
                console.log(decoded)
                req.userData = await userModal.findById(decoded.id);
                console.log(req.userData.email)
    
                next();
            }
      }) 
     }
    catch(error){
        res.status(401).json({
            status:false,
            error:'Invalid tokenId'
        });
    }
}