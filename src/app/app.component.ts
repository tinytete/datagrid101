import { Component, enableProdMode } from '@angular/core';
import { DataSource } from 'devextreme-angular/common/data';
import { DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
import { Service } from './app.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

// ลบโค้ด Module เก่าทิ้งไป (ไม่ต้องมี @NgModule หรือ platformBrowserDynamic)

@Component({
  selector: 'demo-app',
  templateUrl: `app.component.html`,
  styleUrls: [`app.component.scss`],
  providers: [Service], // Service ถูกประกาศที่นี่ (ระดับ Component/Module)
})
export class AppComponent {
  title = 'topchartsfund';

  [x: string]: any;
  dataSource: DataSource;

  collapsed = false;

  contentReady = (e: DxDataGridTypes.ContentReadyEvent) => {
    if (!this.collapsed) {
      this.collapsed = true;
      e.component.expandRow(['EnviroCare']);
    }
  };

  customizeTooltip = ({ originalValue }: Record<string, string>) => ({ text: `${parseInt(originalValue)}%` });

  constructor(service: Service) {
    this.dataSource = service.getDataSource();
  }
}