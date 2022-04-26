import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vincular',
  templateUrl: './vincular.page.html',
  styleUrls: ['./vincular.page.scss'],
})
export class VincularPage implements OnInit {

  constructor(private ruter:Router) { }
  
  ngOnInit() {
    
  }

  irescr(){
    this.ruter.navigate(['logueado']);
  }


}
