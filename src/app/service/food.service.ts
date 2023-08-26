import { Injectable } from "@angular/core";
import { Food } from "../models/food.model";

@Injectable({
    providedIn: 'root'
})
export class FoodService {
    getFoods(): Food[] {
        return [
            {
                id: 1,
                title: 'Sea Food',
                price: 12000,
                image: 'assets/images/foods/seafood-dishes.png',
                description: 'adalah sebutan untuk makanan berupa hewan dan tumbuhan laut yang ditangkap, dipancing, diambil dari laut maupun hasil budidaya. Burung dan burung air yang terdapat di laut tidak termasuk ke dalam makanan laut.'
            },
            {
                id: 2,
                title: 'Hamburger',
                price: 15000,
                image: 'assets/images/foods/hamburger.png',
                description: 'adalah sebutan untuk makanan berupa hewan dan tumbuhan laut yang ditangkap, dipancing, diambil dari laut maupun hasil budidaya. Burung dan burung air yang terdapat di laut tidak termasuk ke dalam makanan laut.'
            },
            {
                id: 3,
                title: 'Mussels',
                price: 20000,
                image: 'assets/images/foods/mussel.png',
                description: 'adalah sebutan untuk makanan berupa hewan dan tumbuhan laut yang ditangkap, dipancing, diambil dari laut maupun hasil budidaya. Burung dan burung air yang terdapat di laut tidak termasuk ke dalam makanan laut.'
            },
            {
                id: 4,
                title: 'Pizza',
                price: 12000,
                image: 'assets/images/foods/pizza.png',
                description: 'adalah sebutan untuk makanan berupa hewan dan tumbuhan laut yang ditangkap, dipancing, diambil dari laut maupun hasil budidaya. Burung dan burung air yang terdapat di laut tidak termasuk ke dalam makanan laut.'
            },
            {
                id: 5,
                title: 'Breakfast',
                price: 14000,
                image: 'assets/images/foods/scott-ish-dish.png',
                description: 'adalah sebutan untuk makanan berupa hewan dan tumbuhan laut yang ditangkap, dipancing, diambil dari laut maupun hasil budidaya. Burung dan burung air yang terdapat di laut tidak termasuk ke dalam makanan laut.'
            },
            {
                id: 6,
                title: 'Tambi',
                price: 10000,
                image: 'assets/images/foods/tambi.png',
                description: 
                'adalah sebutan untuk makanan berupa hewan dan tumbuhan laut yang ditangkap, dipancing, diambil dari laut maupun hasil budidaya. Burung dan burung air yang terdapat di laut tidak termasuk ke dalam makanan laut.'
            },
        ];
    }
    getFood(id: number): Food | undefined{
        return this.getFoods().find((food) => food.id === id);
    }
}