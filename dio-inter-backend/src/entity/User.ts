import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  accoutnNumber: number;

  @Column()
  accoutnDigit: number;

  @Column()
  wallet: number;

  @Column()
  email: string;

  @Column()
  password: string;
}
