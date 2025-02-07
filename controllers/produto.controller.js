import express from 'express';
import produtoService from ''
const router = express.Router();

export const produtoController = app => {
    
    router.get('/produto', proudutoService.getAll);
    router.get('/produto/:id', proudutoService.getById);
    router.post('/produto', proudutoService.create);
    router.put('/produto/:id', proudutoService.uptade);
    router.delete('/produto/:id', proudutoService.delete);  
}

export default produtoController;