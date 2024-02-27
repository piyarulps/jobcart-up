import { Component, ElementRef, Renderer2, HostListener } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  appURL = environment.app_url;
  isMobileView = false;
  winWidth = 0;
  private clickOutsideListener!: () => void;
  navbarfixed: boolean = false;


  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }


  ngOnInit() {

    this.winWidth = window.innerWidth;
    if (this.winWidth <= 900) {
      this.isMobileView = true;
    }
    this.clickOutsideListener = this.renderer.listen('document', 'click', (event: MouseEvent) => {
      const clickedInside = this.elementRef.nativeElement.contains(event.target);
      if (!clickedInside) {
        this.onClickedOutside();
      }
    });
  }


  @HostListener('window:resize', ['$event'])
  onResize() {
    this.winWidth = window.innerWidth;
    if (this.winWidth <= 900) {
      this.isMobileView = true;
    }
  }
  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 10) {
      this.navbarfixed = true;
    }
    else {
      this.navbarfixed = false;
    }
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

/*
<div class="navbar bg-base-100 md:px-20">
  <div class="flex-1">
    <a href="/" class="normal-case text-xl"> <img src="/assets/logo.png" alt="" class="h-10" /></a>
  </div>
  <div class="flex-none" [ngClass]="isMobileView ? 'navbar-active' : ''">
    <div class="dropdown dropdown-end">
      <button aria-label="humburger" id="hamburger" class="relative p-6 md:hidden" (click)="toggleMobileView()">
        <div aria-hidden="true" class="m-auto h-0.5 w-7 rounded bg-red-900 transition duration-300"></div>
        <div aria-hidden="true" class="m-auto mt-2 h-0.5 w-7 rounded bg-red-900 transition duration-300"></div>
      </button>
      <ul
        tabindex="0"
        [ngClass]="isMobileView ? 'block' : 'hidden'"
        class="menu menu-sm dropdown-content mt-3 z-[1] px-2 py-5 shadow  rounded-box w-52 bg-[#10a54e] text-white">
        <li> <a class="py-2" [routerLink]="'pricing'"> Pricing </a></li>
        <li><a class="py-2" href="{{appURL}}auth/sign-in/"> Login </a></li>
        <li class="py-2"><a href="{{appURL}}auth/sign-up/employer">Create Employer Account</a></li>
      </ul>
    </div>
    <div class="hidden gap-5 md:flex">
      <a
      class="btn bg-gray-100 border-none text-gray-600 hover: hover:text-white capitalize px-10"
      [routerLink]="'pricing'">Pricing</a>
      <a
      class="btn bg-gray-100 border-none text-gray-600 hover:bg-primary hover:text-white capitalize"
      href="{{appURL}}/auth/sign-up/employer">Create Employer Account</a>
      <a
      class="btn bg-gray-100 border-none text-gray-600 hover:bg-primary hover:text-white capitalize px-10"
      href="{{appURL}}/auth/sign-in/">Login</a>
    </div>
  </div>
  
</div>
*/