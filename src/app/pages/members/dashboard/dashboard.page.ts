import { Component, OnInit } from "@angular/core";
import { BoardroomService } from "./boardroomService/boardroom.service";
import { Boardroom } from "./boardroomService/boardroom";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"]
})
export class DashboardPage implements OnInit {
  public boardrooms = [];

  constructor(private _boardroomService: BoardroomService) {}
  
  ngOnInit() {
    this._boardroomService
      .getBoardrooms()
      .subscribe(data => (this.boardrooms = data, console.log(data)));
  }

  displayBoards() {
    console.log(this.boardrooms["boardrooms"]["0"]);
  }

  displayBoardID(event) {
    console.log(event);
    this._boardroomService
      .getBoardroomOnID(event)
      .subscribe(data => (this.boardrooms = data));
  }
}
