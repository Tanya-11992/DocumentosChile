import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AnimationController } from "@ionic/angular";
import { AfterViewInit, ElementRef, ViewChild } from "@angular/core";
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  data: any; // Generamos una variable

  constructor(private activeroute: ActivatedRoute, private router: Router, private animationCtrl: AnimationController) {

    // Se llama a la ruta activa y se obtiene parametros
    this.activeroute.queryParams.subscribe(params => { 
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.user; 
        console.log(this.data) 
      }else{this.router.navigate(["/login"])} 
    });
  }

  

  ver(){
    let navigationExtras: NavigationExtras = {
      state: {
      }
    };
    this.router.navigate(['/preguntas'],navigationExtras); 
  }

}


