import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
  Relation,
} from 'typeorm';
import { Review } from './Review';
import { Author } from './Author';

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  bookId: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  published: number;

  @Column({ default: false })
  inPublicDomain: boolean;

  @OneToMany(() => Review, (review) => review.book)
  reviews: Relation<Review>[];

  @ManyToMany(() => Author, (author) => author.books)
  @JoinTable()
  authors: Relation<Author>[];
}
