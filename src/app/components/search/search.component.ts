import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { HeroesService,Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  heroes:any[] = [];
  termino:string;

  constructor(private heroeService:HeroesService,
              private activatedRoute:ActivatedRoute){

  }

  ngOnInit() {
      this.activatedRoute.params.subscribe(params=>{
          this.termino = params["valor"];
          this.heroes = this.heroeService.buscarHeroe(params["valor"]);
          console.log(this.heroes);
      });
  }

}
