const express = require('express');
const router = express.Router();

// RETORNA TODOS OS PRODUTOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna todos os produtos'
    })
});

// INSERE UM PRODUTO
router.post('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Insere um produto'
    })
})

// RETORNA UM PRODUTO ESPECIFICO
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto
    if (id === 'especial') {
        res.status(200).send({
            mensagem: 'Voce descobriu o ID especial',
            id: id
        });
    }else{
        res.status(200).send({
            mensagem: 'Voce passou um ID'
        });
    }
});

// ALTERA UM PRODUTO
router.patch('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o PATCH dentro da rota produtos'
    })
});

// EXCLUI UM PRODUTO
router.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Produto excluido'
    })
});

module.exports = router;