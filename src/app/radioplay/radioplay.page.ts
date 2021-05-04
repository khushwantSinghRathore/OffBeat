import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../global/user.service';

@Component({
  selector: 'app-radioplay',
  templateUrl: './radioplay.page.html',
  styleUrls: ['./radioplay.page.scss'],
})
export class RadioplayPage implements OnInit {

  public obj = {name: "Radio City" , chlnum: 38.9,bg:"https://images.unsplash.com/photo-1618481212093-a0286ef0cc95?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=796&q=80"};
  
 
  constructor(private user: UserService, private router: Router, private userdata: UserService) {
  }
  radioChannel = this.userdata.radioChannel;
  ads  = this.userdata.ads;
  

  ngOnInit() {
    if(this.user.getObj() == undefined || this.user.getObj() == null){
      console.log(this.obj);
    }else{
      this.obj = this.user.getObj();
      console.log(this.obj);
    }
   
  }


  back(){
    this.router.navigateByUrl('tabs/radio-tabs');
  }

}
