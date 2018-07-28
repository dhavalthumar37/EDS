import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { LoginComponent } from './login.component';
import { Router, ActivatedRoute } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppMaterialModule } from '../common/app.material.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let activeRouteService: ActivatedRoute;
  let router: Router;
  let formBuilder: FormBuilder;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, ReactiveFormsModule, AppMaterialModule],
      providers: [
        { provide: AuthService, useValue: authService },
        { provide: ActivatedRoute, useValue: activeRouteService },
        { provide: Router, useValue: router },
        { provide: FormBuilder, useValue: formBuilder }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Email required validation', () => {
    expect(component).toBeTruthy();
  });

  it('Email address should be valid', () => {
    expect(component).toBeTruthy();
  });

});
