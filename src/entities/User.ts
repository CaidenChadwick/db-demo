import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  Relation,
  JoinColumn,
} from 'typeorm';
import { Review } from './Review';
import { AvatarPhoto } from './AvatarPhoto';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  passwordHash: string;

  @Column({ default: false })
  verifiedEmail: boolean;

  @Column({ default: 0 })
  profileViews: number;

  @OneToOne(() => AvatarPhoto, (avatarPhoto) => avatarPhoto.user)
  @JoinColumn()
  avatarPhoto: Relation<AvatarPhoto>;

  @OneToMany(() => Review, (review) => review.user, { cascade: ['insert', 'update'] })
  reviews: Relation<Review>[];
}
