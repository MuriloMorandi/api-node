import { IController } from "../../../interfaces/IController";
import { IHttpRequest } from "../../../interfaces/IHttp";
import { GetProductsUseCase } from "../useCases/readProductsUseCases";

export class GetProductsController implements IController  {
    constructor(private GetProductsUseCase: GetProductsUseCase) { }
    
    public async handle(req: IHttpRequest) {
        try
        { 
            const data = await this.GetProductsUseCase.Get();
            
            return {
                data,
                statusCode: 200
            }
        }
        catch(err)
        {
            throw err;
        }
    }
}