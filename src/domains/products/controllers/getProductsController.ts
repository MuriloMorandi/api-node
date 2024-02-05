import { IController } from "../../../interfaces/IController";
import { IHttpRequest } from "../../../interfaces/IHttp";
import { ReadProductsUseCase } from "../useCases/readProductsUseCases";

export class GetProductsController implements IController  {
    constructor(private GetProductsUseCase: ReadProductsUseCase) { }
    
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