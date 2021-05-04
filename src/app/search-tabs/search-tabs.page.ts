import { Component, OnInit } from '@angular/core';
import { UserService } from '../global/user.service';

@Component({
  selector: 'app-search-tabs',
  templateUrl: './search-tabs.page.html',
  styleUrls: ['./search-tabs.page.scss'],
})
export class SearchTabsPage implements OnInit {



 


  constructor(private userdata: UserService) { }
  art = this.userdata.art;
  recent = this.userdata.recent;
  songstype = this.userdata.songstype;

  ngOnInit() {
  }

}
