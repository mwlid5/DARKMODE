import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-logueado',
  templateUrl: './logueado.page.html',
  styleUrls: ['./logueado.page.scss'],
})
export class LogueadoPage implements OnInit {

  oscuro:string="no";  

  constructor(private ruter:Router, private router:ActivatedRoute) { }

  ngOnInit() {

    this.oscuro = this.router.snapshot.paramMap.get('oscuro');

    }

  irajustes(){
    this.ruter.navigate(['ajustes/' + this.oscuro]);
  }
 
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  irvinc(){
    this.ruter.navigate(['invertida/' + this.oscuro]);
  }

  irmult(){
    this.ruter.navigate(['multiarticulo/' + this.oscuro]);
  }

  irdeta(){
    this.ruter.navigate(['detalleset/' + this.oscuro]);
  }

  irdesv(){
    this.ruter.navigate(['desvincular/' + this.oscuro]);
  }

  irarti(){
    this.ruter.navigate(['articulosord/' + this.oscuro]);
  }

  irinve(){
    this.ruter.navigate(['invertida/' + this.oscuro]);
  }

  irhome(){
    this.ruter.navigate(['']);
  }

  

}
