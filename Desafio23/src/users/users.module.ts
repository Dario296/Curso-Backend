import { Module } from '@nestjs/common';
import { UsersService } from './2Service/users.service';

@Module({
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
