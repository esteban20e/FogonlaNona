import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { Order } from "./Order";
import { Product } from "./Product";

@Entity()
export class OrderItem {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Order, order => order.items)
    order!: Order;

    @ManyToOne(() => Product)
    product!: Product;

    @Column()
    quantity!: number;
}
