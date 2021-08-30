import { Controller, Get, Param } from '@nestjs/common';
import { Plano } from './shared/plano';
import { PlanoService } from './shared/plano.service';

@Controller('plano')
export class PlanoController {
    constructor(private planoService: PlanoService
        ) { }
    @Get()
    async getAll() : Promise<Plano[]>{
        return this.planoService.getAll();
    
}  
@Get(':id')
    async getById(@Param('id') id: number ) : Promise<Plano>{
        return this.planoService.getById(id);
    }        
    }





    
