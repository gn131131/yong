import { Component, OnInit } from '@angular/core';
import { ECharts } from 'echarts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
  list = [
    {
      name: '测试',
      i1: 0,
      i2: 0, 
      i3: 0,
      i4: 0,
      i5: 0,
      i6: 0
    },
  ];

  chartOptions = null;

  constructor() {}

  ngOnInit(): void {
    this.setOptions();
  }

  onAdd() {
    this.list.push({
      name: '',
      i1: 0,
      i2: 0,
      i3: 0,
      i4: 0,
      i5: 0,
      i6: 0
    });
  }

  setOptions() {
    let legend = this.list.map(item =>  item.name);
    let data = this.list.map(item => {
      return {
        name: item.name,
        value: [item.i1, item.i2, item.i3, item.i4, item.i5, item.i6]
      }
    });
    this.chartOptions = {
      title: {
        text: '纬度',
      },
      legend: {
        data: legend,
      },
      radar: {
        // shape: 'circle',
        indicator: [
          { name: '一维', max: 100 },
          { name: '二维', max: 100 },
          { name: '三维', max: 100 },
          { name: '四维', max: 100 },
          { name: '五维', max: 100 },
          { name: '六维', max: 100 },
        ],
      },
      series: [
        {
          name: '纬度',
          type: 'radar',
          data: data,
        },
      ],
    };
  }

  chart: ECharts;

  chartInit(ec: ECharts) {
    this.chart = ec;
  }
}
