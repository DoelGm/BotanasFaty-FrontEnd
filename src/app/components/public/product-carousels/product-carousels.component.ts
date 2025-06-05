import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-carousels',
  imports: [CommonModule, CarouselModule, RouterLink],
  templateUrl: './product-carousels.component.html',
  styleUrl: './product-carousels.component.css'
})
export class ProductCarouselsComponent {
productos: any[] = [];
  ngOnInit(): void {
  this.productos = [
    {
      nombre: 'Producto Ejemplo',
      descripcion: 'Descripción Ejemplo',
      precio: '$10.00',
      imagen: 'assets/img/PlaceholderLC.png'
    },
    {
      nombre: 'Producto Ejemplo',
      descripcion: 'Descripción Ejemplo',
      precio: '$12.00',
      imagen: 'assets/img/PlaceholderLC.png'
    },
    {
      nombre: 'Producto Ejemplo',
      descripcion: 'Descripción Ejemplo',
      precio: '$12.00',
      imagen: 'assets/img/PlaceholderLC.png'
    },
    {
      nombre: 'Producto ejemplo',
      descripcion: 'Descripción Ejemplo',
      precio: '$12.00',
      imagen: 'assets/img/PlaceholderLC.png'
    },
    {
      nombre: 'Producto ejemplo',
      descripcion: 'Descripción Ejemplo',
      precio: '$12.00',
      imagen: 'assets/img/vegetable-item-4.jpg'
    },
    {
      nombre: 'Producto Ejemplo',
      descripcion: 'Descripción Ejemplo',
      precio: '$12.00',
      imagen: 'assets/img/vegetable-item-4.jpg'
    },
  ];

  console.log(this.productos);
}
  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    navText: ['‹', '›'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  };
}
