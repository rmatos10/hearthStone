import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartasRoutingModule } from './cartas.routing.module';
import { CartaFormComponent } from './carta-form/carta-form.component';
import { CartasComponent } from './cartas.component';
import { FormsModule } from '@angular/forms';
import { PesquisarTextoPipe } from '../utils/pesquisar.pipe';

@NgModule({
    declarations: [
        PesquisarTextoPipe,
        CartasComponent,
        CartaFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        CartasRoutingModule
    ]
})

export class CartasModule { }
