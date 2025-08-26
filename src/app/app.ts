import { Component, signal } from '@angular/core';
import {Navbar} from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [Navbar],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})
export class App {
  protected readonly title = signal('SELabVcu.github.io');
}
