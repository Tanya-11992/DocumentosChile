import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'], 
})
export class LoginPage implements OnInit {

  user={
    usuario:"",
    password:""
  }

  constructor(private router: Router, public alerta:AlertController) { }

  ngOnInit() {
  }
  ingresar(){
    //Se declara e instancia un elemento de tipo NavigationsExtras.
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user // Al estado le asignamos un objeto con clave y valor.
      }
    };
    this.router.navigate(['/home'],navigationExtras);  // Navegamos hacia la pagina Home.
  }

  

  //Alerta a boton aceptar para mostrar un mensaje.
  async presentAlert(){
    let miAlerta = await this.alerta.create({
      header: 'Dudas con tus trámites',
      message: 'Llamanos al siguiente número 600 600 1234 y te ayudamos.',
      buttons: ['ACEPTAR']
    });
    miAlerta.present()
  }
}
