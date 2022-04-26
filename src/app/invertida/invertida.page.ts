import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invertida',
  templateUrl: './invertida.page.html',
  styleUrls: ['./invertida.page.scss'],
})
export class InvertidaPage implements OnInit {

  constructor(private ruter:Router) { }
  
  ngOnInit() {
    
  }

  irescr(){
    this.ruter.navigate(['logueado']);
  }

}
