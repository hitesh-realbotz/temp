import { Injectable } from "@angular/core";
import { CartItem } from "../items/cart/cartItem.model";
import { UserService } from "src/app/users/user.service";
import { Order } from "./order.model";
import { OrderItem } from "./order-item.model";
import { Subject } from "rxjs";
import { Router } from "@angular/router";
import { ItemsService } from "../items/items.service";
import { CartService } from "../items/cart/cart.service";
import { DataStorageService } from "../shared/data-storage.service";


@Injectable({ providedIn: 'root' })
export class OrderService {

    ordersChanged = new Subject<Order[]>();
    orderDetList: Order[] = [];
    constructor(private userService: UserService, private router: Router, private itemService: ItemsService, private cartService: CartService, private dataStorageService: DataStorageService) {
        console.log('Oredr constructor called');

        this.orderDetList = this.orderDetList.filter(order => order.buyerId === this.userService.loggedUser.id ||
            order.orderedItems.some(item => item.sellerId === this.userService.loggedUser.id)
    );
    }


    // newOrder(buyerName: string, contactNo: number, items: CartItem[]) {
    //     const orderItems: OrderItem[] = [];
    //     let totalPrice: number = 0;
    //     for (const selectedItem of items) {
    //         orderItems.push(new OrderItem(selectedItem));
    //         totalPrice += selectedItem.item.price;
    //     }
    //     const newOrder = new Order((this.orderDetList.length+1), this.userService.loggedUser.id, buyerName, contactNo, orderItems, totalPrice);
    //     this.orderDetList.push(newOrder);
    //     console.log(this.orderDetList);
    //     localStorage.setItem('orderDetList', JSON.stringify(this.orderDetList));
    // }

    newOrder(newOrder: Order, items: CartItem[]) {
        const orderItems: OrderItem[] = [];
        for (const selectedItem of items) {
            orderItems.push(new OrderItem(selectedItem));
            console.log(this.itemService.getItemById(selectedItem.item.itemId));
            this.itemService.getItemById(selectedItem.item.itemId).availableQty -= selectedItem.qty;
            console.log(this.itemService.getItemById(selectedItem.item.itemId));
            
        }
        newOrder.orderedItems = orderItems;
        let allOrders: Order[] = JSON.parse(localStorage.getItem('orderDetList'));
        !!allOrders ? '' : allOrders = []; 
        newOrder.orderId = (!!allOrders ? allOrders.length +1 : 1);
        console.log(newOrder);
        const index = this.orderDetList.push(newOrder) - 1;
        if (index != null) {
            this.ordersChanged.next(this.orderDetList);
            this.cartService.clearCart(true);
            console.log(this.orderDetList);
            allOrders.push(newOrder);
            this.dataStorageService.storeItems();
            localStorage.setItem('orderDetList', JSON.stringify(allOrders));
            this.router.navigate(['/orders', newOrder.orderId, 'success']);

        } else {

        }

    }

    getOrders() {
        return this.orderDetList.slice();
    }
    getOrderByIndex(index: number) {
        return this.orderDetList[index];
    }
    getOrderById(index: number) {
        return this.orderDetList.find(order => order.orderId === index)
    }
    getOrdersByBuyerId(index: string) {
        return this.orderDetList.filter(order => order.buyerId === index)
    }

    getOrdersBySellerId(sellerId: string) {
        return this.orderDetList.filter(order =>
            order.orderedItems.some(item => item.sellerId === sellerId));
    }

    getItemById(id: number){
        return this.itemService.getItemById(id);
    }
    getItemIndexById(id: number){
        return this.itemService.getItemIndexById(id);
    }
}