const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


module.exports = {
    getDiscus : (req, res) => {
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


    addDiscus: (req, res) => {
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



    //

    getDiscusUser : (req, res) => {
        prisma.diskusi.findMany({
            include: {
                user: {
                    select: {
                        username: true,
                        foto: true
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
  
    addDiscusUser: (req, res) => {
        let deCoded_id = req.decode.id;
        const { body } = req;
        const newData = {
          ...body,
          id_buku: parseInt(body.id_buku),
          id_user: deCoded_id,
          
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