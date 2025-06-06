import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { GsapService } from '../gsap.service';
import { generate } from "random-words";



@Component({
  selector: 'app-art2',
  imports: [],
  templateUrl: './art2.component.html',
  styleUrl: './art2.component.scss',
})
export class Art2Component implements AfterViewInit {
  @ViewChild('artContainer1') artContainer1!: ElementRef;
  @ViewChild('artContainer2') artContainer2!: ElementRef;
  @ViewChild('artContainer3') artContainer3!: ElementRef;
  @ViewChild('artContainer4') artContainer4!: ElementRef;

  @ViewChildren('box') boxes!: QueryList<ElementRef>;
  items = Array.from({ length: 100 }, (_, i) => `${generate()}`);

  constructor(private gsapService: GsapService) {}

  ngAfterViewInit(): void {
    this.gsapService.animateFlowField2(this.artContainer1.nativeElement, { x: 100, y: 100 });
    this.gsapService.animateFlowField2(this.artContainer2.nativeElement, { x: 200, y: 200 });
    this.gsapService.animateFlowField2(this.artContainer3.nativeElement, { x: 50, y: 50 });
    this.gsapService.animateFlowField2(this.artContainer4.nativeElement, { x: 300, y: 300 });

    this.boxes.forEach((box, index) => {
      //box.nativeElement.style.backgroundColor = index % 2 === 0 ? 'lightblue' : 'lightgreen';
      this.gsapService.animateFlowField2(box.nativeElement, { x: 100 + index, y: 100 + index });
    });
  }
}

