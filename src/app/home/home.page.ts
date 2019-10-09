import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit  {
  private selectedItem: any;
  private answers = [];


  public questions: Array<{ questionId: string; Question: string; status: string;
     patientId: String; answers: Array<String> }> = [];
  constructor() {
    }

    ngOnInit() {
    }
  }
