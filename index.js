const express = require('express')
const routes = express.Router()
const app = express()
app.use(express.json())
// call controller 
// const ControllerSertifikat = require("./Controller/ControllerSertifikat")
// const ControllerPortfolio = require("./Controller/Con
// const ControllerAbaoutMe = require("./Controller/ControllerAboutMe")
const ControllerSertifikat = require('./Controller/SertifikatController')

const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// routing 
routes.route('/sertifikat')
      .get(ControllerSertifikat.ShowSertifikat)
      .post(ControllerSertifikat.CreateSertifikat)
routes.route('/sertifikat/:id')
      .get(ControllerSertifikat.GetDataSpesifikSertifikat)
      .patch(ControllerSertifikat.UpdateSertifikat)
      .delete(ControllerSertifikat.DeleteSertifikat);

// routes.route('/portfolio')
//       .get(ControllerPortfolio.Portfolio)
//       .post(ControllerPortfolio.CreatePortfolio);
// routes.route('/portfolio/:id')
//       .patch(ControllerPortfolio.UpdatePortfolio)
//       .delete(ControllerPortfolio.DeletePortfolio);

// routes.route('/aboutMe')
//       .get(ControllerAbaoutMe.AboutMe)
//       .post(ControllerAbaoutMe.CreateAboutMe);
// routes.route('/aboutMe/:id')
//       .patch(ControllerAbaoutMe.UpdateAboutMe)
//       .delete(ControllerAbaoutMe.DeleteAboutMe);

app.use(routes)


// port setting 
const dotenv = require('dotenv')
const db = require('./connection')
// const bodyParser = require('body-parser')

dotenv.config()

const port = process.env.PORT

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})