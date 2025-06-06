import { Component } from '@angular/core';
import { Art2Component } from './art2/art2.component';

@Component({
  selector: 'app-root',
  imports: [Art2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'gsap-angular-app';
}
