import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";

const routes: Routes = [
    { path: "", component: HomePageComponent, title: "home" },
    {
        path: "about",
        title: "about",
        loadChildren: () =>
            import("./pages/about-page/about-page.module").then(
                (mod) => mod.AboutPageModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
