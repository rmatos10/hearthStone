import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Carta } from 'src/app/models/carta';
import { CartaService } from 'src/app/services/carta.service';

@Component({
    selector: 'app-carta-form',
    templateUrl: './carta-form.component.html',
    styleUrls: ['./carta-form.component.css']
})

export class CartaFormComponent implements OnInit {
    
    private routeSub: Subscription = new Subscription;
    carta: Carta = {};
    cartaSelecionada: Carta = {};
    cartas: Carta[] = [];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private cartaService: CartaService,
        private toastr: ToastrService
    ) {}

    ngOnInit(): void {
        this.cartas = this.cartaService.getCartas();
        this.routeSub = this.route.params.subscribe(params => {
            if (params['id'] && this.router.url.includes('editar')) {
                this.getCarta();
            }
        });
    }

    getCarta(): void {
        //Criar uma cópia da carta 
        const id = this.route.snapshot.params.id;
        this.cartaSelecionada = this.cartaService.getCarta(id); 
        this.carta = this.cartaSelecionada;
    }

    cancelar(): void {
        this.router.navigate(['/cartas']);
    }

    salvar(): void {
        if (this.carta.id) {
            this.cartaService.editar(this.cartaSelecionada, this.carta);
            this.toastr.success('Carta atualizada com sucesso!', 'Carta');
            this.router.navigate(['/cartas']);  
        } else {
            let novaCarta = {
                id: this.cartas.length++,
                nome: this.carta.nome,
                descricao: this.carta.descricao,
                ataque: this.carta.ataque,
                defesa: this.carta.defesa,
                tipo: this.carta.tipo,
                classe: this.carta.classe
            }
            this.cartaService.adicionar(novaCarta);
            this.toastr.success('Carta cadastrada com sucesso!', 'Carta');
            this.router.navigate(['/cartas']);
        }
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
