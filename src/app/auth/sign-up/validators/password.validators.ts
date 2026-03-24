import { AbstractControl, ValidationErrors } from "@angular/forms";

export function hasUpperCaseValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value as string;
  if (!value) return null;
  return /[A-Z]/.test(value) ? null : { noUpperCase: true };
}

export function hasLowerCaseValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value as string;
  if (!value) return null;
  return /[a-z]/.test(value) ? null : { noLowerCase: true };
}

export function hasNumberValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value as string;
  if (!value) return null;
  return /\d/.test(value) ? null : { noNumber: true };
}

export function hasSpecialCharacterValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value as string;
  if (!value) return null;
  return /[@$!%*?&]/.test(value) ? null : { noSpecialCharacter: true };
}

export function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;
  return password === confirmPassword ? null : { passwordMismatch: true };
}