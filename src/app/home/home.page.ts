import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContentChild } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private ruter:Router) {
   
  }

  irlog(){
    this.ruter.navigate(['logueado']);
  }

  showPassword = false;
  showPassword2 = false;
  
  @ContentChild(IonInput) input: IonInput;
  
  toggleShow() {
    this.showPassword = !this.showPassword;
    this.showPassword2 = (this.showPassword2==true)?false:true;
  }

  getType() {
      return this.showPassword2 ? 'text' : 'password';
  }
  
dark:string="no";

  toggleShow2() {
    if (this.dark == "no"){
    document.body.setAttribute('color-theme','dark');
    this.dark="si";
    }
    else{
      document.body.setAttribute('color-theme','light');
      this.dark="no";
    }
  }

}

