import { Controller, Get, Param } from '@nestjs/common';
import { Valor } from './shared/valor';
import { ValorService } from './shared/valor.service';


@Controller('valor')
export class ValorController {
    constructor(private valorService: ValorService
        ) { }
    @Get()
    async getAll() : Promise<Valor[]>{
        return this.valorService.getAll();
    
}  
@Get(':id')
    async getById(@Param('id') id: any ) : Promise<Valor>{
        return this.valorService.getById(id);
    }        
    }
