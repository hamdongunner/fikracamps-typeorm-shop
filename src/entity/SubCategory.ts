import { Category } from "./Category";
import { Product } from "./Product";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";

@Entity()
export class SubCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  nameAr: string;

  @Column()
  active: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // Relations
  // categoryId TODO:

  // sub => many
  // cat => one

  @ManyToOne((type) => Category, (category) => category.subcategories)
  category: Category;

  @OneToMany((type) => Product, (product) => product.subcategory)
  products: Product[];
}
