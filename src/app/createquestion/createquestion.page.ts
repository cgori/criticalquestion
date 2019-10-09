import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-createquestion',
  templateUrl: './createquestion.page.html',
  styleUrls: ['./createquestion.page.scss'],
})
export class CreatequestionPage implements OnInit {

  constructor(private patientService : PatientService) { }

  ngOnInit() {
    this.patientService.getAllPatients
  }

}

