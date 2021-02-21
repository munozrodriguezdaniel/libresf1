import { parse } from "@angular/compiler/src/render3/view/style_parser";
import { Component, OnInit } from "@angular/core";
import { Piloto } from "../modelos/piloto";
import { MonoplazasService } from "../monoplaza.service";

@Component({
  selector: "app-piloto",
  templateUrl: "./piloto.component.html",
  styleUrls: ["./piloto.component.css"]
})
export class PilotoComponent implements OnInit {
  piloto: Array<Piloto> = [];
  pilotoApi = null;
  pilotoTmp: any;

  constructor(private monoplazaService: MonoplazasService) {}

  getPiloto() {
    this.monoplazaService.getPiloto().subscribe(piloto => {
      this.pilotoApi = piloto;
      this.piloto = this.pilotoApi.map((x: any) => {
        return new Piloto(
          x.id,
          x.nombre,
          x.fecha_n,
          x.modelo_m,
          x.num_carrera,
          x.num_victoria,
          x.num_pole,
          x.num_podio,
          x.escuderia,
          x.url
        );
      });
    });
  }

  add(
    id: string,
    nombre: string,
    fecha_n: string,
    modelo_m: string,
    num_carrera: string,
    num_victoria: string,
    num_podio: string,
    num_pole: string,
    escuderia: string,
    url: string
  ): void {
    const idm = parseInt(id);
    const nombrem = nombre.trim();
    const fecha_nm = new Date(fecha_n);
    const modelo_mm = modelo_m.trim();
    const num_carreram = parseInt(num_carrera);
    const num_victoriam = parseInt(num_victoria);
    const num_podiom = parseInt(num_podio);
    const num_polem = parseInt(num_pole);
    const escuderiam = escuderia.trim();
    const urlm = url.trim();

    const newDoc: any = {
      id: idm,
      nombre: nombrem,
      fecha_n: fecha_nm,
      modelo_m: modelo_mm,
      num_carrera: num_carreram,
      num_victoria: num_victoriam,
      num_podio: num_podiom,
      num_pole: num_polem,
      escuderia: escuderiam,
      url: urlm
    };

    this.monoplazaService.addPiloto(newDoc).subscribe(piloto2 => {
      this.pilotoTmp = newDoc;
      this.piloto.push(this.pilotoTmp);
    });
  }

  delete(piloto: Piloto): void {
    /* filter crea otro array filtrando los elementos que sean distintos de el "hero" recibido.
    Se trata de que el array en memoria conincida con el server
    */
    this.piloto = this.piloto.filter(h => h !== piloto);
    this.monoplazaService.deletePiloto(piloto).subscribe();
  }

  ngOnInit() {
    this.getPiloto();
  }
}
