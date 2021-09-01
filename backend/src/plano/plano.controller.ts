import { Controller, Get, Param } from '@nestjs/common';
import { User } from 'src/user/shared/user';
import { Plano } from './shared/plano';
import { PlanoService } from './shared/plano.service';

@Controller('plano')
export class PlanoController {
   private: any; 
    constructor(private planoService: PlanoService) { }
 
    @Get('')
    async getAll() : Promise<Plano[]>{
        return this.planoService.getAll();
    }  
    
// @Post()
//     async create (@Body() plano: Plano): Promise<Plano> {
//     return this.planoService.create(plano);    
//    }}


}




    
