import { UserService } from './shared/user.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from './shared/user'


@Controller('users')
export class UsersController {
    usersService: any;
    
    constructor(private userService:UserService){

    
        
    }
   @Get()
   async getAll() : Promise<User[]>{
       return this.userService.getAll();

   }
   @Get(':id')
   async getById(@Param('id') id: number) : Promise<User>{
       return this.userService.getById(id);

   }
   @Post()
    async create (@Body() user: User): Promise<User> {
    return this.userService.create(user);    
   }
}