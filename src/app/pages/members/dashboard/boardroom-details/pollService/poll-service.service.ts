import { Injectable } from "@angular/core";
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
    private auth: AuthService
  ) {}
  url = environment.url;
  getPollOnID(id: any): Observable<any> {
    return this.http.get<any>(`${this.url}/api/poll/${id}`);
  }
}
