import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Order } from "../entities/Order";
import { User } from "../entities/User";

export const createOrder = async (req: Request, res: Response) => {
    const { userId, items, deliveryAddress, paymentMethod, scheduledTime } = req.body;

    const user = await AppDataSource.getRepository(User).findOneBy({ id: userId });
    if (!user) return res.status(404).json({ message: "User not found" });

    const order = new Order();
    order.user = user;
    order.deliveryAddress = deliveryAddress;
    order.paymentMethod = paymentMethod;
    order.scheduledTime = new Date(scheduledTime);

    order.items = items;
    await AppDataSource.getRepository(Order).save(order);

    res.status(201).json(order);
};

export const getOrder = async (req: Request, res: Response) => {
    const order = await AppDataSource.getRepository(Order).findOne({
        where: { id: parseInt(req.params.id, 10) },
        relations: ["items", "items.product"]
    });

    if (!order) return res.status(404).json({ message: "Order not found" });

    res.json(order);
};
