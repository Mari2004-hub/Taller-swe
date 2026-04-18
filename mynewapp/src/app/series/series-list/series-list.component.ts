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

  constructor(private seriesService: SeriesService) {}

  getSeries(): void {
    this.seriesService.getSeries().subscribe((series) => {
      this.series = series;
    });
  }

  ngOnInit(): void {
    this.getSeries();
  }
}