import { Component } from '@angular/core';
//Component kullanabilmek için lazım.

@Component({
  selector: 'app-root',
  //uygulama da ul li gibi hmtl tagı gibi kullanabiliyoruz. selector. 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //köşeli parantez array demek dizi demek birden fazla css dosyası koyulablir.
  //componentin css lerini koyduğumuz yerdir.
})

//angularda herşey class
//component : html in datasını yönetiğimiz yer
//@Component sen bir classın ama AppComponent bir componetsin. Attibute c#
//javascpric süslü parantez obje demek.
export class AppComponent {
  title: string = 'northwind';
  user: string = "Bünyamin FİDAN"
  //any: herşey olabilir.
  //süslü parantez obje demek.
  //obje isimlendirmeleri camelCase
  //C# ise tam dersi
  //küçük büyük harf duyarlı.
 

}

