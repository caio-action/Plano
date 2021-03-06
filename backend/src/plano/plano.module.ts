import { Module } from '@nestjs/common';
import { PlanoController } from './plano.controller';
import { PlanoService } from './shared/plano.service';

@Module({
    
    controllers: [PlanoController],
    providers: [PlanoService],
    exports:[PlanoService]
})
export class PlanoModule {}
