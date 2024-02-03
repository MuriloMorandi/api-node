import { IController } from "../../../interfaces/IController";
import { IHttpRequest } from "../../../interfaces/IHttp";
import { SignUpUseCase } from "../useCases/signUpUseCase";

export class SignUpController implements IController{
    
    constructor(private signUpUseCase: SignUpUseCase) { }
    
    public async handle(request: IHttpRequest){
        
        const ret = await this.signUpUseCase.createUser(request.body);

        return {
            statusCode: 201,
            data: ret
        };
    }
}