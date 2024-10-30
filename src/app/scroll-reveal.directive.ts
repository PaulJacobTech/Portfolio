import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[scrollReveal]'
})
export class ScrollRevealDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || window.pageYOffset;
    const elementPosition = this.el.nativeElement.offsetTop;
    const windowHeight = window.innerHeight;
  
    console.log('Scroll Position:', scrollPosition);
    console.log('Element Position:', elementPosition);
  
    if (scrollPosition > elementPosition - windowHeight / 1.2) {
      this.renderer.addClass(this.el.nativeElement, 'revealed');
    }
  }
  
}
