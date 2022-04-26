import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage implements OnInit {
  

  constructor(private ruter:Router, private router:ActivatedRoute) { }

  oscuro:string="no";

  ngOnInit() {
    this.oscuro = this.router.snapshot.paramMap.get('oscuro');
  }

  
  
  irescr(){
    this.ruter.navigate(["logueado/" + this.oscuro]);
  }
  
  irhome(){
    this.ruter.navigate(['']);
  }
}
