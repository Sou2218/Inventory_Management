import express from 'express'

import {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
   getProductbyId 
} from '../controllers/productController.js'

const router  = express.Router();

router.get ('/', getProducts);
router.get('/:id', getProductbyId );
router.post('/',createProduct);
router.put('/:id',updateProduct);
router.delete('/:id',deleteProduct);

export default router;