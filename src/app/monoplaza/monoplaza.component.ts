import { Component, OnInit } from "@angular/core";
import { Monoplaza } from "../modelos/monoplaza";
import { Piloto } from "../modelos/piloto";
import { MonoplazasService } from "../monoplaza.service";

@Component({
  selector: "app-monoplaza",
  templateUrl: "./monoplaza.component.html",
  styleUrls: ["./monoplaza.component.css"]
})
export class MonoplazaComponent implements OnInit {
  monoplazas: Monoplaza[];
  monoplazasApi = null;
  monoplazaTmp: any;

  constructor(private monoplazaService: MonoplazasService) {}

  getMonoplazasApi() {
    this.monoplazaService.getMonoplaza2().subscribe(monoplazas => {
      this.monoplazasApi = monoplazas;
      this.monoplazas = this.monoplazasApi.map((x: any) => {
        return new Monoplaza(
          x.id,
          x.modelo,
          x.piloto,
          x.n_vuelta,
          x.num_pitstop,
          x.f_pitstop,
          x.url
        );
      });
    });
  }

  ngOnInit() {
    this.getMonoplazasApi();
  }
}
