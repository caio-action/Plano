import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlanoModule } from './plano/plano.module';
import { ValorController } from './valor/valor.controller';
import { ValorService } from './valor/shared/valor.service';
import { ValorModule } from './valor/valor.module';
import { UsersModule } from './user/users.module';
import { UsersController } from './user/users.controller';
import { UserService } from './user/shared/user.service';


@Module({
  imports: [PlanoModule, ValorModule, UsersModule,],
  controllers: [AppController, ValorController, UsersController],
  providers: [AppService, ValorService, UserService],
})
export class AppModule {}
