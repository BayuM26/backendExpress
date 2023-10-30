const express = require('express')
const app = express()
const routes = express.Router()

// call controller 
const ControllerSertifikat = require("./Controller/ControllerSertifikat")
const ControllerPortfolio = require("./Controller/ControllerPortofolios")
const ControllerAbaoutMe = require("./Controller/ControllerAboutMe")

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

// routing 
routes.route('/sertifikat')
      .get(ControllerSertifikat.Sertifikat)
      .post(ControllerSertifikat.CreateSertifikat);
routes.route('/sertifikat/:id')
      .get(ControllerSertifikat.GetDataSpesifikSertifikat)
      .patch(ControllerSertifikat.UpdateSertifikat)
      .delete(ControllerSertifikat.DeleteSertifikat);

routes.route('/portfolio')
      .get(ControllerPortfolio.Portfolio)
      .post(ControllerPortfolio.CreatePortfolio);
routes.route('/portfolio/:id')
      .patch(ControllerPortfolio.UpdatePortfolio)
      .delete(ControllerPortfolio.DeletePortfolio);

routes.route('/aboutMe')
      .get(ControllerAbaoutMe.AboutMe)
      .post(ControllerAbaoutMe.CreateAboutMe);
routes.route('/aboutMe/:id')
      .patch(ControllerAbaoutMe.UpdateAboutMe)
      .delete(ControllerAbaoutMe.DeleteAboutMe);

app.use(routes)


// port setting 
const dotenv = require('dotenv')
dotenv.config()

const port = process.env.PORT

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})