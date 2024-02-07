import { IController } from "../../../interfaces/IController";
import { IHttpRequest } from "../../../interfaces/IHttp";
import { SignInUseCase } from "../useCases/signInUseCase";


export class SignInController implements IController{
    
    constructor(private signInUseCase: SignInUseCase) { }
    
    public async handle(request: IHttpRequest){
        
        const ret = await this.signInUseCase.signIn(request.body);

        return {
            statusCode: 201,
            data: ret
        };
    }
}