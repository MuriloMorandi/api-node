import { BadRequestException } from "../../../exceptions/BadRequestException";
import { CryptoProvider } from "../../../infra/cryptography/CryptoProvider";
import { JwtProvider } from "../../../infra/jwt/JWTProvider";
import { UserRepository } from "../../../repositories/UserRepository";
import { maskedCPF } from "../../../utils/maskedCPF";
import { AuthUserDTO } from "../DTOs/authUserDTO";
import { ISignUpParams } from "../validations/signUpDTO";

export class SignUpUseCase{
    constructor(
        private readonly userRepository: UserRepository,
        private readonly cryptoProvider: CryptoProvider,
        private readonly jwtProvider: JwtProvider
    ) { }
    
    async createUser({cpf, password,...params}: ISignUpParams): Promise<any>{
        const hasEmail = await this.userRepository.hasEmail(params.email);
        
        if(hasEmail){
            throw new BadRequestException('Email already in use');
        }

        if (cpf)
        {
            cpf = cpf.replace(/\D/g, '');
        }
        

        const hashedPassword = await this.cryptoProvider.hash(password);

        const newUser = await this.userRepository.create({
            ...params,
            password: hashedPassword,
            cpf
        });

        const token = await this.jwtProvider.generateToken(newUser.id);
        if (!newUser.cpf) return new AuthUserDTO(newUser, token);
        
        newUser.cpf = maskedCPF(newUser.cpf);
        return new AuthUserDTO(newUser, token);
    }
}