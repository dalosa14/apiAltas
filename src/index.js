const express = require("express");
const helmet = require("helmet");
const sequelize = require("./dbs/dbConnect");
const app = express();
const pasosAdelopd = require('./routes/pasosAdelopd')
const cors = require('cors');
app.use(express.json())
app.use(express.urlencoded({ extended:false }))
app.use(cors({
    origin:'http://localhost:8080'
}))
app.use(helmet());
app.use('/adelopd',pasosAdelopd)
app.listen(3000, () => {
  console.log("servidor en el 3000");
  sequelize
    .sync({force:false})
    .then(() => console.log("conectado a la base de datos"))
    .catch((err) => console.log(err, "error al conectar con la base de datos"));
});
