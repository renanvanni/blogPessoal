import { Tema } from "./Tema";
import { User } from "./User";

export class Postagem{
    public id: number;
    public title: string;
    public text: string;
    public date: Date;
    public usuario: User;
    public tema: Tema
}