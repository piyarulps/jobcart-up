import { Component, ElementRef, Renderer2, HostListener } from '@angular/core';
import { environment   } from '../../../../environments/environment';

@Component({
  selector    : 'app-header',
  templateUrl : './header.component.html',
  styleUrls   : ['./header.component.css'],
})
export class HeaderComponent {

  appURL  = environment.app_url;
  isMobileView = false;
  private clickOutsideListener!: () => void;


  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}


  ngOnInit() {
    this.clickOutsideListener = this.renderer.listen('document', 'click', (event: MouseEvent) => {
      const clickedInside = this.elementRef.nativeElement.contains(event.target);
      if (!clickedInside) {
        this.onClickedOutside();
      }
    });
  }


  onClickedOutside() {
    this.isMobileView = false;
  }


  toggleMobileView() {
    this.isMobileView = !this.isMobileView;
  }


  ngOnDestroy() {
    if (this.clickOutsideListener) {
      this.clickOutsideListener();
    }
  }


}