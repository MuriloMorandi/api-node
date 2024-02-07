import { IProduct } from "../../../interfaces/IProducts";
import { CurrencyFormat } from "../../../helpers/CurrencyFormat";

export class ProductDTO {
    public id: number;
    public name: string;
    public priceFormat: string;
    public price: number;

    constructor({id = 0, name, price}: IProduct){
        this.id = id;
        this.name = name;
        this.price = price;
        this.priceFormat = CurrencyFormat(price);
    }
}