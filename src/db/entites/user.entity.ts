
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @ApiProperty({
    description: 'this is your id',
    example: 'unique id',
  })
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @ApiProperty({
    description: 'this is your email',
    example: 'email@email.com',
  })
  @Column({ unique: true, length: 100 })
  userEmail: string;

  @ApiProperty({
    description: 'this is your hash password',
    example: 'hash password'
  })
  @Column({ length: 100 })
  userPassword: string;
}