import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, ValidatorFn, Validators } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  registerForm: FormGroup = new FormGroup({});
  maxDate: Date = new Date();
  validationErrors: string[] | undefined;
  isLoginMode = true;
  is2FAMode = false;
  isLoading: boolean = false;

  constructor(private accountService: AccountService, private toastr: ToastrService,
    private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  //Login & SignUp mode selection
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
    this.toastr.info(this.isLoginMode ? `Switched To Login Mode` : `Switched To SignUp Mode`);
  }

  initializeForm() {
    this.registerForm = this.fb.group({
      gender: ['male'],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      confirmPassword: ['', [Validators.required, this.matchValues('password')]]
    });
    this.registerForm.controls['password'].valueChanges.subscribe({
      next: () => this.registerForm.controls['confirmPassword'].updateValueAndValidity()
    });
  }

  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control?.value === control?.parent?.get(matchTo)?.value ? null : { isMatching: true }
    }
  }

  onSubmit(form: NgForm) {
    let authObs: Observable<any>;

    if (this.is2FAMode) authObs = this.accountService.verifyTwoFA(form.value);
    else if (this.isLoginMode) authObs = this.accountService.login(form.value);
    else authObs = authObs = this.accountService.register(form.value);

    authObs.subscribe(
      {
        next: response => {
          if (!this.isLoginMode || !response.isTwoFAEnabled || this.is2FAMode) {
            if (!this.isLoginMode) {
              this.toastr.success('SetUp 2FA Login Method', 'Account Created!');
              this.router.navigate(['/user/profile']);
            } else {
              this.toastr.success('Welcome to bookStore', 'Login Success!');
              this.router.navigate(['/user/profile']);
              // this.router.navigateByUrl('/book');
            }
          } else {
            this.is2FAMode = true;
            this.toastr.success('Verify 2FA OTP!');
          }
        },
        error: error => {
          console.log(error);
          console.log(error.error);
          this.toastr.info("Try again!", error.error);
          this.validationErrors = error;
        }
      }
    )

  }

  cancel() {
    this.cancelRegister.emit(false);
  }

  // private GetDateOnly(dob: string | undefined) {
  //   if (!dob) return;
  //   let theDob = new Date(dob);
  //   return new Date(theDob.setMinutes(theDob.getMinutes() - theDob.getTimezoneOffset())).toISOString().slice(0, 10);
  // }

}