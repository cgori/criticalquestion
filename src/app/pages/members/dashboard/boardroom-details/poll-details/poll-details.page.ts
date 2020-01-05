import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PollServiceService } from '../pollService/poll-service.service';

@Component({
  selector: 'app-poll-details',
  templateUrl: './poll-details.page.html',
  styleUrls: ['./poll-details.page.scss'],
})
export class PollDetailsPage implements OnInit {
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
        .subscribe(data => ((this.polls = data, console.log(data))));
    });
  }
}

