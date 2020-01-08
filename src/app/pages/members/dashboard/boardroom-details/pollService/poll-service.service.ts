import { Injectable } from "@angular/core";
import { Platform, AlertController } from "@ionic/angular";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../../../../environments/environment";
import { Poll } from "./poll";
import { Observable } from "rxjs";
import { Storage } from "@ionic/storage";
import { JwtHelperService } from "@auth0/angular-jwt";
import { NONE_TYPE } from "@angular/compiler/src/output/output_ast";
import { AuthService } from "../../../../../services/auth.service";
import { fromPromise } from "rxjs/observable/fromPromise";

@Injectable({
  providedIn: "root"
})
export class PollServiceService {
  constructor(
    private http: HttpClient,
    private storage: Storage,
    private helper: JwtHelperService,
    private auth: AuthService,
    private alertController: AlertController
  ) {}
  public user;
  public counter;
  url = "http://51.89.139.24";
  getPollOnID(id: any): Observable<any> {
    return this.http.get<any>(`${this.url}/api/poll/${id}`);
  }
  addVote(pollID, optionID, counter): Boolean {
    this.user = this.auth.getUser();
    console.log(pollID, "pollID");
    console.log(optionID, "optionID");
    console.log(this.user);
    this.counter = counter;

    this.http
      .patch(
        `${this.url}/api/poll/add/${this.user.user.username}/${pollID}/${optionID}`,
        {}
      )
      .subscribe(
        res => {
          this.showAlertSuccess(res, "Vote submitted.");
          return true;
        },
        error => {
          this.showAlertError(error, "You have already voted.");
          return false;
        }
      );
    console.log("request sent. Waiting for response...");
    return false;
  }
  async showAlertSuccess(msg, reason) {
    let alert = await this.alertController.create({
      message: reason,
      header: "Success!",
      buttons: [
        {
          text: "OK"
        }
      ]
    });
    await alert.present();
    console.log(msg);
  }

  async showAlertError(msg, reason) {
    let alert = await this.alertController.create({
      message: reason,
      header: "Error",
      buttons: [
        {
          text: "OK"
        }
      ]
    });
    await alert.present();
    console.log(msg);
  }
}
