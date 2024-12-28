const express=require('express')
const router = express.Router()

const signUpTemplatecopy=require('../model/SignupModel')

router.post("/signup",(request,response)=>
{
    const  sam=new signUpTemplatecopy({

        name:request.body.name,
        email:request.body.email,
        contact:request.body.contact,
        age:request.body.age,
        jobRole:request.body.jobRole
        
    })
    sam.save().then(data=>
    {
        response.json(data);
        console.log('Data added Sucessfully');

    }
    ).catch(error=>{
        response.json(error)
    }
    )

})

module.exports=router;