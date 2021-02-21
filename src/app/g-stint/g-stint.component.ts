import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import { MonoplazasService } from "../monoplaza.service";
import { Monoplaza } from "../modelos/monoplaza";

@Component({
  selector: "app-g-stint",
  templateUrl: "./g-stint.component.html",
  styleUrls: ["./g-stint.component.css"]
})
export class GStintComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  monoplazas: Array<Monoplaza> = [];
  monoplazaApi = null;
  monoplazaTmp: any;

  chartOptions: Highcharts.Options = {
    chart: {
      type: "bar"
    },
    title: {
      text: "Comparacion de los diferentes stint"
    },
    subtitle: {
      text: "Fuente: Datos propios"
    },
    xAxis: {
      categories: []
    },
    yAxis: {
      min: 0,
      title: {
        text: "Numero de vueltas"
      }
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: "normal"
      }
    },
    series: [
      {
        type: "bar",
        name: "Stint 1",
        data: []
      },
      {
        type: "bar",
        name: "Stint 2",
        data: []
      },
      {
        type: "bar",
        name: "Stint 3",
        data: []
      }
    ]
  };

  constructor(private monoplazaService: MonoplazasService) {}

  ngOnInit() {
    this.getMisDatos();
  }

  getMisDatos() {
    this.monoplazaService.getMonoplaza2().subscribe(
      result => {
        const misDatos: Array<Monoplaza> = [];
        let api = null;
        api = result;
        for (let m of api) {
          let p = new Monoplaza(
            m.id,
            m.modelo,
            m.piloto,
            m.n_vuelta,
            m.num_pitstop,
            m.f_pitstop,
            m.url
          );
          misDatos.push(p);
        }
        const dataSeries = misDatos.map((x: Monoplaza) => x.stint1());
        const dataSeries1 = misDatos.map((x: Monoplaza) => x.stint2());
        const dataSeries2 = misDatos.map((x: Monoplaza) => x.stint3());
        const dataCategorias = misDatos.map((x: Monoplaza) => x.piloto);
        this.chartOptions.series[0]["data"] = dataSeries;
        this.chartOptions.series[1]["data"] = dataSeries1;
        this.chartOptions.series[2]["data"] = dataSeries2;
        this.chartOptions.xAxis["categories"] = dataCategorias;
        Highcharts.chart("gStint", this.chartOptions);
      },
      error => console.log(error)
    );
  }
}
