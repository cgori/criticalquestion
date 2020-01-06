import { Component, OnInit, Input } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule
} from "@angular/forms";
import { AuthService } from "../../../../../services/auth.service";
import { Router } from "@angular/router";
import { stringify } from 'querystring';


@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.scss'],
})
export class CreatePollComponent implements OnInit {
  @Input() showMePartially: boolean;
  createPoll: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.createPoll = this.formBuilder.group({
      boardroomID: [""],
      patient: [{
        allergy: [""],
        drugs: [""],
        desc: [""],
        age: []
      },[Validators.required]],
      question: [""],
      description: [""],
      options: [{
        title: [""],
        votes: []
      }],
      status: [""]
    });
  }

  onSubmit() {
    this.authService.createPoll(this.createPoll.value).subscribe();
    console.log(this.createPoll.value);
  }
}
