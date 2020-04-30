import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainTitleComponent } from './componentes/main-title/main-title.component';
import { CalendarComponent } from './componentes/calendar/calendar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { WeatherCardLgComponent } from './componentes/weather-card-lg/weather-card-lg.component';
import { WeatherCardSmComponent } from './componentes/weather-card-sm/weather-card-sm.component';

@NgModule({
  declarations: [
    AppComponent,
    MainTitleComponent,
    CalendarComponent,
    FooterComponent,
    WeatherCardLgComponent,
    WeatherCardSmComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
