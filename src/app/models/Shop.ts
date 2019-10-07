import { Category } from "./Category";

export class Shop{
    public codeShop:number;
    public nameShop:string;
    public passwordShop:string;
    public phoneShop?:string;
    public mailShop:string;
    public latitude:number;
    public longitude:number;
    public fromHour?:any;
    public toHour?:any;
    public addressString:string;
    public Categories:Category[];
}