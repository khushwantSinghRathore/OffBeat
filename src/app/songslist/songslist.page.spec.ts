import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SongslistPage } from './songslist.page';

describe('SongslistPage', () => {
  let component: SongslistPage;
  let fixture: ComponentFixture<SongslistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongslistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SongslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
