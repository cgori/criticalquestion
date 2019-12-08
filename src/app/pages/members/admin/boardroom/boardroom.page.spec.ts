import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoardroomPage } from './boardroom.page';

describe('BoardroomPage', () => {
  let component: BoardroomPage;
  let fixture: ComponentFixture<BoardroomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardroomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoardroomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
