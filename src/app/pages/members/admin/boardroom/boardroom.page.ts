import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-boardroom',
  templateUrl: './boardroom.page.html',
  styleUrls: ['./boardroom.page.scss'],
})
export class BoardroomPage implements OnInit {

  boardroomForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }
 
  ngOnInit() {
    this.boardroomForm = this.formBuilder.group({
    });
  }
 
  onSubmit() {
  }
}