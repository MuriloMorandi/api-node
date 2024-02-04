import { IController } from "../../../interfaces/IController";
import { IHttpRequest, IHttpResponse } from "../../../interfaces/IHttp";
import { DeleteProductsUseCase } from "../useCases/deleteProductsUseCases";

export class DeleteProductsController implements IController{
    constructor(private deleteProductsUseCase: DeleteProductsUseCase ) { }
    
    public async handle(req: IHttpRequest): Promise<IHttpResponse> {
        try
        {
            const { id } = req.params;

            await this.deleteProductsUseCase.Delete(id);

            return {
                data: 'Product deleted',
                statusCode: 200
            }
        }
        catch (ex) {
            throw ex;
        }
    }
}