import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeaderRoutingModule } from "./header-routing.module";
import { HeaderComponent } from "./header.component";
import { NavModule } from "../nav/nav.module";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [HeaderComponent],
    imports: [CommonModule, HeaderRoutingModule, NavModule],
    exports: [HeaderComponent],
})
export class HeaderModule {}
