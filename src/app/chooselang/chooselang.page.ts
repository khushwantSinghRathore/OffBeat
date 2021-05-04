import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chooselang',
  templateUrl: './chooselang.page.html',
  styleUrls: ['./chooselang.page.scss'],
})
export class ChooselangPage implements OnInit {

  lang = [
    {name: "English"},
    {name: "Korean"},
    {name: "Arabic"},
    {name: "Russian"},
    {name: "German"},
    {name: "Italian"},
    {name: "Tamil"},
    {name: "Hindi"},
  ];
  constructor(private router: Router) { }

 
  ngOnInit() {
  }

  GoBack(){
    this.router.navigateByUrl('tabs/home-tabs');
  }

  GoToNext(){
    this.router.navigateByUrl('choose-artist');
  }

}
