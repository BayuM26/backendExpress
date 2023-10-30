const expressAsyncHandler = require("express-async-handler")
const db = require("../connection")
const response = require("../Helper/response")


const Sertifikat = expressAsyncHandler(async(req,res) => {
    var keyword = req.query.s? `WHERE nameCertificate LIKE  '%${req.query.s}%'` : ''

    db.query(`SELECT * FROM setifikats ${keyword}`, (err,result) => {
        if (err) throw err
        response(200,result,'data sertifikat',res)
    })
})

const CreateSertifikat = expressAsyncHandler(async(req,res) => {
    const { nameSertifikat, link } = req.body
    var sql = `INSERT INTO setifikats (link, nameCertificate) VALUES ('${nameSertifikat}','${link}');`

    db.query(sql, (err,result) => {
        if(err) throw err
        response(201,result,'data sertifikat',res)
    })
})

const GetDataSpesifikSertifikat = expressAsyncHandler(async(req,res) => {

})

const UpdateSertifikat = expressAsyncHandler(async(req,res) => {
    res.send(req.body.link)
    const { nameSertifikat, link } = req.body
    if (nameSertifikat && link) {
        const sql = `UPDATE setifikats SET
                    link=${link},
                    nameCertificate=${nameSertifikat},
                WHERE id = ${req.params.id}`

        db.query(sql,(err,result) => {
            if (err) throw err
            response(200,'','data sertifikat',res)
        })
    }

    response(402,'','data Kosong',res)
})

const DeleteSertifikat = expressAsyncHandler(async(req,res) => {
    try {
        db.query(`DELETE FROM setifikats WHERE id = ${req.params.id}`, (err,result) => {
            response(200,result,result.message,res)
        })
    } catch (error) {
        response(500,'',error,res)
    }
})

module.exports = {
    Sertifikat,
    CreateSertifikat,
    GetDataSpesifikSertifikat,
    UpdateSertifikat,
    DeleteSertifikat,
}

