import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { User } from "./User";
import { OrderItem } from "./OrderItem";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    deliveryAddress!: string;

    @Column()
    paymentMethod!: string;

    @Column()
    scheduledTime!: Date;

    @ManyToOne(() => User, user => user.orders)
    user!: User;

    @OneToMany(() => OrderItem, item => item.order)
    items!: OrderItem[];
}
