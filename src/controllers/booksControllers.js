const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//agar bisa file do controller bisa diakses diluar folder
module.exports = {
    getBooks : (req, res) => {
        prisma.book.findMany({
            include: {
                user: {
                    select: {
                        username :true
                    }
                }
            }
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

    addBooks: (req, res) => {
        const { body } = req;
        console.log(body.id_user);
        const newData = {
          ...body,
          halaman: parseInt(body.halaman),
          id_user: parseInt(body.id_user)
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
    },
    
    


    getbooksUser: (req,res)=>{
        prisma.book.findMany({
            include: {
                user: {
                    select: {
                        username :true
                    }
                },
                kategori: {
                    select: {
                        kategori :true

                    }
                }
            }

        })
        .then((data) => {
            res.send({
                message: "Success",
                status: 200,
                data: data,
            });
        })
        .catch((err) => {
            res.send({ 
                message: "Error While Add data", 
                status: 500, 
                error: error });
        });
    },

    createbooksUser: (req,res)=>{
        let deCoded_id = req.decode.id;
        const {body} = req
        const newBody={
            ...body,
            halaman: parseInt(body.halaman),
            id_kategori: parseInt(body.id_kategori),
            id_user: deCoded_id,
            foto:req.file.path
        };
        prisma.book.create({
            data: newBody,
        })
        .then((data) => {
            res.send({
              message: "Data Books Success Upload",
              status: 200,
              data: data,
            });
        })
        .catch((err) => {
            res.send({ 
                message: "Error While Add data", 
                status: 500, 
                error: error });
        });
    },


    updatebooksUser: (req,res)=>{
        let deCoded_id = req.decode.id;
        const {id} = req.params;
        const {body} = req;
        const newBody={
            ...body,
            halaman: parseInt(body.halaman),
            id_kategori: parseInt(body.id_kategori),
            id_user: parseInt(body.id_user),
            id_user: deCoded_id,
            foto:req.file.path
        };
        prisma.book.updateMany({
            where: {
                id_buku: parseInt(id),
                id_user: deCoded_id

            },
            data: newBody,
        })
        .then((data) => {
            res.send({
              message: "Edit Books Success Upload",
              status: 200,
              data: data,
            });
        })
        .catch((err) => {
            res.send({ 
                message: "Error While Edit data", 
                status: 500, 
                error: error });
        });
    },


    deletebooksUser: (req,res)=>{
        let deCoded_id = req.decode.id;
        const {id} = req.params;
        const {body} = req
        const newBody={
            ...body,
          
        };
        prisma.book.deleteMany({
            
            where: {
                id_buku: parseInt(id),
                id_user:deCoded_id
            }
        })
        .then((data) => {
            res.send({
              message: "Data Books Success DElete",
              status: 200,
              data: data,
            });
        })
        .catch((err) => {
            res.send({ 
                message: "Error While Delete data", 
                status: 500, 
                error: error });
        });
    },

};
