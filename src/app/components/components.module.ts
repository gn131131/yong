import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { FormsModule } from '@angular/forms';
import { ChartsComponent } from './charts/charts.component';
import { IndexComponent } from './index/index.component';
import { NgxEchartsModule } from 'ngx-echarts';



@NgModule({
  declarations: [
    ChartsComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ]
})
export class ComponentsModule { }
