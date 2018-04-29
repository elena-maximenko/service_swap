import {Service} from "./Service";

export class User{
    public id: number;
    public firstName: string;
    public lastName: string;
    public login: string;
    public password: string;

    public services: Service[];
}