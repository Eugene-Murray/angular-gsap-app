import { Component } from '@angular/core';
import { Art2Component } from './art2/art2.component';
import { Art1Component } from "./art1/art1.component";
import { Art3Component } from "./art3/art3.component";

@Component({
  selector: 'app-root',
  imports: [Art2Component, Art1Component, Art3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'gsap-angular-app';
}
