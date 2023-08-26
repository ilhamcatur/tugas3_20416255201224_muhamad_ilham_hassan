import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item-models';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartItem$!: Observable<CartItem[]>;
  totalAmount$!: Observable<number>;

  constructor(private cartService: CartService, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.cartItem$ = this.cartService.getCart();
  }

  onIncrease(item: CartItem) {
    this.cartService.changeQty(1, item.id);
  }

  onDecrease(item: CartItem) {
    if (item.quantity ===1) this.removeFromCart(item)
    else this.cartService.changeQty(-1, item.id);
  }

  async removeFromCart(item: CartItem) {
    const alert = await this.alertCtrl.create({
      header: 'Remove',
      message: 'Are you sure you want remove',
      buttons: [
        {
        text: 'Yes',
        handler: () => this.cartService.removeItem(item.id)
        },
        {
          text: 'No'
        }
      ]
  });
    alert.present()
  }
}
