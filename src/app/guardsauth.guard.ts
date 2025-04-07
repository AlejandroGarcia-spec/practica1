import { CanActivateFn } from '@angular/router';

export const guardsauthGuard: CanActivateFn = (route, state) => {
  return true;
};
