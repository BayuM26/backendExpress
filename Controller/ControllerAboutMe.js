const expressAsyncHandler = require("express-async-handler")
const db = require("../connection")
const response = require("../Helper/response")

const AboutMe = expressAsyncHandler(async(req,res) => {
    db.query(`select * from aboutmes`, (err,result) => {
        if (err) throw err
        response(200,result,'data portfolio',res)
    })
})

const CreateAboutMe = expressAsyncHandler(async(req,res) => {

})

const UpdateAboutMe = expressAsyncHandler(async(req,res) => {

})

const DeleteAboutMe = expressAsyncHandler(async(req,res) => {

})

module.exports = {
    AboutMe,
    CreateAboutMe,
    UpdateAboutMe,
    DeleteAboutMe,
}