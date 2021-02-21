import { Component, OnInit, Input } from "@angular/core";
import { Monoplaza } from "../modelos/monoplaza";
import { MonoplazasService } from "../monoplaza.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-monoplaza-detail",
  templateUrl: "./monoplaza-detail.component.html",
  styleUrls: ["./monoplaza-detail.component.css"]
})
export class MonoplazaDetailComponent implements OnInit {
  // @Input() and @Output() allow Angular to share data between the parent context and child directives or components
  monoplaza: Monoplaza;
  monoplazaApi = null;

  constructor(
    private monoplazaService: MonoplazasService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit() {
    this.getMonoplaza();
  }

  // save(
  //   modelo_m1: string,
  //   num_carrera1: string,
  //   num_victoria1: string,
  //   num_pole1: string,
  //   num_podio1: string,
  //   escuderia1: string
  // ): void {
  //   const modelo_mm = modelo_m1.trim();
  //   const num_carreram = parseInt(num_carrera1);
  //   const num_victoriam = parseInt(num_victoria1);
  //   const num_polem = parseInt(num_pole1);
  //   const num_podiom = parseInt(num_podio1);
  //   const escuderiam = escuderia1.trim();

  //   const newDoc: any = {
  //     id: this.piloto.id,
  //     nombre: this.piloto.nombre,
  //     fecha_n: this.piloto.fecha_n,
  //     modelo_m: modelo_mm,
  //     num_carrera: num_carreram,
  //     num_victoria: num_victoriam,
  //     num_pole: num_polem,
  //     num_podio: num_podiom,
  //     escuderia: escuderiam,
  //     url: this.piloto.url
  //   };

  //   this.monoplazaService.updateMonoplaza(newDoc).subscribe(() => this.goBack());
  // }

  /*
  Para recuperar el documento por el Id reicibido como parámetro
  */
  getMonoplaza(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.monoplazaService.getMonoplaza(id).subscribe(mon => {
      this.monoplazaApi = mon;
      this.monoplaza = new Monoplaza(
        this.monoplazaApi[0].id,
        this.monoplazaApi[0].modelo,
        this.monoplazaApi[0].piloto,
        this.monoplazaApi[0].n_vuelta,
        this.monoplazaApi[0].num_pitstop,
        this.monoplazaApi[0].f_pitstop,
        this.monoplazaApi[0].url
      );
    });
  }

  goBack(): void {
    this.location.back();
  }
}
