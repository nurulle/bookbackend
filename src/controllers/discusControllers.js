const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


module.exports = {
    getCategory : (req, res) => {
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


    addcategory: (req, res) => {
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