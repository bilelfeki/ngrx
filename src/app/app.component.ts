import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgrxModule } from './ngrx/ngrx.module';
import { CounterFacade } from './ngrx/counter/counter.facade';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgrxModule],
  providers:[CounterFacade],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'learn-ngrx';
}
