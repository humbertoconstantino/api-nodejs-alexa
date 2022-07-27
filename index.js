const app = require('express')();

var port = process.env.PORT || 3000
app.listen(port, () => console.log("Servidor Rodando"))


var autorization = false

app.post('/instagram', (req, res) => {
    this.autorization = true;
    res.send('')
})

app.get('/instagram', (req, res) =>
{ res.send(this.autorization)
    this.autorization = false
})