import {
  Directive,
  ElementRef,
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

  constructor(private el: ElementRef, private r: Renderer2) {
    this.r.setStyle(this.el.nativeElement, 'color', 'blue');
  }

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log('HostListener Click Event', event);
  }

  @HostListener('mouseenter') onEnter() {
    this.r.setStyle(this.el.nativeElement, 'color', this.color);
    this.r.setStyle(this.el.nativeElement, 'fontWeight', this.fontWeight);
    this.r.setStyle(
      this.el.nativeElement,
      'borderRadius',
      this.borderStyle.radius
    );
    this.r.setStyle(this.el.nativeElement, 'border', this.borderStyle.border);
  }

  @HostListener('mouseleave') onLeave() {
    this.r.setStyle(this.el.nativeElement, 'color', null);
    this.r.setStyle(this.el.nativeElement, 'fontWeight', null);
    this.r.setStyle(this.el.nativeElement, 'borderRadius', null);
    this.r.setStyle(this.el.nativeElement, 'border', null);
  }
}
