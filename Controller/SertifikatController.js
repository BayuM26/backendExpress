const response = require('../Helper/response')
const sertifikat = require('../Model/sertifikatModel')
const connection = require('../connection')

const ShowSertifikat = async(req,res) => {
    ConnectionDB()
    await sertifikat.find()
        .then(data => {
            response(200, data, 'Success', res)
        }).catch(err => {
            response(500, err.message, 'Success', res)
        })

}

const CreateSertifikat = async(req,res) => {
    try {
        ConnectionDB()
        const createSertifikat = new sertifikat({
            nameSertifikat: req.body.nameSertifikat,
            link: req.body.link,
            imageSertifikat: req.body.imageSertifikat,
        })
    
        await createSertifikat.save()
                .then(data => {
                    response(201, data, 'Success', res)
                })
                .catch(err => {
                    response(500, '', err.message, res)
                })
    } catch (error) {
        response(500, error, 'Success', res)
    }
}

const GetDataSpesifikSertifikat = async(req,res) => {
    ConnectionDB()
    const id = req.params.id
    
    sertifikat.findById(id)
                .then(data => {
                    response(200,data,'Success',res)
                })
                .catch(err => {
                    response(200,'',err.message,res)
                })
}

const UpdateSertifikat = async(req,res) => {
    ConnectionDB()
    const id = req.params.id 
    
    updateQuery = {
        'nameSertifikat': req.body.nameSertifikat,
        'link': req.body.link,
    }

    sertifikat.findByIdAndUpdate(id,updateQuery)
                .then(data => {
                    response(200,data,'success',res)
                })
                .catch(err => {
                    response(500,'',err.message,res)
                })

}

const DeleteSertifikat = async(req,res) => {
    ConnectionDB()
    const id = req.params.id
    await sertifikat.findByIdAndDelete(id)
                    .then(data => {
                        response(200,'','Delete Success', res)
                    })
                    .catch(err => {
                        response(200,'',err.message, res)
                    })
}

const ConnectionDB = async() => {
    await connection()
}

module.exports = {
    ShowSertifikat,
    CreateSertifikat,
    GetDataSpesifikSertifikat,
    UpdateSertifikat,
    DeleteSertifikat,
}