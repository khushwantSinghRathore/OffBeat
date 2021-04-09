import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-artist',
  templateUrl: './choose-artist.page.html',
  styleUrls: ['./choose-artist.page.scss'],
})
export class ChooseArtistPage implements OnInit {

  artist: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  GoToNext(){
    this.router.navigateByUrl('home-tabs');
  }

  GoBack(){
    this.router.navigateByUrl('chooselang');
  }

}
