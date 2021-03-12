const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
// const { delete } = require('../routers');


module.exports = {
    signUp : (req, res) => {
        const { body } = req;
        const saltRounds =10;

        // const saltRounds = Math.floor(Math.random() * 10) + 1;
        console.log("salt Round", saltRounds);
        bcrypt.hash(body.password, saltRounds, (err, hashPassword) => {
            const newBody = {
                ...body,
                password: hashPassword
            }

            prisma.user.create({
                data : newBody
            })
            .then((data) => {
                res.send({
                    msg : "succes sign Up",
                    status : 200,
                    data : data
                })
            })
            .catch((error) => {
                res.send({
                    msg : "error sign Up",
                    status : 300,
                    error : error
                })
            })
            
        })      
      
    },

    signIn : (req, res) => {
        const { body } = req;
        prisma.user.findFirst({
            //untuk mncari emailnya yg sama find first
            where : {
                email : body.email
            }
        })
        .then((data) => {
            if(!data) {
                res.send({
                    msg : "Eror Login, User not found",
                    status : 404
                })
            } else {
                //utk mncocokkan password
                const isValid = bcrypt.compareSync(body.password, data.password);
                if(!isValid) {
                    res.send({
                        msg : "error login",
                        status : 403,
                        error : "password eror"
                    })
                } else {
                    const payload = {
                        //payload data yg di bawa ke token
                        nama : data.nama,
                        username : data.username,
                        email : data.email
                    }
                    //expiresin buat set kapan token tdk bisa digunakan /detik bisanya
                    const token = jwt.sign(payload, "caca", {
                        expiresIn : 86400 //seconds
                    });

                    delete data.password

                    const newData = {
                        ...data,
                        token : token
                    }

                    res.send({
                        msg : "succes login",
                        status : 200,
                        data : newData
                    })


                }
                
            }
        })
        .catch((error) => {
            res.send({
                msg : "Eror login",
                status : 500,
                error : error
            })
        })
    }
}