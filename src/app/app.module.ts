import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // นำเข้าเพื่อ Bootstrap
// นำเข้า AppRoutingModule ถ้ามี (จากโค้ดที่คุณให้มามี AppRoutingModule)
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component'; // นำเข้า Component
// นำเข้า DevExtreme Modules ที่ Component ใช้งาน
import { DxBulletModule, DxTemplateModule } from 'devextreme-angular'; 
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';

@NgModule({
  declarations: [
    AppComponent // ประกาศ Component ที่จะใช้งานใน Module นี้
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    DxDataGridModule, // DevExtreme Data Grid
    DxTemplateModule, // DevExtreme Template
    DxBulletModule,  // DevExtreme Bullet Chart
  ],
  providers: [], // ประกาศ Service ถ้าต้องการให้ใช้ได้ทั้งแอปฯ (แต่คุณประกาศใน Component แล้ว)
  bootstrap: [AppComponent] // บอก Angular ว่าให้เริ่มต้นที่ Component นี้
})
export class AppModule { }

// เริ่มต้นแอปพลิเคชันด้วย Module นี้
platformBrowserDynamic().bootstrapModule(AppModule);