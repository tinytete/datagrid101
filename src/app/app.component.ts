import { Component, enableProdMode } from '@angular/core';

import { DxChartModule } from 'devextreme-angular';
import { Data, Service } from './app.service';
import { DxDataGridTypes } from 'devextreme-angular/ui/data-grid';


@Component({
  selector: 'demo-app',
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.scss',
  providers: [Service],
})
export class AppComponent {
  dataSource: Data[];
  shouldBeDisabled: boolean = true;

  constructor(service: Service) {
    this.dataSource = service.getData();
  }

  getFilePath(text: string) {
    return `images/flags/3x2/${text.toLowerCase().replace(' ', '')}.svg`;
  }
}

