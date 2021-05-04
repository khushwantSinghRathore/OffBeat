import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../global/user.service';
@Component({
  selector: 'app-radio-tabs',
  templateUrl: './radio-tabs.page.html',
  styleUrls: ['./radio-tabs.page.scss'],
})
export class RadioTabsPage implements OnInit {

  constructor(private router: Router , private userdata: UserService) { }
  radioChannel = this.userdata.radioChannel;
  art  = this.userdata.art;
  songstype  = this.userdata.songstype;
  ads = this.userdata.ads;
  ngOnInit() {
  }

  GoTo(ob: any){
    this.userdata.setObj(ob);
    this.router.navigateByUrl('radioplay');
  }

}
