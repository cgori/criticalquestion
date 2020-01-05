import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BoardroomService } from "../boardroomService/boardroom.service";

@Component({
  selector: "app-boardroom-details",
  templateUrl: "./boardroom-details.page.html",
  styleUrls: ["./boardroom-details.page.scss"]
})
export class BoardroomDetailsPage implements OnInit {
  user = null;
  public boardrooms = [];
  loadedBoardroom: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _boardroomService: BoardroomService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has("boardroomId")) {
        //redirect
        return;
      }
      const boardroomId = paramMap.get("boardroomId");
      this._boardroomService
        .getBoardroomOnID(boardroomId)
        .subscribe(data => ((this.boardrooms = data, console.log(data))));
    });
  }
}
