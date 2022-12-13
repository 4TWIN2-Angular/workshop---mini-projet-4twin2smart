import { Component, OnInit,Input, SimpleChanges} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mailingcontent } from 'src/app/models/mailing';
import { MembreserviceService } from 'src/app/shared/membreservice.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  constructor(private membreservice:MembreserviceService) { }
  @Input() maile:String;
  

mailer= new Mailingcontent();
  ngOnInit(): void {
     
  }
  ngOnChanges(changes: SimpleChanges) {
    this.mailer.toEmail=this.maile;
  }
sendmail(){
  this.membreservice.envoyermail(this.mailer).subscribe(data=>console.log(data),
  Swal.fire({
    icon: 'success',
    title: 'Mail Has been sent!',
    showConfirmButton: false,
    timer: 2500
  }))
}
}
