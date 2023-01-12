import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartaFormComponent } from './carta-form/carta-form.component';
import { CartasComponent } from './cartas.component';

const cartasRoutes = [
    { path: '', component: CartasComponent},
    { path: 'novo', component: CartaFormComponent},
    { path: ':id/editar', component: CartaFormComponent},
]

@NgModule({
    imports: [RouterModule.forChild(cartasRoutes)],
    exports: [RouterModule]
})

export class CartasRoutingModule {}
