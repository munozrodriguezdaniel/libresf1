import { Piloto } from "../modelos/piloto";

export class Monoplaza {
  id: number;
  modelo: String;
  piloto: Piloto;
  n_vuelta: number;
  num_pitstop: number;
  f_pitstop: Array<Date>;
  url: String;

  constructor(
    id: number,
    modelo: string,
    piloto: Piloto,
    n_vuelta: number,
    num_pitstop: number,
    f_pitstop: Array<Date>,
    url: String
  ) {
    this.id = id;
    this.modelo = modelo;
    this.piloto = piloto;
    this.n_vuelta = n_vuelta;
    this.num_pitstop = num_pitstop;
    this.f_pitstop = f_pitstop;
    this.url = url;
  }
  stint1() {
    //Declaramos la fecha de inicio de la sesion de libres en milisegundos
    let inicio = Date.parse("2020-11-03T14:00:00.000Z");
    //Declaramos el tiempo medio de una vuelta en milisegundos
    let tiempo_v = 76000; // 76000 ms = 1.16 minutos
    //Convertimos la fecha del pitstop a string y luego la pasamos a milisegundos
    let fecha_p = String(this.f_pitstop[0]);
    let final = Date.parse(fecha_p);
    //Calculamos el tiempo que ha estado en pista el monoplaza
    let tiempo_emp = final - inicio;
    //Dividimos el tiempo que ha estado en pista entre el tiempo medio de vuelta y sabemos cuantas vuelta
    //ha dado durante el primer stint
    let numero_v = Math.floor(tiempo_emp / tiempo_v);
    return numero_v;
  }
  stint2() {
    //Declaramos el tiempo medio de una vuelta en milisegundos
    let tiempo_v1 = 76000; // 76000 ms = 1.16 minutos
    //Convertimos la fecha del pitstop a string y luego la pasamos a milisegundos
    let fecha_p1 = String(this.f_pitstop[0]);
    let inicio1 = Date.parse(fecha_p1);
    let fecha_p2 = String(this.f_pitstop[1]);
    let final1 = Date.parse(fecha_p2);
    //Calculamos el tiempo que ha estado en pista el monoplaza
    let tiempo_emp1 = final1 - inicio1;
    //Dividimos el tiempo que ha estado en pista entre el tiempo medio de vuelta y sabemos cuantas vuelta
    //ha dado durante el primer stint
    let numero_v = Math.floor(tiempo_emp1 / tiempo_v1);
    return numero_v;
  }
  stint3() {
    if (this.f_pitstop[2]) {
      //Declaramos el tiempo medio de una vuelta en milisegundos
      let tiempo_v2 = 76000; // 76000 ms = 1.16 minutos
      //Convertimos la fecha del pitstop a string y luego la pasamos a milisegundos
      let fecha_p2 = String(this.f_pitstop[1]);
      let inicio2 = Date.parse(fecha_p2);
      let fecha_p3 = String(this.f_pitstop[2]);
      let final2 = Date.parse(fecha_p3);
      //Calculamos el tiempo que ha estado en pista el monoplaza
      let tiempo_emp2 = final2 - inicio2;
      //Dividimos el tiempo que ha estado en pista entre el tiempo medio de vuelta y sabemos cuantas vuelta
      //ha dado durante el primer stint
      let numero_v = Math.floor(tiempo_emp2 / tiempo_v2);
      return numero_v;
    } else {
      let numero_v = 0;
      return numero_v;
    }
  }
}
