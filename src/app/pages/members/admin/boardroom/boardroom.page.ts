import { Component, OnInit, Input} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule
} from "@angular/forms";
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boardroom',
  templateUrl: './boardroom.page.html',
  styleUrls: ['./boardroom.page.scss'],
})
export class BoardroomPage implements OnInit {
  @Input() showMePartially: boolean;
  credentialsForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
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
    this.authService.register(this.credentialsForm.value).subscribe();
    console.log(this.credentialsForm.value);
  }

}
