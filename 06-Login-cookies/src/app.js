let express = require('express')
let app = express()
const PORT = 3000
let path = require('path')
let cookieParser = require('cookie-parser')


app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());


app.set('view engine', 'ejs');
app.set('views', './src/views');


let mainRouter = require('./routes/main')




app.use('/', mainRouter)



app.listen(PORT, ()=>{console.log(`Servidor levantado en http://localhost:${PORT}`)})