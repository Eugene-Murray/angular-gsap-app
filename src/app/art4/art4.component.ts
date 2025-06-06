import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { generate } from 'random-words';
import { GsapService } from '../gsap.service';

@Component({
  selector: 'app-art4',
  imports: [],
  templateUrl: './art4.component.html',
  styleUrl: './art4.component.scss'
})
export class Art4Component implements AfterViewInit {
  @ViewChildren('box') boxes!: QueryList<ElementRef>;
  items = Array.from({ length: 200 }, (_, i) => `${generate()}`);

  constructor(private gsapService: GsapService) {}

    ngAfterViewInit(): void {
      this.boxes.forEach((box, index) => {
      
      this.gsapService.animateFlowField2(box.nativeElement, { x: 100 + index, y: 100 + index });
    });
    }
}
