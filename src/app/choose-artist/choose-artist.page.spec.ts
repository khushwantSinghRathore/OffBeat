import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChooseArtistPage } from './choose-artist.page';

describe('ChooseArtistPage', () => {
  let component: ChooseArtistPage;
  let fixture: ComponentFixture<ChooseArtistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseArtistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChooseArtistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
