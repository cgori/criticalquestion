import { Component, OnInit, Input } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule
} from "@angular/forms";
import { AuthService } from "../../../../../services/auth.service";
import { Router } from "@angular/router";


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
      title: ["", [Validators.required]],
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      username: [
        "",
        [Validators.required, Validators.pattern("^[a-z0-9]{8,32}$")]
      ],
      password: ["", [Validators.required, Validators.pattern("^.{8,64}$")]],
      role: ["", [Validators.required]],
      status: ["pending"]
    });
  }

  onSubmit() {
    this.authService.createPoll(this.createPoll.value).subscribe();
    console.log(this.createPoll.value);
  }
}
