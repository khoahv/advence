import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {ComponentCanDeactivate} from './componet-can-deactivate';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<ComponentCanDeactivate> {
  canDeactivate(component: ComponentCanDeactivate): boolean {
   
    if(!component.canDeactivate()){
        if (confirm("Nếu bạn thoát đi mọi thứ sẽ mất")) {
            return true;
        } else {
            return false;
        }
    }
    return true;
  }
}
