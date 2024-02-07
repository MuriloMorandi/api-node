import { CryptoProvider } from "../../../infra/cryptography/CryptoProvider";
import { JwtProvider } from "../../../infra/jwt/JWTProvider";
import { IController } from "../../../interfaces/IController";
import { UserRepository } from "../../../repositories/UserRepository";
import { SignInController } from "../controllers/signInController";
import { SignInUseCase } from "../useCases/signInUseCase";


export const makeSignInController = (): IController => {
    const userRepo = new UserRepository();
    const cryptoProvider = new CryptoProvider();
    const jwtProvider = new JwtProvider()

    const signInUseCase = new SignInUseCase(userRepo, cryptoProvider, jwtProvider);
    const signInController = new SignInController(signInUseCase);

    return signInController;
}