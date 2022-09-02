import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-detalle1',
  templateUrl: './detalle1.page.html',
  styleUrls: ['./detalle1.page.scss'],
    // Se agrega codigo de animación para entrada de texto de izquiera a derecha
  animations: [
    trigger('entrando',[
      state('void', style({
        transform: 'translatex(-100%)',
        opacity: 0
      })),

    transition(':enter',[
      animate(500, style({
        transform:'translatex(0)',
        opacity:1
      }))
    ])  
    ])
  ]

})



export class Detalle1Page implements OnInit {

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