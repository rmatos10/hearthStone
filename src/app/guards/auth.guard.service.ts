import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard {

    constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        return this.verificarAcesso();
    }

    canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
        return this.verificarAcesso();
    }

    canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>| boolean| UrlTree {
        return this.canActivate(next, state);
    }

    private verificarAcesso() {

        // Lógica preparada para validação de usuário logado
        // if(!this.authService.isUsuarioAutenticado()) {
        //     this.router.navigate(['/login']);
        //     return false;
        // }

        return true;
    }
}
