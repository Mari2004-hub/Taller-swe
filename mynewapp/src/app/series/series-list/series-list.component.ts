import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  series: Array<Serie> = [];

  constructor() {}

  ngOnInit(): void {}

}