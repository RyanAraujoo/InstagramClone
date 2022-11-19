import { ComponentFixture, TestBed} from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { UserDataService } from './../../../shared/services/userData.service';

describe('CadastroComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [UserDataService]
    })


    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
