import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);  // Using `inject` to get an instance of the AuthService
  if (authService.isLoggedIn()) {
    return true;
  } else {
    return false;
  }
};

