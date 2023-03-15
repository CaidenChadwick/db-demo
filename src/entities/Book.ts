<<<<<<< HEAD
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
=======
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Relation } from 'typeorm';
import { Review } from './Review';
>>>>>>> a673bcbd9461c2cfc3148828360d06c16c62face

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  bookId: string;

  @Column()
  title: string;

  @Column({ nullable: true })
<<<<<<< HEAD
  published: number;
=======
  publicationYear: number;
>>>>>>> a673bcbd9461c2cfc3148828360d06c16c62face

  @Column({ default: false })
  inPublicDomain: boolean;

<<<<<<< HEAD
  @OneToMany(() => Review, (review) => review.book)
  reviews: Relation<Review>[];

  @ManyToMany(() => Author, (author) => author.books)
  @JoinTable()
  authors: Relation<Author>[];
=======
  @OneToMany(() => Review, (review) => review.book, { cascade: ['insert', 'update'] })
  reviews: Relation<Review>[];
>>>>>>> a673bcbd9461c2cfc3148828360d06c16c62face
}
