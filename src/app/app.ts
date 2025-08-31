import {AfterViewInit, Component, OnInit, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})
export class App implements OnInit, AfterViewInit {

  protected readonly title = signal('SELabVcu.github.io');

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
      // startEvent: 'scroll'
    });
  }
  ngAfterViewInit(): void {
    AOS.refresh()
  }

}
