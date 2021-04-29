import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../global/user.service';

@Component({
  selector: 'app-radioplay',
  templateUrl: './radioplay.page.html',
  styleUrls: ['./radioplay.page.scss'],
})
export class RadioplayPage implements OnInit {

  constructor(private user: UserService, private router: Router) { }
  public obj ;
  imageurl;
  

  ngOnInit() {
    this.obj = this.user.getObj();
    // this.imageurl = this.obj.bg;
    if(this.obj == undefined || this.obj == null){
      this.imageurl = "https://image.freepik.com/free-vector/musicians-professional-orchestra-musician-band-isolated-people-with-music-instruments-vector-male-female-musical-characters-illustration-orchestra-instrument-jazz-male-female-musician_53562-12392.jpg" ;
    }
    else{
      this.imageurl = this.obj.bg;
    }
  }


  back(){
    this.router.navigateByUrl('tabs/radio-tabs');
  }

}
