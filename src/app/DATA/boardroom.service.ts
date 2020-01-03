import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Boardroom } from "./boardroom";
import { Observable } from "rxjs";
import { Storage } from "@ionic/storage";
import { JwtHelperService } from "@auth0/angular-jwt";
import { NONE_TYPE } from "@angular/compiler/src/output/output_ast";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root"
})
export class BoardroomService {
  constructor(
    private http: HttpClient,
    private storage: Storage,
    private helper: JwtHelperService,
    private auth: AuthService
  ) {}
  url = environment.url;

  getBoardrooms(): Observable<Boardroom[]> {
    return this.http.get<Boardroom[]>(`${this.url}/api/boardroom`);
  }
}
