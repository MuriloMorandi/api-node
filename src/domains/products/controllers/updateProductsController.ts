import { IController } from "../../../interfaces/IController";
import { IHttpRequest } from "../../../interfaces/IHttp";
import { WriteProductsUseCase } from "../useCases/writeProductsUseCases";

export class UpdateProductsController implements IController {
    constructor(private updateProductsUseCase: WriteProductsUseCase) { }

    public async handle(req: IHttpRequest) {
        try
        {
            const { id } = req.params;
            
            const data = await this.updateProductsUseCase.Update(id, req.body);

            return {
                data,
                statusCode: 200
            }
        }
        catch (ex) {
            throw ex;
        }
    }
}