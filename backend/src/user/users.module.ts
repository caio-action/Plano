import { Module } from '@nestjs/common';
import { PlanoModule } from 'src/plano/plano.module';
import { UserService } from './shared/user.service';
import { UsersController } from './users.controller';


@Module({
    imports:[PlanoModule],
    controllers: [UsersController],
    providers: [UserService],
    exports:[UserService]
   

})
export class UsersModule {}
