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


    getBorrowuser : (req, res) => {
        prisma.pemijaman.findMany({
            include: {
                book: {
                    include: {
                        user: {
                            select: {
                               username: true
                            }
                        }
                    }
                },
                user: {
                    select: {
                        username: true
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


    addBorrowuser: (req, res) => {
        const { body } = req;
        const {decode} = req
        console.log(decode);
        const newData = {
          ...body,
          tgl_pinjam: new Date(body.tgl_pinjam),
          tgl_kembali: new Date(body.tgl_kembali),
          id_buku: parseInt(body.id_buku),
          id_user: parseInt(req.decode.id),
          
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