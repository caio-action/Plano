import { Injectable } from '@nestjs/common';
import { Plano } from './plano';

@Injectable()
export class PlanoService {
    plano: Plano[] = [

        {  id: "reg1", nome: "Bitix Customer Plano 1", codigo: 1 },
        {  id: "reg2", nome: "Bitix Customer Plano 2", codigo: 2 },
        {  id: "reg3", nome: "Bitix Customer Plano 3", codigo: 3 },
        {  id: "reg4", nome: "Bitix Customer Plano 4", codigo: 4 },
        {  id: "reg5", nome: "Bitix Customer Plano 5", codigo: 5 },
        {  id: "reg6", nome: "Bitix Customer Plano 6", codigo: 6 },
           
    ];
    
    
    getAll(){
        return this.plano;
    }
    getById(id: number){
        const plano = this.plano.find((value) => value.id == id);
        return plano;
    }

}