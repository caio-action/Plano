import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { Plano } from './plano';

@Injectable()
export class PlanoService {
    
   constructor(){}
     private plano: Plano[] = [

        {  id: 1, nome: "Bitix Customer Plano 1", codigo: 1, reg:"reg1" },
        {  id: 2, nome: "Bitix Customer Plano 2", codigo: 2, reg:"reg2" },
        {  id: 3, nome: "Bitix Customer Plano 3", codigo: 3, reg:"reg3" },
        {  id: 4, nome: "Bitix Customer Plano 4", codigo: 4, reg:"reg4" },
        {  id: 5, nome: "Bitix Customer Plano 5", codigo: 5, reg:"reg5" },
        {  id: 6, nome: "Bitix Customer Plano 6", codigo: 6, reg:"reg6" },
           
    ];
    
    
    getAll(){
        return this.plano;
    }

    




   }