import { Component, OnInit } from "@angular/core";
import { PollServiceService } from "../pollService/poll-service.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-poll",
  templateUrl: "./poll.page.html",
  styleUrls: ["./poll.page.scss"]
})
export class PollPage implements OnInit {
  public polls = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private _pollService: PollServiceService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has("pollID")) {
        //redirect
        return;
      }
      const pollID = paramMap.get("pollID");
      this._pollService
        .getPollOnID(pollID)
        .subscribe(data => ((this.polls = data), console.log(data)));
    });
  }
}
