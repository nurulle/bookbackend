const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//agar bisa file do controller bisa diakses diluar folder
module.exports = {
    getBooks : (req, res) => {
        prisma.book.findMany()
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


    addBooks: (req, res) => {
        const { body } = req;
        const newData = {
          ...body,
          halaman: parseInt(body.halaman)
        };
        
        prisma.book.create({
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


    updateBooks: (req, res) =>{
        const { id } = req.params;
        const { body } = req;
        const newData = {
            ...body,
             halaman: parseInt(body.halaman)
        };
       
        prisma.book.update({
            where : {
              id_buku : parseInt(id),
            },
            data : newData
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

    deleteBooks: (req, res) => {
        const { id } = req.params;
        prisma.book.delete({
            where: {
                id_buku: parseInt(id)
            }
        })
        .then((data) => {
            res.send({
            msg: "delete succes",
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
    }


};