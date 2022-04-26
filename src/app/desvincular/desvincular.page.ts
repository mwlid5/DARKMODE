import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desvincular',
  templateUrl: './desvincular.page.html',
  styleUrls: ['./desvincular.page.scss'],
})
export class DesvincularPage implements OnInit {

  constructor(private ruter:Router) { }
  
  ngOnInit() {
    
  }

  irescr(){
    this.ruter.navigate(['logueado']);
  }


}
