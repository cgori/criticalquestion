import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../../../environments/environment";
import { Boardroom } from "./boardroom";
import { BoardroomSingle } from "./return";
import { Observable } from "rxjs";
import { Storage } from "@ionic/storage";
import { JwtHelperService } from "@auth0/angular-jwt";
import { NONE_TYPE } from "@angular/compiler/src/output/output_ast";
import { AuthService } from "../../../../services/auth.service";
import { fromPromise } from "rxjs/observable/fromPromise";
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
  url = "http://51.89.139.24";

  getBoardrooms(): Observable<Boardroom[]> {
    return this.http.get<Boardroom[]>(`${this.url}/api/boardroom`);
  }

  getBoardroomOnID(id: any): Observable<BoardroomSingle[]> {
    return this.http.get<BoardroomSingle[]>(`${this.url}/api/boardroom/${id}`);
  }
  getAllUsers(): Observable<Boardroom[]> {
    return this.http.get<Boardroom[]>(`${this.url}/api/user`);
  }
}
