import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'ngx-bc-legendchart',
  templateUrl: './LegendChart.component.html'
})

export class LegendChartComponent implements OnInit {
  @Input() data: any;
  @Input() chartConfig: any;

  private d3Selection = require('d3-selection');
  private legendChart = require('britecharts/dist/umd/legend.min');
  private colors = require('britecharts/dist/umd/colors.min');

  public legend: any = this.legendChart();

  constructor() {
    Observable.fromEvent(window, 'resize')
      .debounceTime(250)
      .subscribe(() => {
        this.redrawChart();
      });
  }

  ngOnInit() {
    this.drawLegend();
  }

  public drawLegend() {
    if (this.data) {
      var legendContainer = this.d3Selection.select('.legend-chart-container'),
        containerWidth = legendContainer.node() ? legendContainer.node().getBoundingClientRect().width : false;

      if (containerWidth) {
        this.legend.width(containerWidth);

        for (let option in this.chartConfig["properties"]) {
          if (this.legend.hasOwnProperty(option) && option != 'colorSchema') {
            this.legend[option](this.chartConfig["properties"][option]);
          }
        }

        if (this.chartConfig.hasOwnProperty('colors')) {
          if (this.chartConfig['colors'].hasOwnProperty('colorSchema')) {
            if (this.colors.colorSchemas.hasOwnProperty(this.chartConfig['colors']['colorSchema'])) {
              this.legend.colorSchema(this.colors.colorSchemas[this.chartConfig['colors']['colorSchema']]);
            }
          } else if (this.chartConfig['colors'].hasOwnProperty('customSchema')) {
            this.legend.colorSchema(this.chartConfig['colors']['customSchema']);
          }
        }

        legendContainer.datum(this.data).call(this.legend);
      }
    }
  }

  public redrawChart() {
    let container = this.d3Selection.select('.legend-chart-container');
    let newContainerWidth = container.node() ? container.node().getBoundingClientRect().width : false;
    this.legend.width(newContainerWidth);
    this.d3Selection.selectAll('.legend-entry-value, .legend-entry-name').remove();
    container.datum(this.data).call(this.legend);
    this.d3Selection.selectAll('.legend-line > .legend-circle').remove();
  }
}
