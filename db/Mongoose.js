require('dotenv').config({path: '.env'})
const mongoose = require('mongoose')
const password = process.env.DB_PASSWORD
const dbname = process.env.DB_NAME
const url = `mongodb+srv://clustertest:${password}@${dbname}.8puis.mongodb.net/${dbname}?retryWrites=true&w=majority`
mongoose.connect(url)