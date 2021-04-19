import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-home-tabs',
  templateUrl: './home-tabs.page.html',
  styleUrls: ['./home-tabs.page.scss'],
})
export class HomeTabsPage implements OnInit {

  art = [
    {1: "ionci" },
    {1: "ionci" },{1: "ionci" },{1: "ionci" },{1: "ionci" },{1: "ionci" },{1: "ionci" }
  ];

  songstype = [
    { name: "Classic" , bg:"https://image.freepik.com/free-vector/musicians-professional-orchestra-musician-band-isolated-people-with-music-instruments-vector-male-female-musical-characters-illustration-orchestra-instrument-jazz-male-female-musician_53562-12392.jpg"  },
    { name: "Pop" , bg:"https://image.freepik.com/free-vector/outdoor-summer-festival-concert-with-pop-music-band-playing-music-outdoor-stage-vector-illustration_53562-5044.jpg"  },
    { name: "Rock" , bg:"https://image.freepik.com/free-vector/rock-pop-musicians-vector-cartoon-characters-young-guitarists-drummers-singers-artists-isolated_53562-5043.jpg"  },
    { name: "Fork" , bg:"https://image.freepik.com/free-vector/punjabi-man-playing-dhol-drum-woman-performing-bhangra-dance-two-option_1302-22698.jpg"  },
    { name: "Western" , bg:"https://image.freepik.com/free-vector/drummer-character-with-drum-set-vector-illustration_6427-220.jpg"  },
    { name: "party" , bg:"https://image.freepik.com/free-vector/group-cheerful-students-happy-friends-dancing-having-fun-home-party-apartment_74855-14033.jpg"  },
  ]

  ads = [
    {src: "https://image.freepik.com/free-vector/jazz-performance-musician-character-male-playing-trumpet-viola-illustration-advertisement-flyer-night-club-music-concert_169479-259.jpg"},
    {src: "https://image.freepik.com/free-vector/summer-music-festival-isometric-with-people-coming-open-air-listening-music_1284-31521.jpg"},   
    {src: "https://image.freepik.com/free-psd/neon-futuristic-music-ad-template-banner_23-2148756719.jpg"},    
    {src: "https://image.freepik.com/free-psd/house-music-ad-landing-page-template_23-2148754356.jpg"},
  ]

  constructor(private http: HTTP) { }

  ngOnInit() {
  }

}
