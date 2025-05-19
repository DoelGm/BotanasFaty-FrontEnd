import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Aos from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BotanasFaty-FrontEnd';
   ngOnInit(): void {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }
}
