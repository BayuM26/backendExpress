const express = require('express')
const app = express()
app.use(express.json())

// call controller 
const ControllerSertifikat = require('./Controller/SertifikatController')

// body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// routing 
const routes = express.Router()

routes.route('/sertifikat')
      .get(ControllerSertifikat.ShowSertifikat)
      .post(ControllerSertifikat.CreateSertifikat)
routes.route('/sertifikat/:id')
      .get(ControllerSertifikat.GetDataSpesifikSertifikat)
      .patch(ControllerSertifikat.UpdateSertifikat)
      .delete(ControllerSertifikat.DeleteSertifikat);

app.use(routes)

// dotenv
const dotenv = require('dotenv')
dotenv.config()

// port setting 
const port = process.env.PORT
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})