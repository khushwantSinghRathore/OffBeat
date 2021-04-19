import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx'; 
import { BehaviorSubject , Observable, from} from 'rxjs';
import { TabsPage } from '../tabs/tabs.page';
@Component({
  selector: 'app-choose-artist',
  templateUrl: './choose-artist.page.html',
  styleUrls: ['./choose-artist.page.scss'],
})
export class ChooseArtistPage implements OnInit {

  public artist: BehaviorSubject <any>;
  constructor(private router: Router, private http:HTTP) { }

  public dataToShow;
  url = 'https://randomuser.me/api/?result=100'
  parameter = {};
  header = {};
  ngOnInit() {
    // this.dataToShow = this.showoff();
    // setTimeout(() => {
    //   console.table(this.dataToShow);
    // }, 250);
  }

  showoff(): Observable<any>{
    return from(this.http.get(this.url ,this.parameter, this.header).then(res => {
      console.log(res); 
      console.table(res.data);     
  }).catch(err => {
      console.error(err);
  }));
  }


  GoToNext(){
    this.router.navigateByUrl('tabs');
  }

  GoBack(){
    this.router.navigateByUrl('chooselang');
  }

}
