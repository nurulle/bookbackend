const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


module.exports = {
    getDiscus : (req, res) => {
        prisma.diskusi.findMany()
        .then((data) => {
            res.send({
                msg : 'succes',
                status : 200,
                data : data,
            });
        })
        .catch((error) => {
            res.send({
                msg : 'error',
                status : 300,
                error : error,
             });
        });
    },


    addDiscus: (req, res) => {
        const { body } = req;
        const newData = {
          ...body,
          
        };
        
        prisma.diskusi.create({
            data: newData,
        })
        .then((data) => {
            res.send({
            msg: "succes",
            status: 200,
            data: data,
        });
        console.log(data);
        })
    
        .catch((err) => {
            req.send({
            msg: "eror",
            status: 300,
        });
        console.log(err);
        });
    },


  

}