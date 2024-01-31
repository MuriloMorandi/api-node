import { IHttpResponse, IHttpRequest } from './IHttp';

export interface IController {
  handle: (req: IHttpRequest) => Promise<IHttpResponse>;
}