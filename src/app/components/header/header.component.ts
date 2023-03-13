import { Component, ElementRef, OnInit } from "@angular/core";
import { MenuService } from "src/app/services/menu.service";
import { ActivatedRoute, Event, NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  host: {
    "(document:click)": "onClick($event)",
  },
})
export class HeaderComponent implements OnInit {
  isShowNav$!: boolean;
  isMobile$!: boolean;
  prevRoute: string = window.location.pathname;
  currRoute: string = window.location.pathname;

  constructor(
    private router: Router,
    private menuService: MenuService,
    private route: ActivatedRoute,
    private _eref: ElementRef
  ) {}

  ngOnInit(): void {
    this.checkIsMobile();
    this.checkIsShowNav();
    this.checkRouteChange();
  }

  checkIsShowNav() {
    this.menuService.checkIsShowNav.subscribe((data: any) => {
      this.isShowNav$ = data;
    });
  }

  toggleIsShowNav() {
    this.menuService.toggleIsShowNav();
    this.checkIsShowNav();
  }

  checkIsMobile() {
    this.menuService.checkIsMobile.subscribe((data: any) => {
      this.isMobile$ = data;
    });
  }

  checkRouteChange() {
    this.checkRoute();
    this.checkIsMobile();
  }

  onResize() {
    this.checkIsMobile();
    this.checkIsShowNav();
  }

  checkRoute() {
    this.router.events.subscribe((e: Event) => {
      if (e instanceof NavigationEnd) {
        if (this.isMobile$ && e.url !== this.currRoute) {
          this.prevRoute = this.currRoute;
          this.currRoute = e.url;
          this.toggleIsShowNav();
        }
      }
    });
  }

  onClick(event: any) {
    console.log(
      this._eref.nativeElement.children[0].children[2]?.children[0]
        ?.children[0],
      event.target
    );
    if (
      this.isMobile$ &&
      this.isShowNav$ &&
      (!this._eref.nativeElement.contains(event.target) ||
        this._eref.nativeElement.children[0].children[2]?.children[0]
          ?.children[0] === event.target)
    )
      // or some similar check
      this.toggleIsShowNav();
  }
}
