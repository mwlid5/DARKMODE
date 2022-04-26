import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-multiarticulo',
  templateUrl: './multiarticulo.page.html',
  styleUrls: ['./multiarticulo.page.scss'],
})
export class MultiarticuloPage implements OnInit {

  constructor(private ruter:Router) { }
  
  ngOnInit() {
    
  }

  irescr(){
    this.ruter.navigate(['logueado']);
  }


}
