import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import SplitText from 'gsap/SplitText';

@Component({
  selector: 'app-art3',
  imports: [],
  templateUrl: './art3.component.html',
  styleUrl: './art3.component.scss'
})
export class Art3Component implements AfterViewInit{
  @ViewChild('heading') heading!: ElementRef;
  ngAfterViewInit(): void {
    gsap.registerPlugin(SplitText);

    gsap.set('h1', { opacity: 1 });

    let split = SplitText.create(this.heading.nativeElement, { type: "chars" });
    //now animate each character into place from 20px below, fading in:
    gsap.from(split.chars, {
      y: 20,
      autoAlpha: 0,
      stagger: 0.05
    });

  }

}
