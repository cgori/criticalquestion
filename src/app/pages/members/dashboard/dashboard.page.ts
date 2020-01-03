import { AuthService } from "../../../services/auth.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Storage } from "@ionic/storage";
import { ToastController, Platform, IonList } from "@ionic/angular";
// import { StorageService, Boardroom } from "src/app/service/storage.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { tap, catchError, map } from "rxjs/operators";
import { Observable } from "rxjs";
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"]
})
export class DashboardPage implements OnInit {
  url = environment.url;
  data = "";
  boardrooms;
  ngOnInit() {}
  constructor(
    private helper: JwtHelperService,
    private http: HttpClient,
    private authService: AuthService,
    private toastController: ToastController,
    private plt: Platform
  ) {
    this.plt.ready().then(() => {
      this.loadBoardrooms();
    });
  }
  loadBoardrooms() {}
}
