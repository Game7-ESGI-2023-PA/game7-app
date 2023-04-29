import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../shared/services/auth.service";

export const authGuard = () => {
  const router = inject(Router)
  if (!AuthService.isAuthenticated()) {
    return router.parseUrl('/login');
  }
  return true;
}
