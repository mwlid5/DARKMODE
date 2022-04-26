import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-invertida',
  templateUrl: './invertida.page.html',
  styleUrls: ['./invertida.page.scss'],
})
export class InvertidaPage implements OnInit {

  constructor(private ruter:Router, private router:ActivatedRoute) { }

  oscuro:string="no";

  ngOnInit() {
    this.oscuro = this.router.snapshot.paramMap.get('oscuro');
  }

  
  
  irescr(){
    this.ruter.navigate(["logueado/" + this.oscuro]);
  }

}
