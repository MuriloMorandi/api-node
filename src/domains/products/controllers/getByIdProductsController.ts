import { IController } from "../../../interfaces/IController";
import { IHttpRequest } from "../../../interfaces/IHttp";
import { ReadProductsUseCase } from "../useCases/readProductsUseCases";

export class GetByIdProductsController implements IController  {
    constructor(private GetProductsUseCase: ReadProductsUseCase) { }
    
    public async handle(req: IHttpRequest) {
        try
        {
            const data = await this.GetProductsUseCase.GetById(Number(req.params.id));
            
            return {
                data,
                statusCode: 200
            }
        }
        catch(ex)
        {
            throw ex;
        }
    }
}