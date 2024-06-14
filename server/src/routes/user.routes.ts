import { googleLogin, login, signup, users } from "../controllers/user.controllers";
import express from "express";

const router = express.Router()

router.post('/user/signup',signup)
router.post('/user/login',login)
router.post('/user/googlelogin',googleLogin)
router.get('/user/getusers',users)

export default  router