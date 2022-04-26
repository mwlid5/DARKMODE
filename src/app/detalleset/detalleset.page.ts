import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalleset',
  templateUrl: './detalleset.page.html',
  styleUrls: ['./detalleset.page.scss'],
})
export class DetallesetPage implements OnInit {

  constructor(private ruter:Router) { }
  
  ngOnInit() {
    
  }

  irescr(){
    this.ruter.navigate(['logueado']);
  }


}
