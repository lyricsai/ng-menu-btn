import { Component, Input, OnInit } from "@angular/core";
import { MenuService } from "src/app/services/menu.service";
import { Observable } from "rxjs";

@Component({
    selector: "app-nav",
    templateUrl: "./nav.component.html",
    styleUrls: ["./nav.component.scss"],
})
export class NavComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
