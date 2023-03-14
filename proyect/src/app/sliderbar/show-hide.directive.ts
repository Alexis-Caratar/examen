import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSidebarCollapse]'
})
export class ShowHideDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click')
  onClick() {
    const sidebar = this.renderer.selectRootElement('#sidebar');
    const content = this.renderer.selectRootElement('#content');
    this.renderer.addClass(sidebar, 'active');
    this.renderer.addClass(content, 'active');
  }

}