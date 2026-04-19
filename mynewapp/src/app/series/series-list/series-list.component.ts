import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series-list',
  standalone: false,
  templateUrl: './series-list.component.html',
  styleUrl: './series-list.component.css',
})
export class SeriesListComponent implements OnInit {

  series: Array<Serie> = [];
  averageSeasons: number = 0;

  constructor(private seriesService: SeriesService) {}

  getSeries(): void {
  this.seriesService.getSeries().subscribe((series) => {
    console.log("DATA:", series); 
    this.series = series;
    this.calculateAverage();
  });
}

  calculateAverage(): void {
    let total = 0;
    this.series.forEach(serie => {
      total += serie.seasons;
    });
    this.averageSeasons = total / this.series.length;
  }

  ngOnInit(): void {
    this.getSeries();
  }
}