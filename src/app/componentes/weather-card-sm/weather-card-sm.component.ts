import { Component, OnInit, Input} from '@angular/core';
import { WeatherCardModel } from '../../models/WeatherCardModel'

@Component({
  selector: 'app-weather-card-sm',
  templateUrl: './weather-card-sm.component.html',
  styleUrls: ['./weather-card-sm.component.css']
})
export class WeatherCardSmComponent implements OnInit {

  @Input("darkMode")
  darkMode : boolean

  @Input("weatherCardModel")
  weatherCardModel : WeatherCardModel

  days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"]

  urlIcon : string;

  constructor() { }

  ngOnInit(): void {
    this.urlIcon = `http://openweathermap.org/img/wn/${this.weatherCardModel.icon}@2x.png`
  }

  public timeConverter(UNIX_timestamp : number){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    return date + ' ' + month + ' ' + year ;
  }

}
