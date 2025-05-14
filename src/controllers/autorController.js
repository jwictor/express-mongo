import { autor } from '../models/Autor.js';


class AutorController {

    static async listarAutores(req, res) {
        try {
            const listarAutores = await autor.find({});
            res.status(200).json(listarAutores);

        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição`});
        }   
    };

        static async listarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);

        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do autor`});
        }   

    };

    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: "criado com sucesso", livro: novoAutor });
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao cadastrar o autor`});
        }
    }

   
    static async atualizarAutor(req, res) {
        try {
            const id = req.params.id;
             await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Autor atualizado"});

        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização do autor`});
        }   

    };

    static async deletarAutor(req, res) {
        try {
            const id = req.params.id;
             await autor.findByIdAndRemove(id);
            res.status(200).json({ message: "Autor excluido com sucesso"});

        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na exclusão`});
        }   
    };

};

export default AutorController;;