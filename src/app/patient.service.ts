import { Injectable } from '@angular/core';
import { Patient } from 'src/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patients: Patient[]
  [
    {
      idPatient: 'r1',
      age: '20',
      gender: 'Male',
      allergies:'None',
      status:'Critical'
    }
  ];

    constructor() {}

    getAllPatients(){
      return [...this.patients];
    }

    getPatient(idPatient : String){
      return {...this.patients.find(patient => {return patient.idPatient === idPatient})};
    }
}


