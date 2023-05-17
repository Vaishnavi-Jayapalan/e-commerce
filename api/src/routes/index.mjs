import Router from 'express'
import { registerSchema, loginSchema } from '../utils/schema/user.schema.mjs';
import { checkSchema } from 'express-validator';
import UserController from '../controller/user.mjs';

const userController = new UserController()
const router = Router();

router.post('/login', checkSchema(loginSchema), async (req, res) => userController.login(req, res));

router.post('/register', checkSchema(registerSchema), async (req, res) => userController.register(req, res));

export default router;