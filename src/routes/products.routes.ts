import { Router } from 'express';
import ProductsController from '../controllers/products.controller';
import UsersController from '../controllers/users.controller';



const router = Router();

const productsController = new ProductsController();
const userController = new UsersController();


router.post('/users', userController.create);
router.post('/products', productsController.create);
router.get('/products', productsController.getAll);
router.get('/users', userController.getAll);

export default router;