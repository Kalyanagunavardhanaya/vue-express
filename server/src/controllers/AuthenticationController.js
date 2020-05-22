const {User} = require('../models')
module.exports = {
   async register (req,res){
        // res.send({
        //     msg:`Hello ${req.body.email}! Your user was registered! Have fun!`
        // })
        try{
            const user = await User.create(req.body)
            res.send(user.toJSON())
        }catch(err){
            console.log(err)
            res.status(400).send({
                error: 'This email is already in use'
            })
        }
       
    },
    checkAuthCookie (req,res){
        res.send({
            msg:`Cookie:NOT SET YET`
        })
    }
}