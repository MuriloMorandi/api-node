import { Router } from "express";
import { validateResource } from "../../middleware/validation";
import { adaptRoute } from "../../adapts/adaptRoute";

import { makeSignUpController } from "./factories/makeSignUpController";
import { makeSignInController } from "./factories/makeSignInController";

import { signUpDTO } from "./validations/signUpDTO";
import { signInDTO } from "./validations/signInDTO";

const AuthRoutes = Router()

AuthRoutes.post('/signUp',
    validateResource(signUpDTO),
    adaptRoute(makeSignUpController())
);

AuthRoutes.post('/signIn',
    validateResource(signInDTO),
    adaptRoute(makeSignInController())
);

export { AuthRoutes }