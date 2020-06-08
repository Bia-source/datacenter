const mongoose = require('mongoose');

const Products = mongoose.model('Product');

module.exports = {
    
    async buscarTodos(req,res){
        const { page = 1 } = req.query;
        const products = await Products.paginate({}, { page, limit: 5});
        return res.json(products);
    },

    async buscarPorId(req, res){
        const product = await Products.findById(req.params.id);
        return res.json(product);
    },

    async buscarPorDescricao(req,res){
        const product = await Products.findOne(req.body);
        return res.json(product);
    },

    async criar(req, res){
        const product = await Products.create(req.body);
        return res.json(product);
    },

    async update(req, res){
        const product = await Products.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
        return res.json(product);
    },

    async deletar(req, res){
        await Products.findOneAndDelete({_id: req.params.id});
        return res.send(" deletado");    
    }

};