import { Component, OnInit, Input, ViewChild } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule
} from "@angular/forms";
import { AuthService } from "../../../../../services/auth.service";
import { Router } from "@angular/router";
import { stringify } from "querystring";
import { ActivatedRoute } from "@angular/router";
import { BoardroomService } from "../../boardroomService/boardroom.service";

@Component({
  selector: "app-create-poll",
  templateUrl: "./create-poll.component.html",
  styleUrls: ["./create-poll.component.scss"]
})
export class CreatePollComponent implements OnInit {
  @Input() showMePartially: boolean;
  createPoll: FormGroup;
  public boardrooms = [];
  public createdPollID;
  public boardroomId;
  public show: boolean = false;
  public show1: boolean = false;
  public userID;
  public user;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _boardroomService: BoardroomService
  ) {}

  ngOnInit() {
    this.createPoll = this.formBuilder.group({
      boardroomID: [""],
      patient: this.formBuilder.group({
        allergy: [""],
        drugs: [""],
        desc: [""],
        age: []
      }),
      options: this.formBuilder.group({
        title: [""],
        votes: []
      }),
      question: [""],
      description: [""],
      status: [""]
    });


    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has("boardroomId")) {
        //redirect
        return;
      }
      const boardroomId = paramMap.get("boardroomId");
      this._boardroomService
        .getBoardroomOnID(boardroomId)
        .subscribe(data => ((this.boardrooms = data)));
    });

    console.log("dwaadwdw");
    this._boardroomService
        .getAllUsers()
        .subscribe(data => ((this.user  = data, console.log(data))));
  }

  onSubmit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.boardroomId = paramMap.get("boardroomId");
      this.createPoll.value["boardroomID"] = this.boardroomId;
      this.authService
        .createPoll(this.createPoll.value)
        .subscribe((data => ((this.createdPollID = data, this.doSomething()))));
    });
  }
  public doSomething() {
    this.authService.sendtoBoardroom(this.createdPollID["Poll"]["_id"], this.boardroomId);
  }
  createPollShow() {
    this.show = !this.show;
  }
  addUser() {
    this.show1 = !this.show1;
  }
  addUserToBoard(){
    this.authService.addUserToBoard(this.userID , this.boardroomId);
  }

}
