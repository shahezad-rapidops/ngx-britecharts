import { Component, EventEmitter, ViewChild } from '@angular/core';
import {
  BarChartComponent, BrushChartComponent, ChartComponent, DonutChartComponent, LegendChartComponent, LineChartComponent
} from '@colap-dev/ngx-britecharts/dist';
import { BarChartData } from './../../../data/BarChartData';
import { BulletChartData } from './../../../data/BulletChartData';
import { HeatmapChartData } from './../../../data/HeatmapChartData';
import { LineChartData } from './../../../data/LineChartData';
import { DonutChartData } from './../../../data/DonutChartData';
import { BrushChartData } from './../../../data/BrushChartData';
import { StepChartData } from './../../../data/StepChartData';
import { StackedAreaChartData } from './../../../data/StackedAreaChartData';

import { ChartType } from '@colap-dev/ngx-britecharts/dist/components/chart/Chart.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @ViewChild('barChart') barChart: ChartComponent;
  @ViewChild('horizontalBarChart') horizontalBarChart: ChartComponent;
  @ViewChild('lineChart') lineChart: ChartComponent;
  @ViewChild('donutChart') donutChart: ChartComponent;
  @ViewChild('donutLegendChart') donutLegendChart: ChartComponent;
  @ViewChild('brushChart') brushChart: ChartComponent;
  @ViewChild('stackedAreaChart') stackedAreaChart: ChartComponent;



  @ViewChild('legendChart') legendChart: LegendChartComponent;
  @ViewChild('multilineBrushChart') multilineBrushChart: BrushChartComponent;
  @ViewChild('bulletChart1') bulletChart1: ChartComponent;
  @ViewChild('bulletChart2') bulletChart2: ChartComponent;
  @ViewChild('bulletChart3') bulletChart3: ChartComponent;
  @ViewChild('heatmapChart') heatmapChart: ChartComponent;

  private barChartDataGen: BarChartData = new BarChartData();
  private bulletChartDataGen: BulletChartData = new BulletChartData();
  private heatmapChartDataGen: HeatmapChartData = new HeatmapChartData();
  private lineChartDataGen: LineChartData = new LineChartData();
  private donutChartDataGen: DonutChartData = new DonutChartData();
  private brushChartDataGen: BrushChartData = new BrushChartData();
  private stepChartDataGen: StepChartData = new StepChartData();
  private stackedAreaChartDataGen: StackedAreaChartData = new StackedAreaChartData();


  // barChart
  public firstBarChartData = this.barChartDataGen.getLetterBarChartData();
  public firstBarChartConfig = {
    properties: {
      hasPercentage: true,
      enableLabels: false,
      labelsNumberFormat: '.0%',
      height: 300
    },
  };

  // horizontalBarChart
  public horizontalBarChartData = this.barChartDataGen.getHorizontalBarChartData();
  public horizontalBarChartConfig = {
    properties: {
      isHorizontal: true,
      isAnimated: true,
      margin: {
        left: 120,
        right: 20,
        top: 20,
        bottom: 30
      },
      yAxisPaddingBetweenChart: 30,
      height: 300,
      percentageAxisToMaxRatio: 1.3,
    },
    colors: {
      colorSchema: 'britecharts'
    },
  };

  // lineChart
  public lineChartData = this.lineChartDataGen.geLineChartData();
  public lineChartConfig = {
    properties: {
      isAnimated: true,
      aspectRatio: 0.5,
      grid: 'horizontal',
      tooltipThreshold: 600,
      margin: {
        top: 60,
        bottom: 50,
        left: 50,
        right: 30
      },
      dateLabel: 'fullDate',
    }
  };

  // donutChart and donutLegendChart
  public donutChartData = this.donutChartDataGen.getDonutChartData();
  public donutChartConfig = {
    properties: {
      isAnimated: true,
      highlightSliceById: 2,
    }
  };
  public donutLegendChartConfig = {
    properties: {
      height: 200,
      numberFormat: 's'
    }
  };

  // brushChart
  public brushChartData = this.brushChartDataGen.getBrushChartData();
  public brushChartConfig = {
    properties: {
      height: 150,
    }
  };

  // stepChart
  public stepChartData = this.stepChartDataGen.getStepChartData();
  public stepChartConfig = {
    properties: {
      height: 300,
      xAxisLabel: 'Meal Type',
      xAxisLabelOffset: 45,
      yAxisLabel: 'Quantity',
      yAxisLabelOffset: -50,
      margin: {
        top: 40,
        right: 40,
        bottom: 50,
        left: 80
      }
    }
  };

  // stackedAreaChart
  public stackedAreaChartData = this.stackedAreaChartDataGen.getStackedAreaChartData();
  public stackedAreaChartConfig = {
    properties: {
      isAnimated: true,
      tooltipThreshold: 600,
      dateLabel: 'dateUTC',
      valueLabel: 'views',
      grid: 'horizontal',
    }
  };



  // bulletChart
  public bulletChartData1 = this.bulletChartDataGen.getBulletDataCpuUsageChartData()[0];
  public bulletChartData2 = this.bulletChartDataGen.getBulletDataCpuUsageChartData()[1];
  public bulletChartData3 = this.bulletChartDataGen.getBulletDataCpuUsageChartData()[2];

  public bulletChartConfig = {
    properties: {
      height: 150,
    },
  };

  // heatmapChart
  public heatmapChartData = this.heatmapChartDataGen.getHeatmapWeeklyChartData();

  public heatmapChartConfig = {
    properties: {
      height: 250
    },
  };



















  public exportBarChart: EventEmitter<any> = new EventEmitter<any>();
  public exportBarChartClick() {
    this.exportBarChart.emit({
      'filename': 'Exported bar chart.png',
      'title': 'Chart title'
    });
  }

  private onDemoChartClick($ev) {
    console.log($ev);
  }

  public configCustomEventsBarChart(ready) {
    /*if (ready) {
      let that = this;
      this.barChart.bar.on('customMouseOver', function () {
        that.barChart.tooltip.show();
      });
      this.barChart.bar.on('customMouseMove', function (data, pos, size) {
        that.barChart.tooltip.update(data, pos, size);
        // We are about to send a pull request to britecharts in order to make
        // this more efficient.
        for (let d of that.firstBarChartData) {
          if (d["name"] == data["name"]) {
            that.legendChart.legend.highlight(d["id"]);
            break;
          }
        }
      })
      this.barChart.bar.on('customMouseOut', function () {
        that.barChart.tooltip.hide();
        that.legendChart.legend.clearHighlight();
      });
    }*/
  }

  public groupedBarChartData = [
    {
      "stack": "shiny",
      "name": "Direct1",
      "views": 3,
      "date": "2011-01-05"
    },
    {
      "stack": "shiny",
      "name": "Direct2",
      "views": 10,
      "date": "2011-01-06"
    },
    {
      "stack": "shiny",
      "name": "Direct3",
      "views": 16,
      "date": "2011-01-07"
    },
    {
      "stack": "shiny",
      "name": "Direct4",
      "views": 23,
      "date": "2011-01-08"
    },
    {
      "stack": "radiant",
      "name": "Eventbrite1",
      "views": 23,
      "date": "2011-01-05"
    },
    {
      "stack": "radiant",
      "name": "Eventbrite2",
      "views": 16,
      "date": "2011-01-06"
    },
    {
      "stack": "radiant",
      "name": "Eventbrite3",
      "views": 10,
      "date": "2011-01-07"
    },
    {
      "stack": "radiant",
      "name": "Eventbrite4",
      "views": 4,
      "date": "2011-01-08"
    },
    {
      "stack": "luminous",
      "name": "Email1",
      "views": 10,
      "date": "2011-01-05"
    },
    {
      "stack": "luminous",
      "name": "Email2",
      "views": 20,
      "date": "2011-01-06"
    },
    {
      "stack": "luminous",
      "name": "Email3",
      "views": 26,
      "date": "2011-01-07"
    },
    {
      "stack": "luminous",
      "name": "Email4",
      "views": 33,
      "date": "2011-01-08"
    }
  ];
  public gorupedBarChartConfig = {
    properties: {
      height: 500,
      tooltipThreshold: 600,
      grid: 'horizontal',
      isAnimated: false,
      groupLabel: 'stack',
      nameLabel: 'date',
      valueLabel: 'views'
    },
    click: this.onDemoChartClick,
    showTooltip: true, // Dont set to true if you are going to use custom mouse events.
    tooltip: {
      topicLabel: "values",
      dateLabel: "key",
      nameLabel: "stack",
      title: "Testing",
    }
  };

  public stackedBarChartData = [
    {
      "stack": "vivid",
      "name": "Direct1",
      "views": 0,
      "date": "2011-01-05"
    },
    {
      "stack": "vivid",
      "name": "Direct2",
      "views": 10,
      "date": "2011-01-06"
    },
    {
      "stack": "vivid",
      "name": "Direct3",
      "views": 16,
      "date": "2011-01-07"
    },
    {
      "stack": "vivid",
      "name": "Direct4",
      "views": 23,
      "date": "2011-01-08"
    },
    {
      "stack": "sparkling",
      "name": "Eventbrite1",
      "views": 23,
      "date": "2011-01-05"
    },
    {
      "stack": "sparkling",
      "name": "Eventbrite2",
      "views": 16,
      "date": "2011-01-06"
    },
    {
      "stack": "sparkling",
      "name": "Eventbrite3",
      "views": 10,
      "date": "2011-01-07"
    },
    {
      "stack": "sparkling",
      "name": "Eventbrite4",
      "views": 0,
      "date": "2011-01-08"
    },
    {
      "stack": "sunny",
      "name": "Email1",
      "views": 10,
      "date": "2011-01-05"
    },
    {
      "stack": "sunny",
      "name": "Email2",
      "views": 20,
      "date": "2011-01-06"
    },
    {
      "stack": "sunny",
      "name": "Email3",
      "views": 26,
      "date": "2011-01-07"
    },
    {
      "stack": "sunny",
      "name": "Email4",
      "views": 33,
      "date": "2011-01-08"
    }
  ];

  public stackedBarChartConfig = {
    properties: {
      height: 500,
      tooltipThreshold: 600,
      grid: 'horizontal',
      isAnimated: false,
      stackLabel: 'stack',
      nameLabel: 'date',
      valueLabel: 'views'
    },
    click: this.onDemoChartClick,
    showTooltip: true, // Dont set to true if you are going to use custom mouse events.
    tooltip: {
      topicLabel: "values",
      dateLabel: "key",
      nameLabel: "stack",
      title: "Testing",
    }
  };

  public singleLineChartData = { "dataByTopic": [{ "topic": -1, "topicName": "Quantity", "dates": [{ "date": "2016-07-31T07:00:00.000Z", "value": 0, "fullDate": "2016-07-31T00:00:00-07:00" }, { "date": "2016-08-01T07:00:00.000Z", "value": 0, "fullDate": "2016-08-01T00:00:00-07:00" }, { "date": "2016-08-02T07:00:00.000Z", "value": 3, "fullDate": "2016-08-02T00:00:00-07:00" }, { "date": "2016-08-03T07:00:00.000Z", "value": 1, "fullDate": "2016-08-03T00:00:00-07:00" }, { "date": "2016-08-04T07:00:00.000Z", "value": 3, "fullDate": "2016-08-04T00:00:00-07:00" }, { "date": "2016-08-05T07:00:00.000Z", "value": 3, "fullDate": "2016-08-05T00:00:00-07:00" }, { "date": "2016-08-06T07:00:00.000Z", "value": 0, "fullDate": "2016-08-06T00:00:00-07:00" }, { "date": "2016-08-07T07:00:00.000Z", "value": 1, "fullDate": "2016-08-07T00:00:00-07:00" }, { "date": "2016-08-08T07:00:00.000Z", "value": 1, "fullDate": "2016-08-08T00:00:00-07:00" }, { "date": "2016-08-09T07:00:00.000Z", "value": 0, "fullDate": "2016-08-09T00:00:00-07:00" }, { "date": "2016-08-10T07:00:00.000Z", "value": 3, "fullDate": "2016-08-10T00:00:00-07:00" }, { "date": "2016-08-11T07:00:00.000Z", "value": 4, "fullDate": "2016-08-11T00:00:00-07:00" }, { "date": "2016-08-12T07:00:00.000Z", "value": 4, "fullDate": "2016-08-12T00:00:00-07:00" }, { "date": "2016-08-13T07:00:00.000Z", "value": 2, "fullDate": "2016-08-13T00:00:00-07:00" }, { "date": "2016-08-14T07:00:00.000Z", "value": 3, "fullDate": "2016-08-14T00:00:00-07:00" }, { "date": "2016-08-15T07:00:00.000Z", "value": 0, "fullDate": "2016-08-15T00:00:00-07:00" }, { "date": "2016-08-16T07:00:00.000Z", "value": 1, "fullDate": "2016-08-16T00:00:00-07:00" }, { "date": "2016-08-17T07:00:00.000Z", "value": 0, "fullDate": "2016-08-17T00:00:00-07:00" }, { "date": "2016-08-18T07:00:00.000Z", "value": 2, "fullDate": "2016-08-18T00:00:00-07:00" }, { "date": "2016-08-19T07:00:00.000Z", "value": 5, "fullDate": "2016-08-19T00:00:00-07:00" }, { "date": "2016-08-20T07:00:00.000Z", "value": 1, "fullDate": "2016-08-20T00:00:00-07:00" }, { "date": "2016-08-21T07:00:00.000Z", "value": 2, "fullDate": "2016-08-21T00:00:00-07:00" }, { "date": "2016-08-22T07:00:00.000Z", "value": 9, "fullDate": "2016-08-22T00:00:00-07:00" }, { "date": "2016-08-23T07:00:00.000Z", "value": 4, "fullDate": "2016-08-23T00:00:00-07:00" }, { "date": "2016-08-24T07:00:00.000Z", "value": 3, "fullDate": "2016-08-24T00:00:00-07:00" }, { "date": "2016-08-25T07:00:00.000Z", "value": 2, "fullDate": "2016-08-25T00:00:00-07:00" }, { "date": "2016-08-26T07:00:00.000Z", "value": 5, "fullDate": "2016-08-26T00:00:00-07:00" }] }] };
  public singleLineChartConfig = {
    properties: {
      height: 500,
      tooltipThreshold: 600,
      grid: 'full',
      lineCurve: 'basis',
      topicNameLabel: "topic",
      dateLabel: "fullDate",
      valueLabel: "value",
    },
    click: this.lineChartClick,
    showTooltip: true,
    tooltip: {
      valueLabel: 'value',
      title: 'Quantity Sold'
    }
  };

  private lineChartClick($ev, d, m) {
    console.log($ev, d, m);
  }

  public multilineChartData = { "dataByTopic": [{ "topic": 103, "dates": [{ "date": "2015-06-27T07:00:00.000Z", "value": 1, "fullDate": "2015-06-27T07:00:00.000Z" }, { "date": "2015-06-28T07:00:00.000Z", "value": 1, "fullDate": "2015-06-28T07:00:00.000Z" }, { "date": "2015-06-29T07:00:00.000Z", "value": 4, "fullDate": "2015-06-29T07:00:00.000Z" }, { "date": "2015-06-30T07:00:00.000Z", "value": 2, "fullDate": "2015-06-30T07:00:00.000Z" }, { "date": "2015-07-01T07:00:00.000Z", "value": 3, "fullDate": "2015-07-01T07:00:00.000Z" }, { "date": "2015-07-02T07:00:00.000Z", "value": 3, "fullDate": "2015-07-02T07:00:00.000Z" }, { "date": "2015-07-03T07:00:00.000Z", "value": 0, "fullDate": "2015-07-03T07:00:00.000Z" }, { "date": "2015-07-04T07:00:00.000Z", "value": 3, "fullDate": "2015-07-04T07:00:00.000Z" }, { "date": "2015-07-05T07:00:00.000Z", "value": 1, "fullDate": "2015-07-05T07:00:00.000Z" }, { "date": "2015-07-06T07:00:00.000Z", "value": 2, "fullDate": "2015-07-06T07:00:00.000Z" }, { "date": "2015-07-07T07:00:00.000Z", "value": 0, "fullDate": "2015-07-07T07:00:00.000Z" }, { "date": "2015-07-08T07:00:00.000Z", "value": 2, "fullDate": "2015-07-08T07:00:00.000Z" }, { "date": "2015-07-09T07:00:00.000Z", "value": 1, "fullDate": "2015-07-09T07:00:00.000Z" }, { "date": "2015-07-10T07:00:00.000Z", "value": 4, "fullDate": "2015-07-10T07:00:00.000Z" }, { "date": "2015-07-11T07:00:00.000Z", "value": 2, "fullDate": "2015-07-11T07:00:00.000Z" }, { "date": "2015-07-12T07:00:00.000Z", "value": 1, "fullDate": "2015-07-12T07:00:00.000Z" }, { "date": "2015-07-13T07:00:00.000Z", "value": 6, "fullDate": "2015-07-13T07:00:00.000Z" }, { "date": "2015-07-14T07:00:00.000Z", "value": 5, "fullDate": "2015-07-14T07:00:00.000Z" }, { "date": "2015-07-15T07:00:00.000Z", "value": 2, "fullDate": "2015-07-15T07:00:00.000Z" }, { "date": "2015-07-16T07:00:00.000Z", "value": 7, "fullDate": "2015-07-16T07:00:00.000Z" }, { "date": "2015-07-17T07:00:00.000Z", "value": 3, "fullDate": "2015-07-17T07:00:00.000Z" }, { "date": "2015-07-18T07:00:00.000Z", "value": 1, "fullDate": "2015-07-18T07:00:00.000Z" }, { "date": "2015-07-19T07:00:00.000Z", "value": 4, "fullDate": "2015-07-19T07:00:00.000Z" }, { "date": "2015-07-20T07:00:00.000Z", "value": 8, "fullDate": "2015-07-20T07:00:00.000Z" }, { "date": "2015-07-21T07:00:00.000Z", "value": 4, "fullDate": "2015-07-21T07:00:00.000Z" }, { "date": "2015-07-22T07:00:00.000Z", "value": 11, "fullDate": "2015-07-22T07:00:00.000Z" }, { "date": "2015-07-23T07:00:00.000Z", "value": 7, "fullDate": "2015-07-23T07:00:00.000Z" }, { "date": "2015-07-24T07:00:00.000Z", "value": 5, "fullDate": "2015-07-24T07:00:00.000Z" }, { "date": "2015-07-25T07:00:00.000Z", "value": 5, "fullDate": "2015-07-25T07:00:00.000Z" }, { "date": "2015-07-26T07:00:00.000Z", "value": 6, "fullDate": "2015-07-26T07:00:00.000Z" }, { "date": "2015-07-27T07:00:00.000Z", "value": 16, "fullDate": "2015-07-27T07:00:00.000Z" }, { "date": "2015-07-28T07:00:00.000Z", "value": 17, "fullDate": "2015-07-28T07:00:00.000Z" }, { "date": "2015-07-29T07:00:00.000Z", "value": 15, "fullDate": "2015-07-29T07:00:00.000Z" }, { "date": "2015-07-30T07:00:00.000Z", "value": 12, "fullDate": "2015-07-30T07:00:00.000Z" }, { "date": "2015-07-31T07:00:00.000Z", "value": 0, "fullDate": "2015-07-31T07:00:00.000Z" }, { "date": "2015-08-01T07:00:00.000Z", "value": 0, "fullDate": "2015-08-01T07:00:00.000Z" }, { "date": "2015-08-02T07:00:00.000Z", "value": 0, "fullDate": "2015-08-02T07:00:00.000Z" }], "topicName": "San Francisco" }, { "topic": 149, "dates": [{ "date": "2015-06-27T07:00:00.000Z", "value": 0, "fullDate": "2015-06-27T07:00:00.000Z" }, { "date": "2015-06-28T07:00:00.000Z", "value": 2, "fullDate": "2015-06-28T07:00:00.000Z" }, { "date": "2015-06-29T07:00:00.000Z", "value": 4, "fullDate": "2015-06-29T07:00:00.000Z" }, { "date": "2015-06-30T07:00:00.000Z", "value": 3, "fullDate": "2015-06-30T07:00:00.000Z" }, { "date": "2015-07-01T07:00:00.000Z", "value": 1, "fullDate": "2015-07-01T07:00:00.000Z" }, { "date": "2015-07-02T07:00:00.000Z", "value": 3, "fullDate": "2015-07-02T07:00:00.000Z" }, { "date": "2015-07-03T07:00:00.000Z", "value": 3, "fullDate": "2015-07-03T07:00:00.000Z" }, { "date": "2015-07-04T07:00:00.000Z", "value": 1, "fullDate": "2015-07-04T07:00:00.000Z" }, { "date": "2015-07-05T07:00:00.000Z", "value": 2, "fullDate": "2015-07-05T07:00:00.000Z" }, { "date": "2015-07-06T07:00:00.000Z", "value": 2, "fullDate": "2015-07-06T07:00:00.000Z" }, { "date": "2015-07-07T07:00:00.000Z", "value": 4, "fullDate": "2015-07-07T07:00:00.000Z" }, { "date": "2015-07-08T07:00:00.000Z", "value": 7, "fullDate": "2015-07-08T07:00:00.000Z" }, { "date": "2015-07-09T07:00:00.000Z", "value": 1, "fullDate": "2015-07-09T07:00:00.000Z" }, { "date": "2015-07-10T07:00:00.000Z", "value": 5, "fullDate": "2015-07-10T07:00:00.000Z" }, { "date": "2015-07-11T07:00:00.000Z", "value": 9, "fullDate": "2015-07-11T07:00:00.000Z" }, { "date": "2015-07-12T07:00:00.000Z", "value": 5, "fullDate": "2015-07-12T07:00:00.000Z" }, { "date": "2015-07-13T07:00:00.000Z", "value": 2, "fullDate": "2015-07-13T07:00:00.000Z" }, { "date": "2015-07-14T07:00:00.000Z", "value": 8, "fullDate": "2015-07-14T07:00:00.000Z" }, { "date": "2015-07-15T07:00:00.000Z", "value": 3, "fullDate": "2015-07-15T07:00:00.000Z" }, { "date": "2015-07-16T07:00:00.000Z", "value": 1, "fullDate": "2015-07-16T07:00:00.000Z" }, { "date": "2015-07-17T07:00:00.000Z", "value": 2, "fullDate": "2015-07-17T07:00:00.000Z" }, { "date": "2015-07-18T07:00:00.000Z", "value": 7, "fullDate": "2015-07-18T07:00:00.000Z" }, { "date": "2015-07-19T07:00:00.000Z", "value": 1, "fullDate": "2015-07-19T07:00:00.000Z" }, { "date": "2015-07-20T07:00:00.000Z", "value": 5, "fullDate": "2015-07-20T07:00:00.000Z" }, { "date": "2015-07-21T07:00:00.000Z", "value": 0, "fullDate": "2015-07-21T07:00:00.000Z" }, { "date": "2015-07-22T07:00:00.000Z", "value": 2, "fullDate": "2015-07-22T07:00:00.000Z" }, { "date": "2015-07-23T07:00:00.000Z", "value": 5, "fullDate": "2015-07-23T07:00:00.000Z" }, { "date": "2015-07-24T07:00:00.000Z", "value": 2, "fullDate": "2015-07-24T07:00:00.000Z" }, { "date": "2015-07-25T07:00:00.000Z", "value": 2, "fullDate": "2015-07-25T07:00:00.000Z" }, { "date": "2015-07-26T07:00:00.000Z", "value": 3, "fullDate": "2015-07-26T07:00:00.000Z" }, { "date": "2015-07-27T07:00:00.000Z", "value": 8, "fullDate": "2015-07-27T07:00:00.000Z" }, { "date": "2015-07-28T07:00:00.000Z", "value": 11, "fullDate": "2015-07-28T07:00:00.000Z" }, { "date": "2015-07-29T07:00:00.000Z", "value": 17, "fullDate": "2015-07-29T07:00:00.000Z" }, { "date": "2015-07-30T07:00:00.000Z", "value": 14, "fullDate": "2015-07-30T07:00:00.000Z" }, { "date": "2015-07-31T07:00:00.000Z", "value": 0, "fullDate": "2015-07-31T07:00:00.000Z" }, { "date": "2015-08-01T07:00:00.000Z", "value": 0, "fullDate": "2015-08-01T07:00:00.000Z" }, { "date": "2015-08-02T07:00:00.000Z", "value": 0, "fullDate": "2015-08-02T07:00:00.000Z" }], "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "topic": 60, "dates": [{ "date": "2015-06-27T07:00:00.000Z", "value": 0, "fullDate": "2015-06-27T07:00:00.000Z" }, { "date": "2015-06-28T07:00:00.000Z", "value": 0, "fullDate": "2015-06-28T07:00:00.000Z" }, { "date": "2015-06-29T07:00:00.000Z", "value": 18, "fullDate": "2015-06-29T07:00:00.000Z" }, { "date": "2015-06-30T07:00:00.000Z", "value": 1, "fullDate": "2015-06-30T07:00:00.000Z" }, { "date": "2015-07-01T07:00:00.000Z", "value": 6, "fullDate": "2015-07-01T07:00:00.000Z" }, { "date": "2015-07-02T07:00:00.000Z", "value": 0, "fullDate": "2015-07-02T07:00:00.000Z" }, { "date": "2015-07-03T07:00:00.000Z", "value": 0, "fullDate": "2015-07-03T07:00:00.000Z" }, { "date": "2015-07-04T07:00:00.000Z", "value": 0, "fullDate": "2015-07-04T07:00:00.000Z" }, { "date": "2015-07-05T07:00:00.000Z", "value": 0, "fullDate": "2015-07-05T07:00:00.000Z" }, { "date": "2015-07-06T07:00:00.000Z", "value": 0, "fullDate": "2015-07-06T07:00:00.000Z" }, { "date": "2015-07-07T07:00:00.000Z", "value": 15, "fullDate": "2015-07-07T07:00:00.000Z" }, { "date": "2015-07-08T07:00:00.000Z", "value": 32, "fullDate": "2015-07-08T07:00:00.000Z" }, { "date": "2015-07-09T07:00:00.000Z", "value": 0, "fullDate": "2015-07-09T07:00:00.000Z" }, { "date": "2015-07-10T07:00:00.000Z", "value": 0, "fullDate": "2015-07-10T07:00:00.000Z" }, { "date": "2015-07-11T07:00:00.000Z", "value": 0, "fullDate": "2015-07-11T07:00:00.000Z" }, { "date": "2015-07-12T07:00:00.000Z", "value": 0, "fullDate": "2015-07-12T07:00:00.000Z" }, { "date": "2015-07-13T07:00:00.000Z", "value": 3, "fullDate": "2015-07-13T07:00:00.000Z" }, { "date": "2015-07-14T07:00:00.000Z", "value": 0, "fullDate": "2015-07-14T07:00:00.000Z" }, { "date": "2015-07-15T07:00:00.000Z", "value": 0, "fullDate": "2015-07-15T07:00:00.000Z" }, { "date": "2015-07-16T07:00:00.000Z", "value": 15, "fullDate": "2015-07-16T07:00:00.000Z" }, { "date": "2015-07-17T07:00:00.000Z", "value": 0, "fullDate": "2015-07-17T07:00:00.000Z" }, { "date": "2015-07-18T07:00:00.000Z", "value": 0, "fullDate": "2015-07-18T07:00:00.000Z" }, { "date": "2015-07-19T07:00:00.000Z", "value": 0, "fullDate": "2015-07-19T07:00:00.000Z" }, { "date": "2015-07-20T07:00:00.000Z", "value": 0, "fullDate": "2015-07-20T07:00:00.000Z" }, { "date": "2015-07-21T07:00:00.000Z", "value": 0, "fullDate": "2015-07-21T07:00:00.000Z" }, { "date": "2015-07-22T07:00:00.000Z", "value": 5, "fullDate": "2015-07-22T07:00:00.000Z" }, { "date": "2015-07-23T07:00:00.000Z", "value": 0, "fullDate": "2015-07-23T07:00:00.000Z" }, { "date": "2015-07-24T07:00:00.000Z", "value": 1, "fullDate": "2015-07-24T07:00:00.000Z" }, { "date": "2015-07-25T07:00:00.000Z", "value": 0, "fullDate": "2015-07-25T07:00:00.000Z" }, { "date": "2015-07-26T07:00:00.000Z", "value": 1, "fullDate": "2015-07-26T07:00:00.000Z" }, { "date": "2015-07-27T07:00:00.000Z", "value": 0, "fullDate": "2015-07-27T07:00:00.000Z" }, { "date": "2015-07-28T07:00:00.000Z", "value": 0, "fullDate": "2015-07-28T07:00:00.000Z" }, { "date": "2015-07-29T07:00:00.000Z", "value": 3, "fullDate": "2015-07-29T07:00:00.000Z" }, { "date": "2015-07-30T07:00:00.000Z", "value": 2, "fullDate": "2015-07-30T07:00:00.000Z" }, { "date": "2015-07-31T07:00:00.000Z", "value": 0, "fullDate": "2015-07-31T07:00:00.000Z" }, { "date": "2015-08-01T07:00:00.000Z", "value": 0, "fullDate": "2015-08-01T07:00:00.000Z" }, { "date": "2015-08-02T07:00:00.000Z", "value": 0, "fullDate": "2015-08-02T07:00:00.000Z" }], "topicName": "Los Angeles" }, { "topic": 81, "dates": [{ "date": "2015-06-27T07:00:00.000Z", "value": 0, "fullDate": "2015-06-27T07:00:00.000Z" }, { "date": "2015-06-28T07:00:00.000Z", "value": 0, "fullDate": "2015-06-28T07:00:00.000Z" }, { "date": "2015-06-29T07:00:00.000Z", "value": 1, "fullDate": "2015-06-29T07:00:00.000Z" }, { "date": "2015-06-30T07:00:00.000Z", "value": 0, "fullDate": "2015-06-30T07:00:00.000Z" }, { "date": "2015-07-01T07:00:00.000Z", "value": 0, "fullDate": "2015-07-01T07:00:00.000Z" }, { "date": "2015-07-02T07:00:00.000Z", "value": 0, "fullDate": "2015-07-02T07:00:00.000Z" }, { "date": "2015-07-03T07:00:00.000Z", "value": 0, "fullDate": "2015-07-03T07:00:00.000Z" }, { "date": "2015-07-04T07:00:00.000Z", "value": 0, "fullDate": "2015-07-04T07:00:00.000Z" }, { "date": "2015-07-05T07:00:00.000Z", "value": 0, "fullDate": "2015-07-05T07:00:00.000Z" }, { "date": "2015-07-06T07:00:00.000Z", "value": 0, "fullDate": "2015-07-06T07:00:00.000Z" }, { "date": "2015-07-07T07:00:00.000Z", "value": 0, "fullDate": "2015-07-07T07:00:00.000Z" }, { "date": "2015-07-08T07:00:00.000Z", "value": 0, "fullDate": "2015-07-08T07:00:00.000Z" }, { "date": "2015-07-09T07:00:00.000Z", "value": 1, "fullDate": "2015-07-09T07:00:00.000Z" }, { "date": "2015-07-10T07:00:00.000Z", "value": 0, "fullDate": "2015-07-10T07:00:00.000Z" }, { "date": "2015-07-11T07:00:00.000Z", "value": 1, "fullDate": "2015-07-11T07:00:00.000Z" }, { "date": "2015-07-12T07:00:00.000Z", "value": 1, "fullDate": "2015-07-12T07:00:00.000Z" }, { "date": "2015-07-13T07:00:00.000Z", "value": 0, "fullDate": "2015-07-13T07:00:00.000Z" }, { "date": "2015-07-14T07:00:00.000Z", "value": 2, "fullDate": "2015-07-14T07:00:00.000Z" }, { "date": "2015-07-15T07:00:00.000Z", "value": 3, "fullDate": "2015-07-15T07:00:00.000Z" }, { "date": "2015-07-16T07:00:00.000Z", "value": 0, "fullDate": "2015-07-16T07:00:00.000Z" }, { "date": "2015-07-17T07:00:00.000Z", "value": 0, "fullDate": "2015-07-17T07:00:00.000Z" }, { "date": "2015-07-18T07:00:00.000Z", "value": 0, "fullDate": "2015-07-18T07:00:00.000Z" }, { "date": "2015-07-19T07:00:00.000Z", "value": 2, "fullDate": "2015-07-19T07:00:00.000Z" }, { "date": "2015-07-20T07:00:00.000Z", "value": 7, "fullDate": "2015-07-20T07:00:00.000Z" }, { "date": "2015-07-21T07:00:00.000Z", "value": 0, "fullDate": "2015-07-21T07:00:00.000Z" }, { "date": "2015-07-22T07:00:00.000Z", "value": 1, "fullDate": "2015-07-22T07:00:00.000Z" }, { "date": "2015-07-23T07:00:00.000Z", "value": 2, "fullDate": "2015-07-23T07:00:00.000Z" }, { "date": "2015-07-24T07:00:00.000Z", "value": 0, "fullDate": "2015-07-24T07:00:00.000Z" }, { "date": "2015-07-25T07:00:00.000Z", "value": 0, "fullDate": "2015-07-25T07:00:00.000Z" }, { "date": "2015-07-26T07:00:00.000Z", "value": 0, "fullDate": "2015-07-26T07:00:00.000Z" }, { "date": "2015-07-27T07:00:00.000Z", "value": 1, "fullDate": "2015-07-27T07:00:00.000Z" }, { "date": "2015-07-28T07:00:00.000Z", "value": 2, "fullDate": "2015-07-28T07:00:00.000Z" }, { "date": "2015-07-29T07:00:00.000Z", "value": 2, "fullDate": "2015-07-29T07:00:00.000Z" }, { "date": "2015-07-30T07:00:00.000Z", "value": 6, "fullDate": "2015-07-30T07:00:00.000Z" }, { "date": "2015-07-31T07:00:00.000Z", "value": 0, "fullDate": "2015-07-31T07:00:00.000Z" }, { "date": "2015-08-01T07:00:00.000Z", "value": 0, "fullDate": "2015-08-01T07:00:00.000Z" }, { "date": "2015-08-02T07:00:00.000Z", "value": 0, "fullDate": "2015-08-02T07:00:00.000Z" }], "topicName": "Oakland" }, { "topic": 0, "topicName": "Other", "dates": [{ "date": "2015-06-27T07:00:00.000Z", "value": 3, "fullDate": "2015-06-27T07:00:00.000Z" }, { "date": "2015-06-28T07:00:00.000Z", "value": 9, "fullDate": "2015-06-28T07:00:00.000Z" }, { "date": "2015-06-29T07:00:00.000Z", "value": 6, "fullDate": "2015-06-29T07:00:00.000Z" }, { "date": "2015-06-30T07:00:00.000Z", "value": 11, "fullDate": "2015-06-30T07:00:00.000Z" }, { "date": "2015-07-01T07:00:00.000Z", "value": 7, "fullDate": "2015-07-01T07:00:00.000Z" }, { "date": "2015-07-02T07:00:00.000Z", "value": 10, "fullDate": "2015-07-02T07:00:00.000Z" }, { "date": "2015-07-03T07:00:00.000Z", "value": 5, "fullDate": "2015-07-03T07:00:00.000Z" }, { "date": "2015-07-04T07:00:00.000Z", "value": 10, "fullDate": "2015-07-04T07:00:00.000Z" }, { "date": "2015-07-05T07:00:00.000Z", "value": 8, "fullDate": "2015-07-05T07:00:00.000Z" }, { "date": "2015-07-06T07:00:00.000Z", "value": 10, "fullDate": "2015-07-06T07:00:00.000Z" }, { "date": "2015-07-07T07:00:00.000Z", "value": 6, "fullDate": "2015-07-07T07:00:00.000Z" }, { "date": "2015-07-08T07:00:00.000Z", "value": 14, "fullDate": "2015-07-08T07:00:00.000Z" }, { "date": "2015-07-09T07:00:00.000Z", "value": 12, "fullDate": "2015-07-09T07:00:00.000Z" }, { "date": "2015-07-10T07:00:00.000Z", "value": 17, "fullDate": "2015-07-10T07:00:00.000Z" }, { "date": "2015-07-11T07:00:00.000Z", "value": 9, "fullDate": "2015-07-11T07:00:00.000Z" }, { "date": "2015-07-12T07:00:00.000Z", "value": 9, "fullDate": "2015-07-12T07:00:00.000Z" }, { "date": "2015-07-13T07:00:00.000Z", "value": 9, "fullDate": "2015-07-13T07:00:00.000Z" }, { "date": "2015-07-14T07:00:00.000Z", "value": 11, "fullDate": "2015-07-14T07:00:00.000Z" }, { "date": "2015-07-15T07:00:00.000Z", "value": 16, "fullDate": "2015-07-15T07:00:00.000Z" }, { "date": "2015-07-16T07:00:00.000Z", "value": 6, "fullDate": "2015-07-16T07:00:00.000Z" }, { "date": "2015-07-17T07:00:00.000Z", "value": 7, "fullDate": "2015-07-17T07:00:00.000Z" }, { "date": "2015-07-18T07:00:00.000Z", "value": 8, "fullDate": "2015-07-18T07:00:00.000Z" }, { "date": "2015-07-19T07:00:00.000Z", "value": 4, "fullDate": "2015-07-19T07:00:00.000Z" }, { "date": "2015-07-20T07:00:00.000Z", "value": 9, "fullDate": "2015-07-20T07:00:00.000Z" }, { "date": "2015-07-21T07:00:00.000Z", "value": 5, "fullDate": "2015-07-21T07:00:00.000Z" }, { "date": "2015-07-22T07:00:00.000Z", "value": 7, "fullDate": "2015-07-22T07:00:00.000Z" }, { "date": "2015-07-23T07:00:00.000Z", "value": 7, "fullDate": "2015-07-23T07:00:00.000Z" }, { "date": "2015-07-24T07:00:00.000Z", "value": 10, "fullDate": "2015-07-24T07:00:00.000Z" }, { "date": "2015-07-25T07:00:00.000Z", "value": 8, "fullDate": "2015-07-25T07:00:00.000Z" }, { "date": "2015-07-26T07:00:00.000Z", "value": 13, "fullDate": "2015-07-26T07:00:00.000Z" }, { "date": "2015-07-27T07:00:00.000Z", "value": 18, "fullDate": "2015-07-27T07:00:00.000Z" }, { "date": "2015-07-28T07:00:00.000Z", "value": 14, "fullDate": "2015-07-28T07:00:00.000Z" }, { "date": "2015-07-29T07:00:00.000Z", "value": 30, "fullDate": "2015-07-29T07:00:00.000Z" }, { "date": "2015-07-30T07:00:00.000Z", "value": 33, "fullDate": "2015-07-30T07:00:00.000Z" }, { "date": "2015-07-31T07:00:00.000Z", "value": 0, "fullDate": "2015-07-31T07:00:00.000Z" }, { "date": "2015-08-01T07:00:00.000Z", "value": 0, "fullDate": "2015-08-01T07:00:00.000Z" }, { "date": "2015-08-02T07:00:00.000Z", "value": 0, "fullDate": "2015-08-02T07:00:00.000Z" }] }], "dataByDate": [{ "date": "2015-06-27T07:00:00.000Z", "topics": [{ "name": 103, "value": 1, "topicName": "San Francisco" }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 149, "value": 0, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 0, "value": 3, "topicName": "Other" }], "value": 4 }, { "date": "2015-06-28T07:00:00.000Z", "topics": [{ "name": 103, "value": 1, "topicName": "San Francisco" }, { "name": 149, "value": 2, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 9, "topicName": "Other" }], "value": 12 }, { "date": "2015-06-29T07:00:00.000Z", "topics": [{ "name": 60, "value": 18, "topicName": "Los Angeles" }, { "name": 81, "value": 1, "topicName": "Oakland" }, { "name": 103, "value": 4, "topicName": "San Francisco" }, { "name": 149, "value": 4, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 0, "value": 6, "topicName": "Other" }], "value": 33 }, { "date": "2015-06-30T07:00:00.000Z", "topics": [{ "name": 60, "value": 1, "topicName": "Los Angeles" }, { "name": 103, "value": 2, "topicName": "San Francisco" }, { "name": 149, "value": 3, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 11, "topicName": "Other" }], "value": 17 }, { "date": "2015-07-01T07:00:00.000Z", "topics": [{ "name": 60, "value": 6, "topicName": "Los Angeles" }, { "name": 103, "value": 3, "topicName": "San Francisco" }, { "name": 149, "value": 1, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 7, "topicName": "Other" }], "value": 17 }, { "date": "2015-07-02T07:00:00.000Z", "topics": [{ "name": 103, "value": 3, "topicName": "San Francisco" }, { "name": 149, "value": 3, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 10, "topicName": "Other" }], "value": 16 }, { "date": "2015-07-03T07:00:00.000Z", "topics": [{ "name": 149, "value": 3, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 103, "value": 0, "topicName": "San Francisco" }, { "name": 0, "value": 5, "topicName": "Other" }], "value": 8 }, { "date": "2015-07-04T07:00:00.000Z", "topics": [{ "name": 103, "value": 3, "topicName": "San Francisco" }, { "name": 149, "value": 1, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 10, "topicName": "Other" }], "value": 14 }, { "date": "2015-07-05T07:00:00.000Z", "topics": [{ "name": 103, "value": 1, "topicName": "San Francisco" }, { "name": 149, "value": 2, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 8, "topicName": "Other" }], "value": 11 }, { "date": "2015-07-06T07:00:00.000Z", "topics": [{ "name": 103, "value": 2, "topicName": "San Francisco" }, { "name": 149, "value": 2, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 10, "topicName": "Other" }], "value": 14 }, { "date": "2015-07-07T07:00:00.000Z", "topics": [{ "name": 60, "value": 15, "topicName": "Los Angeles" }, { "name": 149, "value": 4, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 103, "value": 0, "topicName": "San Francisco" }, { "name": 0, "value": 6, "topicName": "Other" }], "value": 25 }, { "date": "2015-07-08T07:00:00.000Z", "topics": [{ "name": 60, "value": 32, "topicName": "Los Angeles" }, { "name": 103, "value": 2, "topicName": "San Francisco" }, { "name": 149, "value": 7, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 14, "topicName": "Other" }], "value": 55 }, { "date": "2015-07-09T07:00:00.000Z", "topics": [{ "name": 81, "value": 1, "topicName": "Oakland" }, { "name": 103, "value": 1, "topicName": "San Francisco" }, { "name": 149, "value": 1, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 0, "value": 12, "topicName": "Other" }], "value": 15 }, { "date": "2015-07-10T07:00:00.000Z", "topics": [{ "name": 103, "value": 4, "topicName": "San Francisco" }, { "name": 149, "value": 5, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 17, "topicName": "Other" }], "value": 26 }, { "date": "2015-07-11T07:00:00.000Z", "topics": [{ "name": 81, "value": 1, "topicName": "Oakland" }, { "name": 103, "value": 2, "topicName": "San Francisco" }, { "name": 149, "value": 9, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 0, "value": 9, "topicName": "Other" }], "value": 21 }, { "date": "2015-07-12T07:00:00.000Z", "topics": [{ "name": 81, "value": 1, "topicName": "Oakland" }, { "name": 103, "value": 1, "topicName": "San Francisco" }, { "name": 149, "value": 5, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 0, "value": 9, "topicName": "Other" }], "value": 16 }, { "date": "2015-07-13T07:00:00.000Z", "topics": [{ "name": 60, "value": 3, "topicName": "Los Angeles" }, { "name": 103, "value": 6, "topicName": "San Francisco" }, { "name": 149, "value": 2, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 9, "topicName": "Other" }], "value": 20 }, { "date": "2015-07-14T07:00:00.000Z", "topics": [{ "name": 81, "value": 2, "topicName": "Oakland" }, { "name": 103, "value": 5, "topicName": "San Francisco" }, { "name": 149, "value": 8, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 0, "value": 11, "topicName": "Other" }], "value": 26 }, { "date": "2015-07-15T07:00:00.000Z", "topics": [{ "name": 81, "value": 3, "topicName": "Oakland" }, { "name": 103, "value": 2, "topicName": "San Francisco" }, { "name": 149, "value": 3, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 0, "value": 16, "topicName": "Other" }], "value": 24 }, { "date": "2015-07-16T07:00:00.000Z", "topics": [{ "name": 60, "value": 15, "topicName": "Los Angeles" }, { "name": 103, "value": 7, "topicName": "San Francisco" }, { "name": 149, "value": 1, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 6, "topicName": "Other" }], "value": 29 }, { "date": "2015-07-17T07:00:00.000Z", "topics": [{ "name": 103, "value": 3, "topicName": "San Francisco" }, { "name": 149, "value": 2, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 7, "topicName": "Other" }], "value": 12 }, { "date": "2015-07-18T07:00:00.000Z", "topics": [{ "name": 103, "value": 1, "topicName": "San Francisco" }, { "name": 149, "value": 7, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 8, "topicName": "Other" }], "value": 16 }, { "date": "2015-07-19T07:00:00.000Z", "topics": [{ "name": 81, "value": 2, "topicName": "Oakland" }, { "name": 103, "value": 4, "topicName": "San Francisco" }, { "name": 149, "value": 1, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 0, "value": 4, "topicName": "Other" }], "value": 11 }, { "date": "2015-07-20T07:00:00.000Z", "topics": [{ "name": 81, "value": 7, "topicName": "Oakland" }, { "name": 103, "value": 8, "topicName": "San Francisco" }, { "name": 149, "value": 5, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 0, "value": 9, "topicName": "Other" }], "value": 29 }, { "date": "2015-07-21T07:00:00.000Z", "topics": [{ "name": 103, "value": 4, "topicName": "San Francisco" }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 149, "value": 0, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 0, "value": 5, "topicName": "Other" }], "value": 9 }, { "date": "2015-07-22T07:00:00.000Z", "topics": [{ "name": 60, "value": 5, "topicName": "Los Angeles" }, { "name": 81, "value": 1, "topicName": "Oakland" }, { "name": 103, "value": 11, "topicName": "San Francisco" }, { "name": 149, "value": 2, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 0, "value": 7, "topicName": "Other" }], "value": 26 }, { "date": "2015-07-23T07:00:00.000Z", "topics": [{ "name": 81, "value": 2, "topicName": "Oakland" }, { "name": 103, "value": 7, "topicName": "San Francisco" }, { "name": 149, "value": 5, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 0, "value": 7, "topicName": "Other" }], "value": 21 }, { "date": "2015-07-24T07:00:00.000Z", "topics": [{ "name": 60, "value": 1, "topicName": "Los Angeles" }, { "name": 103, "value": 5, "topicName": "San Francisco" }, { "name": 149, "value": 2, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 10, "topicName": "Other" }], "value": 18 }, { "date": "2015-07-25T07:00:00.000Z", "topics": [{ "name": 103, "value": 5, "topicName": "San Francisco" }, { "name": 149, "value": 2, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 8, "topicName": "Other" }], "value": 15 }, { "date": "2015-07-26T07:00:00.000Z", "topics": [{ "name": 60, "value": 1, "topicName": "Los Angeles" }, { "name": 103, "value": 6, "topicName": "San Francisco" }, { "name": 149, "value": 3, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 13, "topicName": "Other" }], "value": 23 }, { "date": "2015-07-27T07:00:00.000Z", "topics": [{ "name": 81, "value": 1, "topicName": "Oakland" }, { "name": 103, "value": 16, "topicName": "San Francisco" }, { "name": 149, "value": 8, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 0, "value": 18, "topicName": "Other" }], "value": 43 }, { "date": "2015-07-28T07:00:00.000Z", "topics": [{ "name": 81, "value": 2, "topicName": "Oakland" }, { "name": 103, "value": 17, "topicName": "San Francisco" }, { "name": 149, "value": 11, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 0, "value": 14, "topicName": "Other" }], "value": 44 }, { "date": "2015-07-29T07:00:00.000Z", "topics": [{ "name": 60, "value": 3, "topicName": "Los Angeles" }, { "name": 81, "value": 2, "topicName": "Oakland" }, { "name": 103, "value": 15, "topicName": "San Francisco" }, { "name": 149, "value": 17, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 0, "value": 30, "topicName": "Other" }], "value": 67 }, { "date": "2015-07-30T07:00:00.000Z", "topics": [{ "name": 60, "value": 2, "topicName": "Los Angeles" }, { "name": 81, "value": 6, "topicName": "Oakland" }, { "name": 103, "value": 12, "topicName": "San Francisco" }, { "name": 149, "value": 14, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 0, "value": 33, "topicName": "Other" }], "value": 67 }, { "date": "2015-07-31T07:00:00.000Z", "topics": [{ "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 103, "value": 0, "topicName": "San Francisco" }, { "name": 149, "value": 0, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 0, "value": 0, "topicName": "Other" }], "value": 0 }, { "date": "2015-08-01T07:00:00.000Z", "topics": [{ "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 103, "value": 0, "topicName": "San Francisco" }, { "name": 149, "value": 0, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 0, "value": 0, "topicName": "Other" }], "value": 0 }, { "date": "2015-08-02T07:00:00.000Z", "topics": [{ "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 103, "value": 0, "topicName": "San Francisco" }, { "name": 149, "value": 0, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 0, "value": 0, "topicName": "Other" }], "value": 0 }] };

  public multilineChartConfig = {
    properties: {
      height: 500,
      tooltipThreshold: 600,
      grid: 'full',
      lineCurve: 'basis',
      topicNameLabel: "topic",
      dateLabel: "fullDate",
      valueLabel: "value",
    },
    click: this.lineChartClick,
    showTooltip: true,
    tooltip: {
      valueLabel: 'value',
      title: 'Quantity Sold'
    }
  };
  public multilineBrushChartConfig = {
    properties: {
      height: 125,
      margin: { top: 0, bottom: 0, left: 70, right: 30 }
    },
    //click: this.onDemoChartClick
  };

  public configCustomEventsMultilineBrushChartConfig(ready) {
    if (ready) {
      let that = this;
      this.multilineBrushChart.brush.on('customBrushEnd', function (brushExtent) {
        that.filterMultilineChartData(brushExtent[0], brushExtent[1]);
      });
    }
  }

  private filterMultilineChartData(startDate, endDate) {
    /*if (startDate == null && endDate == null) {
      return this.multilineChartData;
    }
    let iDate = new Date(startDate);
    let eDate = new Date(endDate);

    let data = {};
    let that = this;
    data["dataByDate"] = [];
    data["dataByTopic"] = [];

    for (let d of this.multilineChartData["dataByDate"]) {
      let aDate = new Date(d["date"]);
      if (iDate <= aDate && aDate <= eDate) {
        data["dataByDate"].push(d);
      }
    }

    for (let t of this.multilineChartData["dataByTopic"]) {
      let newTopic = {};
      newTopic["topic"] = t["topic"];
      newTopic["topicName"] = t["topicName"];
      newTopic["dates"] = [];
      for (let d of t["dates"]) {
        let aDate = new Date(d["date"]);
        if (iDate <= aDate && aDate <= eDate) {
          newTopic["dates"].push({
            'date': aDate,
            'value': d["value"],
            'fullDate': d["date"]
          });
        }
      }
      data["dataByTopic"].push(newTopic);
    }

    this.multilineChart.data = data;
    this.multilineChart.redrawChart();*/
  }

  public configCustomEventsBrushChart(ready) {
    /*if (ready) {
      let that = this;
      this.brushChart.brush.on('customBrushStart', function (brushExtent) {
        console.log("Start", brushExtent);
      });
      this.brushChart.brush.on('customBrushEnd', function (brushExtent) {
        console.log("End", brushExtent);
      });
    }*/
  }

  public configCustomEventsDonutChart(ready) {
    /*if (ready) {
      let that = this;
      this.donutChart.donut.on('customMouseOver', function (data) {
        that.donutLegendChart.legend.highlight(data.data["id"]);
      });
      this.donutChart.donut.on('customMouseOut', function (data) {
        that.donutLegendChart.legend.clearHighlight();
      });
    }*/
  }

}
