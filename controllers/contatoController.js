const contatoController = {
    //quando chamar o metudo index (pela rota)
    index: (req, res) => {
        return res.render("contato"); //vai retornar essa View
    }
};

//exportando o modulo para usar em outros arquivos
module.exports = contatoController;