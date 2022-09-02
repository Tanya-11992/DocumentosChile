import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { animate, state, style, transition, trigger,  AUTO_STYLE, } from '@angular/animations';

const DEFAULT_DURATION = 300;

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.page.html',
  styleUrls: ['./preguntas.page.scss'],
  //animacion de boton que se despliega y contrae
  animations: [
      trigger('collapse', [
      state('false', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
      state('true', style({ height: '0', visibility: 'hidden' })),
      transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
      transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out'))
    ]),
  ]
})


export class PreguntasPage implements OnInit {
  collapsed = false;
  collapsedd: boolean;


  toggle() {this.collapsed = !this.collapsed;}
  expand() {this.collapsed = false;}
  collapse() {this.collapsed = true;}

  constructor(private router: Router, private activeroute: ActivatedRoute) { }

  ngOnInit() {
  }

  regresar(){
    let navigationExtras: NavigationExtras = {
      state: {
      }
    };
    this.router.navigate(['/home'],navigationExtras); 
  }
  

}


