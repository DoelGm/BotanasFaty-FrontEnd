import { Component } from '@angular/core';
import { WelcomeComponent } from "../../../components/public/welcome/welcome.component";
import { FeatursComponent } from "../../../components/public/featurs/featurs.component";
import { ProductCarouselsComponent } from "../../../components/public/product-carousels/product-carousels.component";

@Component({
  selector: 'app-home',
  imports: [WelcomeComponent, FeatursComponent, ProductCarouselsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
