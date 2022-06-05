import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes:string[]=['Spiderman','Ironman','Pedro El guapo','Lucía la bruja']
  heroeBorrado:string='';

  borrarHeroe(indice:number):void{
    this.heroeBorrado=this.heroes.splice(indice,1)[0] || '';
  }
}
