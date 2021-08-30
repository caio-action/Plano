import { Module } from '@nestjs/common';
import { ValorController } from './valor.controller';
import { ValorService } from './shared/valor.service';

@Module({
    controllers: [ValorController],
    providers: [ValorService]
})
export class ValorModule {}
