import { Injectable } from '@angular/core';
import { Carta } from '../models/carta'; 

@Injectable({
    providedIn: 'root'
})

export class CartaService {

    constructor() { }
    
    getCartas() {
        let cartas = JSON.parse(localStorage.getItem('cartas') || '[]');
        return cartas;
    }
    
    getCarta(id: Number) {
        let cartas = JSON.parse(localStorage.getItem('cartas') || '[]');
        let carta;

        for(let i = 0; i < cartas.length; i++) {
            if(cartas[i].id == id) {
                carta = cartas[i];
            }
        }

        return carta;
    }
    
    adicionar(carta: Carta) {
        let cartas = JSON.parse(localStorage.getItem('cartas') || '[]');

        // Adiciona uma nova carta
        cartas.push(carta);

        // Adiciona a nova lista de cartas
        return localStorage.setItem('cartas', JSON.stringify(cartas));
    }
    
    editar(cartaAntiga: Carta, cartaNova: Carta) {

        let cartas = JSON.parse(localStorage.getItem('cartas') || '[]');

        for(let i = 0; i < cartas.length; i++) {
            if(cartas[i].id == cartaAntiga.id) {
                cartas[i].nome = cartaNova.nome;
                cartas[i].descricao = cartaNova.descricao;
                cartas[i].ataque = cartaNova.ataque;
                cartas[i].defesa = cartaNova.defesa;
                cartas[i].tipo = cartaNova.tipo;
                cartas[i].classe = cartaNova.classe;
            }
        }

        // Adiciona a nova lista de cartas
        localStorage.setItem('cartas', JSON.stringify(cartas));

    }
    
    deletar(carta: Carta) {

        let cartas = JSON.parse(localStorage.getItem('cartas') || '[]');

        for(let i = 0; i < cartas.length; i++) {
            if(cartas[i].id == carta.id) {
                cartas.splice(i, 1);
            }
        }

        // Adiciona a nova lista de cartas
        localStorage.setItem('cartas', JSON.stringify(cartas));
    }
}
