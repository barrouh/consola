import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginDTO } from '../shared/model/login-dto';
import { Employee } from '../shared/model/employee';
import { LoginService } from '../shared/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  public employeeObj: Employee = new Employee();
  private loginDTO: LoginDTO = new LoginDTO();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      username: ["barrouh", [Validators.required]],
      password: ["SDXAJZfQdd", [Validators.required]],
    });
  }

  login() {
    this.loginDTO.username = this.loginForm.controls.username.value;
    this.loginDTO.password = this.loginForm.controls.password.value;
    this.loginService.login(this.loginDTO).subscribe((data: Employee) => {
      this.employeeObj = new Employee();
      this.employeeObj = data;
      console.log(this.employeeObj);
      this.router.navigate(['../layout/landing-page'], {
        relativeTo: this.activatedRoute,
      });
    });
  }
}