import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logueado',
  templateUrl: './logueado.page.html',
  styleUrls: ['./logueado.page.scss'],
})
export class LogueadoPage implements OnInit {

  constructor(private ruter:Router) { }

  ngOnInit() {
  }


  irajustes(){
    this.ruter.navigate(['ajustes']);
  }
 
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  irvinc(){
    this.ruter.navigate(['invertida']);
  }

  irmult(){
    this.ruter.navigate(['multiarticulo']);
  }

  irdeta(){
    this.ruter.navigate(['detalleset']);
  }

  irdesv(){
    this.ruter.navigate(['desvincular']);
  }

  irarti(){
    this.ruter.navigate(['articulosord']);
  }

  irinve(){
    this.ruter.navigate(['invertida']);
  }

  irhome(){
    this.ruter.navigate(['']);
  }

}
