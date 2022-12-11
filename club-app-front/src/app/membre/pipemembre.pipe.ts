import { Pipe, PipeTransform } from '@angular/core';
import { membre } from '../models/membre';

@Pipe({
  name: 'pipemembre'
})
export class PipemembrePipe implements PipeTransform {

  transform(listmembres:membre[],lawej:String,lawejtype:String) {
    
      if(lawejtype!=""){
     if (lawejtype==='Club'){
      
      return listmembres.filter((membre)=>{return membre.club.nomdeclub.startsWith(lawej.toLocaleLowerCase())})
    }
    else  {
      return listmembres.filter((membre)=>{return membre.nom_M.startsWith(lawej.toLocaleLowerCase())})

    }
  }
     if (lawejtype===""){
        if(lawej===""){
          return listmembres;
        }
      }
       return listmembres.filter((membre)=>{return membre.nom_M.startsWith(lawej.toLocaleLowerCase())})

       
  
  

}
}
