import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import { MonoplazasService } from "../monoplaza.service";
import { Piloto } from "../modelos/piloto";

@Component({
  selector: "app-g-porcentajes",
  templateUrl: "./g-porcentajes.component.html",
  styleUrls: ["./g-porcentajes.component.css"]
})
export class GPorcentajesComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  pilotos: Array<Piloto> = [];
  // pilotosApi = null;
  // pilotoTmp: any;

  chartOptions: Highcharts.Options = {
    chart: {
      type: "column"
    },
    title: {
      text: "Trayectoria de los pilotos actuales"
    },
    subtitle: {
      text: "Fuente: https://www.statsf1.com"
    },
    xAxis: {
      categories: []
    },
    yAxis: {
      min: 0,
      title: {
        text: "Porcentajes (%)"
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.1,
        borderWidth: 0
      }
    },
    series: [
      {
        type: "column",
        name: "Victorias",
        data: []
      },
      {
        type: "column",
        name: "Pole",
        data: []
      },
      {
        type: "column",
        name: "Podio",
        data: []
      }
    ],
    noData: {
      style: {
        allowOverlap: true,
        fontWeight: "bold",
        fontSize: "15px",
        color: "#303030"
      }
    }
  };

  constructor(private monoplazaService: MonoplazasService) {}

  ngOnInit() {
    this.getMisDatos();
  }

  getMisDatos() {
    this.monoplazaService.getPiloto().subscribe(
      result => {
        const misDatos: Array<Piloto> = [];
        let api = null;
        api = result;
        for (let m of api) {
          let p = new Piloto(
            m.id,
            m.nombre,
            m.modelo_m,
            m.fecha_n,
            m.num_carrera,
            m.num_victoria,
            m.num_pole,
            m.num_podio,
            m.escuderia,
            m.url
          );
          misDatos.push(p);
        }
        const dataSeries = misDatos.map((x: Piloto) => x.porcentaje_v());
        const dataSeries1 = misDatos.map((x: Piloto) => x.porcentaje_pole());
        const dataSeries2 = misDatos.map((x: Piloto) => x.porcentaje_podio());
        const dataCategorias = misDatos.map((x: Piloto) => x.nombre);
        this.chartOptions.series[0]["data"] = dataSeries;
        this.chartOptions.series[1]["data"] = dataSeries1;
        this.chartOptions.series[2]["data"] = dataSeries2;
        this.chartOptions.xAxis["categories"] = dataCategorias;
        Highcharts.chart("gPorcentajes", this.chartOptions);
      },
      error => console.log(error)
    );
  }
}
