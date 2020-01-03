import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoardroomComponent } from './boardroom.component';

describe('BoardroomComponent', () => {
  let component: BoardroomComponent;
  let fixture: ComponentFixture<BoardroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardroomComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoardroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
