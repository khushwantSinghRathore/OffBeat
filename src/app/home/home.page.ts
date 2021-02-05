import { Component  } from '@angular/core';
import { Router } from '@angular/router';
import { SongslistPage } from '../songslist/songslist.page';

@Component({
  selector: 'app-home', 
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  songlist(){
    this.router.navigate(['/songslist']);
  }

}
