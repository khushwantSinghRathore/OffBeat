import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-songslist',
  templateUrl: './songslist.page.html',
  styleUrls: ['./songslist.page.scss'],
})
export class SongslistPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['/home']);
  }

}
