import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  @Input() color = '';
  @Input() fontWeight = '';
  @Input() borderStyle!: { radius?: string; border?: string };
  @HostBinding('style.color') elColor = '';

  constructor(private el: ElementRef, private r: Renderer2) {
    this.r.setStyle(this.el.nativeElement, 'color', 'blue');
  }

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log('HostListener Click Event', event);
  }

  @HostListener('mouseenter') onEnter() {
    this.elColor = this.color;
  }

  @HostListener('mouseleave') onLeave() {
    this.elColor = 'gray';
  }
}
