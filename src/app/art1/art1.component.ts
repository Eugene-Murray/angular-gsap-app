import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-art1',
  imports: [],
  templateUrl: './art1.component.html',
  styleUrl: './art1.component.scss',
})
export class Art1Component implements AfterViewInit {
  @ViewChild('button') button!: ElementRef;

  ngAfterViewInit(): void {
    gsap
      .to(this.button.nativeElement, {
        duration: 0.3,
        backgroundColor: '#f00',
        ease: 'power1.out',
        paused: true,
      })
      // .eventCallback('onStart', () => {
      //   gsap.to(this.button.nativeElement, { backgroundColor: '#00f' });
      // })
      // .eventCallback('onComplete', () => {
      //   gsap.to(this.button.nativeElement, { backgroundColor: '#008CBA' });
      // });

    this.button.nativeElement.addEventListener('mouseenter', () => {
      // console.log('Mouse entered button');

      // gsap.globalTimeline.play();

gsap.to(this.button.nativeElement, {
      x: `random(-100, 100)`,
      //y: `random(-100, 100)`,
      //rotation: 'random(-45, 45)',
      duration: 1,
      //repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
    });

    });
    this.button.nativeElement.addEventListener('mouseleave', () => {
      // console.log('Mouse left button');
      // gsap.globalTimeline.reverse()
    });
  }
}
