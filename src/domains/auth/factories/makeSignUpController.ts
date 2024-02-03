import { IController } from "../../../interfaces/IController";
import { UserRepository } from "../../../repositories/UserRepository";
import { CryptoProvider } from "../../../infra/cryptography/CryptoProvider";
import { JwtProvider } from '../../../infra/jwt/JWTProvider';
import { SignUpController } from "../controllers/signUpController";
import { SignUpUseCase } from "../useCases/signUpUseCase";



export const makeSignUpController = (): IController => {
    const userRepo = new UserRepository();
    const cryptoProvider = new CryptoProvider();
    const jwtProvider = new JwtProvider()

    const singUpUseCase = new SignUpUseCase(userRepo, cryptoProvider, jwtProvider);
    const singUpController = new SignUpController(singUpUseCase);

    return singUpController;
}