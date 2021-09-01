import { UserService } from './shared/user.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './shared/user'


@Controller('users')
export class UsersController {
    user: any

    constructor(private userService: UserService) { }

    @Get()
    async getAll(): Promise<User[]> {
        return this.userService.getAll();

    }
    //    @Get(':id')
    //    async getById(@Param('id') id: number) : Promise<User>{
    //        return this.userService.getById(id);


    @Post()
    async userData(@Body()user: User): Promise<User> {
        
        return this.userService.create;
    }

    

}
