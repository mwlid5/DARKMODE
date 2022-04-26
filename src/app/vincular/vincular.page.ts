import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vincular',
  templateUrl: './vincular.page.html',
  styleUrls: ['./vincular.page.scss'],
})
export class VincularPage implements OnInit {

  constructor(private ruter:Router, private router:ActivatedRoute) { }

  oscuro:string="no";

  ngOnInit() {
    this.oscuro = this.router.snapshot.paramMap.get('oscuro');
  }

  
  
  irescr(){
    this.ruter.navigate(["logueado/" + this.oscuro]);
  }

}
