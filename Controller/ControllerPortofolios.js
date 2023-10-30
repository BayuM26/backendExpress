const expressAsyncHandler = require("express-async-handler")
const db = require("../connection")
const response = require("../Helper/response")

const Portfolio = expressAsyncHandler(async(req,res) => {
    var keyword = req.query.s? `WHERE portofolioName LIKE  '%${req.query.s}%'` : ''

    db.query(`select * from portofolios ${keyword}`, (err,result) => {
        if (err) throw err
        response(200,result,'data portfolio',res)
    })
})

const CreatePortfolio = expressAsyncHandler(async(req,res) => {

})

const UpdatePortfolio = expressAsyncHandler(async(req,res) => {

})

const DeletePortfolio = expressAsyncHandler(async(req,res) => {

})

module.exports = {
    Portfolio,
    CreatePortfolio,
    UpdatePortfolio,
    DeletePortfolio,
}