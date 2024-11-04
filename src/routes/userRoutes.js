import { Router } from "express";

import  userController  from "../controllers/UserController";
import loginRequired from "../middlewares/loginRequired";

const router = Router();
//Não deveria existir
//router.get('/', loginRequired, userController.index)//Esse
//router.get('/', userController.show)//Esse

/**router.get('/:id', userController.show)
 router.put('/:id', userController.update)
 router.delete('/:id', userController.delete) */

 router.post('/', userController.store)
 router.put('/', loginRequired, userController.update)
router.delete('/', loginRequired, userController.delete)

export  default router;
