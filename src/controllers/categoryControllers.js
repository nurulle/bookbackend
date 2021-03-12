const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


module.exports = {
    getCategory : (req, res) => {
        prisma.kategori.findMany()
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
        
        prisma.kategori.create({
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


    updateCategory: (req, res) =>{
        const { id } = req.params;
        const { body } = req;
        const newData = {
            ...body,
             
        };
       
        prisma.kategori.update({
            where : {
              id_kategori : parseInt(id),
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

    deleteCategory: (req, res) => {
        const { id } = req.params;
        prisma.kategori.delete({
            where: {
                id_kategori: parseInt(id)
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

}