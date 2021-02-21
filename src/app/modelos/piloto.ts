export class Piloto {
  id: number;
  nombre: String;
  fecha_n: Date;
  modelo_m: String;
  num_carrera: number;
  num_victoria: number;
  num_pole: number;
  num_podio: number;
  escuderia: String;
  url: String;

  constructor(
    id: number,
    nombre: String,
    fecha_n: Date,
    modelo_m: String,
    num_carrera: number,
    num_victoria: number,
    num_pole: number,
    num_podio: number,
    escuderia: String,
    url: String
  ) {
    this.id = id;
    (this.nombre = nombre),
      (this.fecha_n = fecha_n),
      (this.modelo_m = modelo_m),
      (this.num_carrera = num_carrera),
      (this.num_victoria = num_victoria),
      (this.num_pole = num_pole),
      (this.num_podio = num_podio),
      (this.escuderia = escuderia),
      (this.url = url);
  }

  get id1() {
    return this.id;
  }
  get nombre1() {
    return this.nombre;
  }
  get modelo1() {
    return this.modelo_m;
  }
  get fecha() {
    return this.fecha_n;
  }
  get carrera() {
    return this.num_carrera;
  }
  get victoria() {
    return this.num_victoria;
  }
  get podio() {
    return this.num_podio;
  }
  get pole() {
    return this.num_pole;
  }
  get escuderia1() {
    return this.escuderia;
  }
  get url1() {
    return this.url;
  }

  porcentaje_v() {
    let pv1: number = this.num_victoria * 100;
    let p_v: number = pv1 / this.num_carrera;
    return decimales(p_v, 2);
  }
  porcentaje_pole() {
    let p_pole: number = (this.num_pole * 100) / this.num_carrera;
    return decimales(p_pole, 2);
  }
  porcentaje_podio() {
    let p_podio: number = (this.num_podio * 100) / this.num_carrera;
    return decimales(p_podio, 2);
  }
}

function decimales(x, posiciones = 0) {
  var s = x.toString();
  var decimalLength = s.indexOf(".") + 1;
  var numStr = s.substr(0, decimalLength + posiciones);
  return Number(numStr);
}
