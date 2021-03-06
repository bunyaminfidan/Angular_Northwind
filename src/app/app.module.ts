import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; // api istek için http isteği için gerek
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // ngModule kullanmak için. html de girilen texti alabilmek için.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { LoginComponent } from './components/login/login.component'; //Bildirim işlemleri için. Alertfy gibi
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    ProductAddComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //// api istek için http isteği için gerek
    FormsModule, // ngModule kullanmak için. html de girilen texti alabilmek için. benim uygulamama forms ile ilgili çalışmları desteğini ver
    ReactiveFormsModule, //add işlemleri için gerekli
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }), //Bildirim işlemleri için. Alertfy gibi
  ],
  ////C# middleware benzeri token ekleme işlemi çalışması için eklendi
  //global injektion kısmı
  //HTTP_INTERCEPTORS ile bütün http isteklere dahil etmiş oluyoruz.
  //useClass:AuthInterceptor bu arkadaş çalışsın diyoruz.
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
