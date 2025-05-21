import express from 'express';

import {createUser,getUsers,getUsersViaId,deleteUser,updateUser} from "../controllers/users.js";

const router = express.Router();

//All routes in here are starting with /users

router.get('/',getUsers);



router.post('/',createUser);

router.get('/:id',getUsersViaId);

router.delete('/:id',deleteUser);

router.patch('/:id',updateUser);

export default router;