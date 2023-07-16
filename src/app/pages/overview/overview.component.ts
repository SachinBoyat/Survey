import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent {
  selectedTitle!: string;

  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ hero }) => {});
  }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  public barChartType: ChartType = 'bar';
  // public chartColors: any[] = [{ backgroundColor: '#000000' }, { backgroundColor: '#6FC8Ce' }];

  public barChartData: ChartData<'bar'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40, 80, 81, 56, 55, 40],
        label: 'Series A',
        stack: 'a',
        backgroundColor: '#48D1CC',
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90, 80, 81, 56, 55, 40],
        label: 'Series B',
        stack: 'a',
        backgroundColor: '#429E9D',
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90, 80, 81, 56, 55, 40],
        label: 'Series C',
        stack: 'a',
        backgroundColor: '#008080',
      },
    ],
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent; active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent; active?: {}[] }): void {
    console.log(event, active);
  }

  // Doughnut
  public doughnutChartLabels: string[] = ['Positive', 'Normal', 'Negative'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{ data: [350, 450, 100], backgroundColor: ['#000', 'gray', '#e5e5e5'] }],
  };
  public doughnutChartType: ChartType = 'doughnut';
}
