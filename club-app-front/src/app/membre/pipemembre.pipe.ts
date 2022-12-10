import { Pipe, PipeTransform } from '@angular/core';
import { membre } from '../models/membre';

@Pipe({
  name: 'pipemembre'
})
export class PipemembrePipe implements PipeTransform {

  transform(listmembres:membre[],lawej:String) {
    if(listmembres.length===0|| lawej===""){
      return listmembres;
    }
    else{
      return listmembres.filter((membre)=>{return membre.nom_M.startsWith(lawej.toLocaleLowerCase())})
    }
    
  }

}
