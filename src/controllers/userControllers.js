const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");


//agar bisa file do controller bisa diakses diluar folder
module.exports = {
    getUser : (req, res) => {
        prisma.user.findMany()
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


    addUser: (req, res) => {
        const { body } = req;
        const newData = {
          ...body,
          NIK : parseInt(body.NIK),
          no_hp: parseInt(body.no_hp),
          foto: req.file.path
        };
        
        prisma.user.create({
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


    updateUser: (req, res) =>{
        const { id } = req.params;
        const { body } = req;
        const newData = {
            ...body,
            
        };
       
        prisma.user.update({
            where : {
              id : parseInt(id),
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

    deleteUser: (req, res) => {
        const { id } = req.params;
        prisma.user.delete({
            where: {
                id : parseInt(id)
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





    ///



    updateUserbyuser: (req,res)=>{
        let deCoded_id = req.decode.id;
        console.log("Decode ",req.decode);
        const {body} = req
        const newBody={
            ...body,
            NIK: parseInt(body.NIK),
            no_hp: parseInt(body.no_hp),
            foto:req.file.path
        };
        prisma.user.update({
            where: {
                id: deCoded_id

            },
            data: newBody,
        })
        .then((data) => {
            res.send({
              message: "Data Success Upload",
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


    


};