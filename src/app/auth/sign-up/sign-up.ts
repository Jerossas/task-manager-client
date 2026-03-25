import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { hasUpperCaseValidator, hasLowerCaseValidator, hasNumberValidator, hasSpecialCharacterValidator, passwordMatchValidator } from './validators/password.validators';
import { AuthService } from '../auth-service';
import { SignUpRequest } from '../models/sign-up-request.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {

  protected signUpFormGroup: FormGroup;
  protected hidePassword: boolean = true;
  protected hideConfirmPassword: boolean = true;
  protected genders: string[] = ['MALE', 'FEMALE'];

  public constructor(private authService: AuthService) {
    this.signUpFormGroup = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      middleName: new FormControl(''),
      lastName: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required, 
        Validators.minLength(8),
        hasUpperCaseValidator,
        hasLowerCaseValidator,
        hasNumberValidator,
        hasSpecialCharacterValidator
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      gender: new FormControl('', [Validators.required]),
    }, {
      validators: passwordMatchValidator
    });
  }

  protected onSubmit(): void {
    if (this.signUpFormGroup.valid) {
      const request: SignUpRequest = this.signUpFormGroup.value
      this.authService.signUp(request).subscribe({
        next: () => {
          console.log('Sign-up successful');
        },
        error: (error) => {
          console.error('Sign-up failed:', error);
        }
      });
    }
  }

}
