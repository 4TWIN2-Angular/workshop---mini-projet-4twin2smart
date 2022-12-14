import { Pipe, PipeTransform } from '@angular/core';
import { University } from './university';

@Pipe({
  name: 'pipeuniversity'
})
export class PipeuniversityPipe implements PipeTransform {

  transform(ListUniv:University[],sear:String) {
       if(sear===""){
        return ListUniv;
       }
       else{
          return ListUniv.filter((univ)=>{return univ.nomUniv.startsWith(sear.toLocaleUpperCase())})

       }
  }

}
