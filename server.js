const express = require('express');
const app = express();

// view engine para as pages
app.set('view engine', 'ejs')

// Arquivos publicos
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.render("pages/index")
})


app.listen(8080, () => console.log('Server list only port 8080'))