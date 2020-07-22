import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { AppRoutingModule } from './app-routing.module';
import { ShearchComponent } from './pages/shearch/shearch.component';
import { BranchComponent } from './pages/branch/branch.component';
import { ProductComponent } from './pages/product/product.component';
import { ServiceComponent } from './pages/service/service.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GCarouselComponent } from './components/g-carousel/g-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent,
    ShearchComponent,
    BranchComponent,
    GCarouselComponent,
    ProductComponent,
    ServiceComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
