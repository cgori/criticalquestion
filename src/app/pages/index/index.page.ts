import { Component, OnInit, Input } from "@angular/core";
@Component({
  selector: "app-index",
  templateUrl: "./index.page.html",
  styleUrls: ["./index.page.scss"]
})
export class IndexPage implements OnInit {
  login: boolean = true;
  register: boolean = false;
  constructor() {}

  ngOnInit() {}

  formHandler(form) {
    if (form === "login") {
      this.login = true;
      this.register = false;
    } else {
      this.register = true;
      this.login = false;
    }
  }

  loginShow() {
    this.formHandler("login");
  }
  registerShow() {
    this.formHandler("register");
  }
}
