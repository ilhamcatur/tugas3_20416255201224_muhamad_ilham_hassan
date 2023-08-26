import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CartItem } from "../models/cart-item-models";
import {map} from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private item$ = new BehaviorSubject<CartItem[]>([
        {
            id: 1,
            name: 'Sea Food',
            price: 12000,
            image: 'assets/images/foods/seafood-dishes.png',
            quantity: 1,
        },
    ]);
    items$: any;
    
    getCart() {
        return this.item$.asObservable();
    }
    addToCart(newItem: CartItem) {
        this.item$.next([...this.item$.getValue(), newItem])
    }

    removeItem(id: number) {
        this.item$.next(this.item$.getValue().filter(item => item.id !== id))
    }

    changeQty(quantity: number, id: number) {
        const items = this.items$.getValue();
        const index = items.findIndex((item : CartItem) => item.id === id);
        items[index].quantity += quantity;
        this.items$.next(items);
    }
}