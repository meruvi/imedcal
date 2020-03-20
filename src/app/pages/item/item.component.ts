import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Item } from 'src/app/interfaces/item.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: Item;
  itemId: string;

  constructor( private route: ActivatedRoute, public productoService: ProductosService) { }

  ngOnInit(): void {

    this.route.params.subscribe(param => {
      // console.log(param.id);
      this.productoService.getProducto(param.id)
          .subscribe( ( producto: Item) => {

            this.itemId = param.id;
            this.producto = producto;

          });
    });
  }
}
