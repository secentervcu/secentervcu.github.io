import { Component, signal } from '@angular/core';
import {Navbar} from './navbar/navbar';
import {LogoDisplay} from './logo-display/logo-display';

@Component({
  selector: 'app-root',
  imports: [Navbar, LogoDisplay],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})
export class App {
  protected readonly title = signal('SELabVcu.github.io');
}
