import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Carta } from '../models/carta';
import { CartaService } from '../services/carta.service';

declare const $: any;

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.css']
})
export class CartasComponent implements OnInit {

    // @ViewChild('dataTableCartas', {static: false}) dataTableCartas: any;
    // dtOptions: any = {}; 
    cartas: Carta[] = [];
    pesquisar: string = '';

    constructor(private cartaService: CartaService, private toastr: ToastrService) { }

    ngOnInit(): void {
        this.cartas = this.cartaService.getCartas();
    }

    alterarNivelForcaCarta(forca: any){
        if(forca >= 9 && forca <= 10)
            return 'bg-danger';
        if(forca >= 7 && forca <= 8)
            return 'bg-warning text-dark';
        else
            return 'bg-light text-dark';
    }

    excluir(carta: Carta): void {
        this.cartaService.deletar(carta);
        this.toastr.success('Carta deletada com sucesso!', 'Carta');
        this.cartas = this.cartaService.getCartas();
    }
}
