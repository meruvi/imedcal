import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    menu = false;

  constructor(public infoServicio: InfoPaginaService,
              private router: Router) { }

  ngOnInit(): void {
  }

  buscarProducto( termino: string) {

    if (termino.length <= 0) {
      return;
    }
    this.hideMenu();
    this.router.navigate(['/search', termino]);
  }

  hideMenu() {
    this.menu = false;
  }

  showMenu() {
    console.log('show');
    this.menu = !this.menu;
  }

}
