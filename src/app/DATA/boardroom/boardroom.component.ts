import { Component, OnInit } from "@angular/core";
import { BoardroomService } from "../boardroom.service";
import { Boardroom } from "../boardroom";
@Component({
  selector: "app-boardroom",
  templateUrl: "./boardroom.component.html",
  styleUrls: ["./boardroom.component.scss"]
})
export class BoardroomComponent implements OnInit {
  public boardrooms = [];

  constructor(private _boardroomService: BoardroomService) {}

  ngOnInit() {
    this._boardroomService
      .getBoardrooms()
      .subscribe(data => (this.boardrooms = data));
  }

  displayBoards() {
    for (let i = 0; i < this.boardrooms.length; i++) {}
    console.log(this.boardrooms["boardrooms"]["0"]);
  }
}
