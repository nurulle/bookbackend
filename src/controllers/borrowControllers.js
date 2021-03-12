const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


module.exports = {
    getBorrow : (req, res) => {
        prisma.pemijaman.findMany()
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


    addBorrow: (req, res) => {
        const { body } = req;
        const newData = {
          ...body,
          tgl_pinjam: new Date(body.tgl_pinjam),
          tgl_kembali: new Date(body.tgl_kembali),
        };
        
        prisma.pemijaman.create({
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