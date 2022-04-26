import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage implements OnInit {
  

  constructor(private ruter:Router) { }

  ngOnInit() {
  }

  irhome(){
    this.ruter.navigate(['']);
  }

  irescr(){
    this.ruter.navigate(['logueado']);
  }

}
