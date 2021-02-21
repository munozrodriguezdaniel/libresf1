import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MonoplazaComponent } from "./monoplaza/monoplaza.component";
import { MonoplazaDetailComponent } from "./monoplaza-detail/monoplaza-detail.component";
import { PilotoComponent } from "./piloto/piloto.component";
import { PilotosDetallesComponent } from "./pilotos-detalles/pilotos-detalles.component";
import { GPorcentajesComponent } from "./g-porcentajes/g-porcentajes.component";
import { GStintComponent } from "./g-stint/g-stint.component";
import { InformacionComponent } from "./informacion/informacion.component";

const routes: Routes = [
  { path: "informacion", component: InformacionComponent },
  { path: "monoplaza", component: MonoplazaComponent },
  { path: "detail/:id", component: MonoplazaDetailComponent },
  { path: "piloto", component: PilotoComponent },
  { path: "detail2/:id", component: PilotosDetallesComponent },
  { path: "gPorcentajes", component: GPorcentajesComponent },
  { path: "gStint", component: GStintComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
