import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
    providedIn: "root",
})
export class MenuService {
    isMobile$: boolean = true;
    isShowNav$: boolean = false;
    prevRoute: string = window.location.pathname;
    currRoute: string = window.location.pathname;

    constructor() {}

    checkIsShowNav = new Observable((o) => {
        o.next(this.isShowNav$);
    });

    checkIsMobile = new Observable((o) => {
        if (window.innerWidth < 768) {
            this.isMobile$ = true;
            this.isShowNav$ = false;
        } else {
            this.isMobile$ = false;
            this.isShowNav$ = true;
        }
        o.next(this.isMobile$);
    });

    toggleIsShowNav() {
        this.isShowNav$ = !this.isShowNav$;
    }
}
