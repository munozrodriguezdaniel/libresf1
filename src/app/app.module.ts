import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HighchartsChartModule } from "highcharts-angular";

import { AppComponent } from "./app.component";
import { MonoplazaComponent } from "./monoplaza/monoplaza.component";
import { MonoplazaDetailComponent } from "./monoplaza-detail/monoplaza-detail.component";
import { MonoplazasService } from "./monoplaza.service";
import { MessageService } from "./message.service";
import { AppRoutingModule } from "./app-routing.module";
import { PilotoComponent } from "./piloto/piloto.component";
import { PilotosDetallesComponent } from "./pilotos-detalles/pilotos-detalles.component";
import { GPorcentajesComponent } from "./g-porcentajes/g-porcentajes.component";
import { GStintComponent } from "./g-stint/g-stint.component";
import { InformacionComponent } from './informacion/informacion.component';

import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HighchartsChartModule
  ],
  declarations: [
    AppComponent,
    MonoplazaComponent,
    MonoplazaDetailComponent,
    PilotoComponent,
    PilotosDetallesComponent,
    GPorcentajesComponent,
    GStintComponent,
    InformacionComponent
  ],
  bootstrap: [AppComponent],
  providers: [MonoplazasService, MessageService, {provide:
    APP_BASE_HREF, useValue: '/informacion'}]
})
export class AppModule {}
