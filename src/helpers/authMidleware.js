const jwt = require('jsonwebtoken');

module.exports = {
    checkLogin:(req,res,next)=>{
        const bearerToken = req.header('x-access-token');
        if (!bearerToken) {
            res.send({
                msg:'Please Login Frist',
                status:401
            })
        }else{
            const token = req.header('x-access-token').split(' ')[1];
            try {
                const Token = jwt.verify(token,"caca");
                console.log("Token ", Token);
                req.decode = Token
                next()
            } catch (error) {
                res.send({
                    msg:'invalid Token',
                    status:401
                })
            }
        }
    }
}