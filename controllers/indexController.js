const indexController = {
    //metodo index
    index: (req, res) => {
        return res.render("index"); //retorna a view index
    }
};

//exportando
module.exports = indexController;