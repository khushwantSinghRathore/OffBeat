import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../global/user.service';
@Component({
  selector: 'app-radio-tabs',
  templateUrl: './radio-tabs.page.html',
  styleUrls: ['./radio-tabs.page.scss'],
})
export class RadioTabsPage implements OnInit {

  radioChannel = [
    {name: "Radio One" , chlnum: 73.5, bg:"https://images.unsplash.com/photo-1584679109597-c656b19974c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"},
    {name: "Party House" ,  chlnum: 93.5,  bg:"https://images.unsplash.com/photo-1599689019338-50deb475f380?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"},    
    {name: "On The Rock" , chlnum: 33.9, bg:"https://images.unsplash.com/photo-1619622651801-ce384778aacf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=828&q=80"},    
    {name: "My Style" , chlnum: 90.9, bg:"https://images.unsplash.com/photo-1619455024121-35a39bdb1a33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=773&q=80"},    
    {name: "Radio City" , chlnum: 38.9,bg:"https://images.unsplash.com/photo-1618481212093-a0286ef0cc95?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=796&q=80"},
    {name: "Your Bestfriend" , chlnum: 53.5, bg:"https://images.unsplash.com/photo-1613205907727-f125518565fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"},
    {name: "Big News" , chlnum: 90.5, bg:"https://images.unsplash.com/photo-1556296569-44d434fb28d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"},
    {name: "Tell Me How?" , chlnum: 108.5, bg:"https://images.unsplash.com/photo-1619622637662-0104aa03a4af?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBhbGJ1bXN8ZW58MHwyfDJ8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
  ];


  songstype = [
    { name: "Classic" , bg:"https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8MjM1NDc0NTN8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"  },
    { name: "Pop" , bg:"https://images.unsplash.com/photo-1504635897574-8e2d499d981f?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8MjM1NDc0NTN8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"  },
    { name: "Rock" , bg:"https://images.unsplash.com/photo-1470019693664-1d202d2c0907?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8MjM1NDc0NTN8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"  },
    { name: "Fork" , bg:"https://images.unsplash.com/photo-1548895342-cbe56c360e2a?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXw1NzQ4MzA2fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"  },
    { name: "Western" , bg:"https://images.unsplash.com/photo-1560010954-0ea652c47dff?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8NTc0ODMwNnx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"  },
    { name: "Party" , bg:"https://images.unsplash.com/photo-1519682886610-a78e3d518e1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w1NzQ4MzA2fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"  },
  ];

  art = [
    {1: "ionci" , bg: "https://images.unsplash.com/photo-1505430111830-b998ef798efa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    {1: "ionci" , bg: "https://images.unsplash.com/photo-1520872024865-3ff2805d8bb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=821&q=80" },
    {1: "ionci" , bg: "https://images.unsplash.com/flagged/photo-1576364266566-2604b9cfe0ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80" },
    {1: "ionci" , bg: "https://images.unsplash.com/photo-1616534697074-a39246667cb7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    {1: "ionci" , bg: "https://images.unsplash.com/flagged/photo-1574869189423-bc7316873c70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"},
    {1: "ionci" , bg: "https://images.unsplash.com/photo-1495582575459-2eac77721458?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=842&q=80"},
    {1: "ionci" , bg: "https://images.unsplash.com/photo-1534050055340-71c7fa612a99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"}
  ];
 
  ads = [
    {src: "https://images.unsplash.com/photo-1616663395403-2e0052b8e595?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG11c2ljJTIwYWxidW0lMjBjb3ZlcnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {src: "https://images.unsplash.com/photo-1541667558913-5510fb3c7bd9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80ometric-with-people-coming-open-air-listening-music_1284-31521.jpg"},   
    {src: "https://images.unsplash.com/photo-1616663395731-d70897355fd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"},    
    {src: "https://images.unsplash.com/photo-1536849249744-44e01e7a089d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80"},
  ];
  constructor(private router: Router , private user: UserService) { }

  ngOnInit() {
  }

  GoTo(ob: any){
    this.user.setObj(ob);
    this.router.navigateByUrl('radioplay');
  }

}
