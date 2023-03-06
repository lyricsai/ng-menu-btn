import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NavRoutingModule } from "./nav-routing.module";
import { NavComponent } from "./nav.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [NavComponent],
    imports: [CommonModule, NavRoutingModule, RouterModule],
    exports: [NavComponent],
})
export class NavModule {}
