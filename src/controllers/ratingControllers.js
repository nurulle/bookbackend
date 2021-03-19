const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


module.exports = {
    getRating : (req, res) => {
        prisma.rating.findMany()
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


    addrating: (req, res) => {
        const { body } = req;
        const newData = {
          ...body,
          rating: parseInt(body.rating)
        };
        
        prisma.rating.create({
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


    getRatingusers : (req, res) => {
        prisma.rating.findMany({

        })
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

    addratingUser: (req, res) => {
        const { body } = req;
        const newData = {
          ...body,
          rating: parseInt(body.rating),
          id_buku: parseInt(body.id_buku)
        };
        
        prisma.rating.create({
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