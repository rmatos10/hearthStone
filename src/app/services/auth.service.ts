import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    constructor(private router: Router, private toastr: ToastrService) {}

    /* Lógica inicial para validar sessão de usuário quando for ncessário */
    isUsuarioAutenticado() {
        if(!localStorage.getItem('usuario')) {
            return false;
        }
        return true;
    }
}
