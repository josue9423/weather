import { Component, OnInit, Input } from '@angular/core';
import { WeatherCardModel } from '../../models/WeatherCardModel'

@Component({
  selector: 'app-weather-card-lg',
  templateUrl: './weather-card-lg.component.html',
  styleUrls: ['./weather-card-lg.component.css']
})
export class WeatherCardLgComponent implements OnInit {

  @Input("darkMode")
  darkMode : boolean

  @Input("weatherCardModel")
  weatherCardModel : WeatherCardModel

  months = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SETIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"]
  days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"]

  urlIcon : string;

  constructor() {  }

  ngOnInit(): void {
    this.urlIcon = `http://openweathermap.org/img/wn/${this.weatherCardModel.icon}@2x.png`
  }

}
