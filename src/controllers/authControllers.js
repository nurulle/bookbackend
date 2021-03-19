const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");


module.exports = {
    signUp: (req, res) => {
        const data = {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
        };
        const saltRounds = 10;
        bcrypt.hash(data.password, saltRounds, (err, hashPassword) => {
          const newData = {
            ...data,
            password: hashPassword,
          };
          prisma.user
            .create({
              data: newData,
            })
            .then((data) => {
              res.send({
                message: "Success Sign Up",
                status: 200,
                data: data,
              });
            })
            .catch((err) => {
              res.send({
                message: "Error Sign Up",
                status: 200,
                error: err,
              });
            });
        });
      },

    signIn : (req, res) => {
        const { body } = req;
        prisma.user.findFirst({
            where : {
            //untuk mncari emailnya yg sama find first
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
                        email : data.email,
                        id:data.id
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
    },
}