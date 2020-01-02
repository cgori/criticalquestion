import { AuthGuardService } from "./services/auth-guard.service";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "index", pathMatch: "full" },
  {
    path: "members",
    loadChildren: "./pages/members/tabs/tabs.module#TabsPageModule",
    canActivate: [AuthGuardService]
  },
  {
    path: "index",
    loadChildren: () =>
      import("./pages/index/index.module").then(m => m.IndexPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
