import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // api istek için http isteği için gerek
import { FormsModule } from '@angular/forms'; // ngModule kullanmak için. html de girilen texti alabilmek için.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import { ToastrModule } from 'ngx-toastr'; //Bildirim işlemleri için. Alertfy gibi

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //// api istek için http isteği için gerek
    FormsModule, // ngModule kullanmak için. html de girilen texti alabilmek için. benim uygulamama forms ile ilgili çalışmları desteğini ver
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }), //Bildirim işlemleri için. Alertfy gibi
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
