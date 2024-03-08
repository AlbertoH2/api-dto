import { Body, Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto/users.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    getAllUsers() {
        return this.usersService.getAllUsers();
    }

    @Get(':Id')
    getUser(@Param('Id') Id: string) {
        return this.usersService.getUserByid(Id);
    }

    @Post()
    createTask(@Body() newUser: CreateUserDto) {
        return this.usersService.createUser(newUser.UserName, newUser.Password);
    }


    @Delete(':Id')
    deleteTask(@Param('Id') Id: string) {
        this.usersService.deleteUser(Id)
    }

    @Patch(':Id')
    updateTask(@Param('Id') Id: string, @Body() updateFields: UpdateUserDto) {
        return this.usersService.updateUser(Id, updateFields)

    }
}






