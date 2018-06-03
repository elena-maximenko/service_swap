import {Category} from "./Category";
import {User} from "./User";

export class Service{
    public id: number;
    public name: string;
    public category: Category;
    public users: User[];
    public difficulty: number;
}