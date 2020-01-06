import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PollServiceService } from '../pollService/poll-service.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-poll-details',
  templateUrl: './poll-details.page.html',
  styleUrls: ['./poll-details.page.scss'],
})
export class PollDetailsPage implements OnInit {
  createPoll: FormGroup;
  public polls = [];
  public userID;
  public pollID;
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
      this.pollID = paramMap.get("pollID");
      this._pollService
        .getPollOnID(this.pollID)
        .subscribe(data => ((this.polls = data, console.log(data))));
    });
  }
  addVote(event: any){
    console.log(event);
    this._pollService
    .addVote(event, this.pollID);
  }
}

