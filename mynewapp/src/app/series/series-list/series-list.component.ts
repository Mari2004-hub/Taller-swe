import { Component, OnInit } from '@angular/core';
import { Serie } from '../series';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {
  series: Serie[] = [];
  averageSeasons: number = 0;

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe((data) => {
      this.series = data;
      this.averageSeasons = Math.round(
        this.series.reduce((sum, s) => sum + s.seasons, 0) / this.series.length
      );
    });
  }
}

