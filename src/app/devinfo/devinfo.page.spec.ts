import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DevinfoPage } from './devinfo.page';

describe('DevinfoPage', () => {
  let component: DevinfoPage;
  let fixture: ComponentFixture<DevinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DevinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
