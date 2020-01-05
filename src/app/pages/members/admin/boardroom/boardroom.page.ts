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
  boardroomForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.boardroomForm = this.formBuilder.group({
      notes: ["", [Validators.required]],
      userIDs: [[], [Validators.required]],
    });
  }

  onSubmit() {
    this.authService.createBoardroom(this.boardroomForm.value).subscribe();
    console.log(this.boardroomForm.value);
  }
}
