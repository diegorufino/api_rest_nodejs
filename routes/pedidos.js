const express = require('express');
const router = express.Router();

// RETORNA TODOS OS PEDIDOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o GET dentro da rota pedidos'
    })
});

// INSERE UM PEDIDO
router.post('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o POST dentro da rota pedidos'
    })
})

// RETORNA UM PEDIDO ESPECIFICO
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido
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

// ALTERA UM PEDIDO
router.patch('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o PATCH dentro da rota pedidos'
    })
});

// EXCLUI UM PEDIDO
router.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o DELETE dentro da rota pedidos'
    })
});

module.exports = router;