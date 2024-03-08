import { Injectable } from '@nestjs/common';
import { Users } from './users.entity';
import { UpdateUserDto } from './dto/users.dto';

@Injectable()
export class UsersService {
    private users: Users[] = [
        {
            Id: '1',
            UserName: 'Alberto',
            Password: 'chocolate'
        },
    ];

    getAllUsers() {
        return this.users;
    }

    createUser(UserName: string, Password: string) {
        const user = {
            Id: new Date().toISOString(),
            UserName,
            Password,
        };
        this.users.push(user);

        return user;
    }

    getUserByid(Id: string): Users {
        return this.users.find(user => user.Id == Id)
    }
    updateUser(Id: string, updateFields: UpdateUserDto) {
        const user = this.getUserByid(Id)
        const newUser = Object.assign(user, updateFields)
        this.users = this.users.map(user => user.Id === Id ? newUser : user)
        return newUser;
    }

    deleteUser(Id: string) {
        this.users = this.users.filter(users => users.Id !== Id)
    }
}





