import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const routing=inject(Router);
  const auth=localStorage.getItem('token');
  if(auth){
    return true;
  }else{
    routing.navigateByUrl('/dashboard/login')
    return false;
  }
};
