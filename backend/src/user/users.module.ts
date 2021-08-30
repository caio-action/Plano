import { Module } from '@nestjs/common';
import { UserService } from './shared/user.service';
import { UsersController } from './users';

@Module({
    controllers: [UsersController],
    providers: [UserService]

})
export class UsersModule {}
