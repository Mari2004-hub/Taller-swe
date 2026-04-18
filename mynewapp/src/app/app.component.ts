import { Component } from '@angular/core';
import { SeriesModule } from "./series/series.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [SeriesModule]
})
export class AppComponent {}