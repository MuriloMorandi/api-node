import { Router } from "express";
import { validateResource } from "../../middleware/validation";
import { signUpDTO } from "./validations/signUpDTO";
import { adaptRoute } from "../../adapts/adaptRoute";
import { makeSignUpController } from "./factories/makeSignUpController";


const AuthRoutes = Router()

AuthRoutes.post('/signup', validateResource(signUpDTO), adaptRoute(makeSignUpController()))


export { AuthRoutes }