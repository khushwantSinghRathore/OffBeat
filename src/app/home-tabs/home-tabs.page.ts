import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { UserService } from '../global/user.service';

@Component({
  selector: 'app-home-tabs',
  templateUrl: './home-tabs.page.html',
  styleUrls: ['./home-tabs.page.scss'],
})
export class HomeTabsPage implements OnInit {

  constructor(private http: HTTP, private  userdata: UserService) { }

  art = this.userdata.art;
  recent =  this.userdata.recent;
  songstype = this.userdata.songstype;
  ads = this.userdata.ads;
  
  ngOnInit() {
  }

}
