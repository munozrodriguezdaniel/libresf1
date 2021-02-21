import { Injectable } from "@angular/core";
import { MessageService } from "./message.service";
import { HttpClient } from "@angular/common/http";
import { Monoplaza } from "./modelos/monoplaza";
import { Piloto } from "./modelos/piloto";

/*
Los componentes consumen servicios; es decir, puede inyectar un servicio en un componente, dándole acceso al componente a ese servicio.

Una aplicación real buscará héroes de un servidor remoto, que es una operación inherentemente asincrónica.

En este tutorial, HeroService.getHeroes() devolverá un Observable porque eventualmente usará el método angular HttpClient.get para buscar a los héroes y HttpClient.get() devuelve un Observable.

observable
Un productor de múltiples valores, que empuja a suscriptores. Se utiliza para el manejo de eventos asíncronos en todo Angular. Ejecutas un observable suscribiéndote con su método subscribe(), pasando devoluciones de llamada para notificaciones de nuevos valores, errores o finalización.
*/

@Injectable({
  providedIn: "root"
})
export class MonoplazasService {
  private url2 = "https://libref1.herokuapp.com/detMonoplaza";
  private url4 = "https://libref1.herokuapp.com/lisPiloto";
  private url5 = "https://libref1.herokuapp.com/actPiloto";
  private url6 = "https://libref1.herokuapp.com/lisPiloto2";
  private url7 = "https://libref1.herokuapp.com/addPiloto";
  private url8 = "https://libref1.herokuapp.com/lisMonoplaza";
  private url9 = "https://libref1.herokuapp.com/borPiloto";

  constructor(private http: HttpClient) {}

  // getMonoplazaApi() {
  //   return this.http.get(this.url);
  // }

  getMonoplaza2() {
    return this.http.get(this.url8);
  }

  getPiloto() {
    return this.http.get(this.url4);
  }

  getPiloto2(id: number) {
    const url = `${this.url6}/${id}`;
    return this.http.get(url);
  }

  updatePiloto(doc: any) {
    console.log("en update");
    console.log(doc);
    const urlId = `${this.url5}/${doc.id}`;
    return this.http.post(urlId, doc);
  }

  /** DELETE: delete the hero by Id from the server */
  deletePiloto(piloto: Piloto) {
    // const id = typeof hero === "number" ? hero : hero.id;
    const urlId = `${this.url9}/${piloto.id}`;
    return this.http.get(urlId);
  }
  /** POST: add a new hero to the server */
  addPiloto(doc: any) {
    return this.http.post(this.url7, doc);
  }

  getMonoplaza(id: number) {
    const url = `${this.url2}/${id}`;
    return this.http.get(url);
  }
}
