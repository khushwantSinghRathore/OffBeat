import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChooselangPage } from './chooselang.page';

describe('ChooselangPage', () => {
  let component: ChooselangPage;
  let fixture: ComponentFixture<ChooselangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooselangPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChooselangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
