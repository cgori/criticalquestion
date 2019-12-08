import { AuthService } from '../../../services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController, Platform, IonList } from '@ionic/angular';
import { StorageService, Boardroom } from 'src/app/service/storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  data = '';
  boardrooms: Boardroom[] = [];
  newBoardroom: Boardroom = <Boardroom>{};
  @ViewChild('mylist', {static: false}) mylist: IonList;

  constructor(private authService: AuthService, private storage: Storage, private toastController: ToastController,
    private storageService : StorageService, private plt: Platform) {
    this.plt.ready().then(() => {
    this.loadBoardrooms();
 });
  }

 addBoardroom() {
   this.newBoardroom.modified = Date.now();
   this.newBoardroom.id = Date.now();

   this.storageService.createBoardroom(this.newBoardroom).then(item => {
     this.newBoardroom = <Boardroom>{};
     this.showToast('Boardroom added!');
     this.loadBoardrooms();
   });
 }
 loadBoardrooms(){
   this.storageService.getBoardrooms().then(boardrooms => {
     this.boardrooms = boardrooms;
   });
 }
 updateBoardroom(boardroom: Boardroom){
   boardroom.title = 'UPDATED: ${boardroom.title}';
   boardroom.modified = Date.now();

   this.storageService.updateBoardroom(boardroom).then(boardroom =>{
     this.showToast('Boardroom updated!');
     this.mylist.closeSlidingItems();
     this.loadBoardrooms();
   });
 }
 deleteBoardroom(boardroom: Boardroom){
   this.storageService.deleteBoardroom(boardroom.id).then(boardroom => {
     this.showToast('Boardroom removed!');
     this.mylist.closeSlidingItems();
     this.loadBoardrooms();
   });
 }
 async showToast(msg){
   const toast = await this.toastController.create({
     message: msg,
     duration: 2000
   });
   toast.present();
 }

 ngOnInit() {
 }

 clearToken() {
   // ONLY FOR TESTING!
   this.storage.remove('access_token');

   let toast = this.toastController.create({
     message: 'JWT removed',
     duration: 3000
   });
   toast.then(toast => toast.present());
 }

}