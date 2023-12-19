import { BarchartService } from './barchart.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';
import * as Highcharts from 'highcharts';
window['Highcharts'] = Highcharts;

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent {

  timeSpentData: any = {};
  chartOptions: Highcharts.Options = {};
  highcharts: typeof Highcharts = Highcharts; // Add this line

  constructor(private barservice: BarchartService) {}

  ngOnInit(): void {
    this.getApiData();
  }

  getApiData() {
    this.barservice.getbardetail().subscribe({
      next: (response: any) => {
        console.log('API Response:', response);
        const dashboardData = response?.dashboardData || {};
        this.timeSpentData = dashboardData?.timeSpentData || {};
        this.createBarChart();
      },
      error: (error) => {
        console.error('Error fetching API data:', error);
      },

    });
  }


  createBarChart() {

    console.log('Chart Options:', this.chartOptions);

    if (this.timeSpentData && this.timeSpentData.days) {
      const daysOfWeek = Object.keys(this.timeSpentData.days);
      const categories = Object.keys(this.timeSpentData.days[daysOfWeek[0]]);
      const datasets = [];
      console.log('-----------',this.timeSpentData,daysOfWeek,categories);

      for (const category of categories) {
        const data = daysOfWeek.map(day => this.timeSpentData.days[day][category]);
        datasets.push({
          label: category,
          data: data,
          backgroundColor: this.getRandomColor(),
          borderColor: this.getRandomColor(),
          borderWidth: 1,
        });
      }

      this.chartOptions = {
        chart: {
          type: 'column',
          inverted: true

        },
        xAxis: {
          categories:daysOfWeek,
        },
        yAxis: {
          title: {
            text: 'Your Y-axis title',
          },
        },
        series: datasets,
      };
    } else {
      console.error('timeSpentData or timeSpentData.days is undefined.');
    }
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
