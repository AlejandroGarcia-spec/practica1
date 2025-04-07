import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const auth2Guard: CanActivateFn = (route, state) => {
    const routing=inject(Router);
    const auth=localStorage.getItem('token');
    if(auth){
      routing.navigateByUrl('/dashboard/pipes')
      return false;
    }else{
      return true;
    }
};
