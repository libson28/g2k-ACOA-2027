import { Component, signal } from '@angular/core';
import { Accueil } from './accueil/accueil';

@Component({
  selector: 'app-root',
  imports: [Accueil],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ACCOA-2027');
}
