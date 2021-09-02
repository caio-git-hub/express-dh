const parametrosController = {
    //metodo index
    index: (req, res) => {

        //"info" sera um objeto que vai ser passado
        let info = {
            titulo: "Parametros",
            cursos: ["Full Stack", "Mobile", "Marketing"]
        };
        
        return res.render("parametros", info); //retorna a view index como primeiro parametro, e como segundo parametro, retorna o objeto "info"
    }
};

//exportando
module.exports = parametrosController;