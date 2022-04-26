import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articulosord',
  templateUrl: './articulosord.page.html',
  styleUrls: ['./articulosord.page.scss'],
})
export class ArticulosordPage implements OnInit {

  constructor(private ruter:Router) { }
  
  ngOnInit() {
    
  }

  irescr(){
    this.ruter.navigate(['logueado']);
  }

}
