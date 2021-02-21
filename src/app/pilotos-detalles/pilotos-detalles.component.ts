import { Component, OnInit } from "@angular/core";
import { Piloto } from "../modelos/piloto";
import { MonoplazasService } from "../monoplaza.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-pilotos-detalles",
  templateUrl: "./pilotos-detalles.component.html",
  styleUrls: ["./pilotos-detalles.component.css"]
})
export class PilotosDetallesComponent implements OnInit {
  piloto: Piloto;
  pilotoApi = null;
  pilotoTmp: any;
  piloto1: Array<Piloto> = [];

  constructor(
    private monoplazaService: MonoplazasService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  //Datos del piloto

  getPiloto2(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.monoplazaService.getPiloto2(id).subscribe(mon => {
      this.pilotoApi = mon;
      this.piloto = new Piloto(
        this.pilotoApi[0].id,
        this.pilotoApi[0].nombre,
        this.pilotoApi[0].fecha_n,
        this.pilotoApi[0].modelo_m,
        this.pilotoApi[0].num_carrera,
        this.pilotoApi[0].num_victoria,
        this.pilotoApi[0].num_podio,
        this.pilotoApi[0].num_pole,
        this.pilotoApi[0].escuderia,
        this.pilotoApi[0].url
      );
    });
  }

  //Modificar datos del piloto

  save(
    modelo_m1: string,
    num_carrera1: string,
    num_victoria1: string,
    num_pole1: string,
    num_podio1: string,
    escuderia1: string
  ): void {
    const modelo_mm = modelo_m1.trim();
    const num_carreram = parseInt(num_carrera1);
    const num_victoriam = parseInt(num_victoria1);
    const num_polem = parseInt(num_pole1);
    const num_podiom = parseInt(num_podio1);
    const escuderiam = escuderia1.trim();

    const newDoc: any = {
      id: this.piloto.id,
      nombre: this.piloto.nombre,
      fecha_n: this.piloto.fecha_n,
      modelo_m: modelo_mm,
      num_carrera: num_carreram,
      num_victoria: num_victoriam,
      num_pole: num_polem,
      num_podio: num_podiom,
      escuderia: escuderiam,
      url: this.piloto.url
    };

    this.monoplazaService.updatePiloto(newDoc).subscribe(() => this.goBack());
  }

  //Para ir hacia atras en los detalles del piloto
  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getPiloto2();
  }
}
