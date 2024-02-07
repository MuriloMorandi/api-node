import { CryptoProvider } from './../../../infra/cryptography/CryptoProvider';
import { IUserRepository } from "../../../repositories/UserRepository";
import { JwtProvider } from '../../../infra/jwt/JWTProvider';
import { ISignInParams } from '../validations/signInDTO';
import { BadRequestException } from '../../../exceptions/BadRequestException';
import { AuthUserDTO } from '../DTOs/authUserDTO';
import { maskedCPF } from '../../../utils/maskedCPF';

export class SignInUseCase{
    constructor(
        private userRepository: IUserRepository,
        private readonly cryptoProvider: CryptoProvider,
        private readonly jwtProvider: JwtProvider
        ) { }

    
    public async signIn(params: ISignInParams){
        const user = await this.userRepository.findByEmail(params.email);

        if(!user){
            throw new BadRequestException('Invalid credentials');
        }

        const passwordMatch = await this.cryptoProvider.compare(params.password, user.password);

        if(!passwordMatch){
            throw new BadRequestException('Invalid credentials');
        }
        
        const token = await this.jwtProvider.generateToken(user.id);
        if (user.cpf) { user.cpf = maskedCPF(user.cpf); }
        

        return new AuthUserDTO(user, token);
    }
}