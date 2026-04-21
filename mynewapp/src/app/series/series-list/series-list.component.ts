import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  selectedSerie: Serie | null = null;
  averageSeasons: number = 0;

  constructor(
    private seriesService: SeriesService,
    private cdr: ChangeDetectorRef
  ) {}

  getSeries(): void {
    this.seriesService.getSeries().subscribe((data) => {
      this.series = data;
      this.selectedSerie = this.series[0]; 
      this.calculateAverage();
      this.cdr.detectChanges();
    });
  }

  selectSerie(serie: Serie): void {
    this.selectedSerie = serie;
  }

  calculateAverage(): void {
    let total = 0;
    this.series.forEach(s => total += s.seasons);
    this.averageSeasons = total / this.series.length;
  }

  ngOnInit(): void {
    this.getSeries();
  }
}