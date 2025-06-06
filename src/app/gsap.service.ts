import { Injectable } from '@angular/core';
import { gsap } from 'gsap';

@Injectable({
  providedIn: 'root',
})
export class GsapService {
  animateFlowField(element: HTMLElement): void {
    gsap.to(element, {
      x: 'random(-100, 100)',
      y: 'random(-100, 100)',
      rotation: 'random(-45, 45)',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
    });
  }

  animateFlowField2(element: HTMLElement, xY: { x: number; y: number }): void {
    gsap.to(element, {
      x: `random(-100, ${xY.x})`,
      y: `random(-100, ${xY.y})`,
      rotation: 'random(-45, 45)',
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
    });
  }
}
