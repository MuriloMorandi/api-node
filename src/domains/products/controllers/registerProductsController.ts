import { IController } from '../../../interfaces/IController';
import { IHttpRequest } from '../../../interfaces/IHttp';
import { WriteProductsUseCase } from '../useCases/writeProductsUseCases';


export class RegisterProductsController implements IController  {
    constructor(private RegisterProductsUseCase: WriteProductsUseCase) { }
    
    public async handle(req: IHttpRequest) {
        try
        {
            const data = await this.RegisterProductsUseCase.Create(req.body);
            
            return {
                data,
                statusCode: 200
            }
        }
        catch (ex)
        {   
            throw ex;
        }
    }
}
