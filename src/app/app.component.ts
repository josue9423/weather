import { Component } from '@angular/core';
import  *  as  strings  from  './../assets/data/strings.json';
import  *  as  cities  from  './../assets/data/cities.json';
import { OpenWheaterService } from './services/open-wheater.service'
import { WeatherCardModel} from './models/WeatherCardModel'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  strings: any = (strings as any).default;
  cities: any = (cities as any).default;

  citySelectedString: string = "Elige tu ciudad"
  citySelected: any

  dataOneCall = []

  isLoading = false
  isLoadingModal = false
  isShowCard = false
  isShowCardSm = false
  isShowModal = false
  darkMode = false

  now : Date

  weatherCardModel : WeatherCardModel

  constructor(private openWheaterService : OpenWheaterService) { }  

  onChange(isChecked: boolean) {
    this.darkMode = isChecked
  }

  public selectCity(city:any){
    this.now = new Date()
    this.dataOneCall = []
    this.isLoading=true
    this.isShowCard = false
    this.citySelected = city
    this.citySelectedString = city.city.name
    this.openWheaterService.getDataWheater(this.citySelectedString,city.city.country)
    .subscribe(
      res => {
        this.weatherCardModel = {
          city: this.citySelectedString,
          day: this.now.getDay().toString(),
          date: this.now.getDate().toString(),
          month : this.now.getMonth().toString(),
          temperature: this.convertToCelsius((res as any).main.temp),
          temperatureMax : this.convertToCelsius((res as any).main.temp_max),
          temperatureMin : this.convertToCelsius((res as any).main.temp_min),
          icon: (res as any).weather[0].icon,
          wind: (res as any).wind.speed,
          clouds: (res as any).clouds.all
        }
        this.isLoading = false
        this.isShowCard = true
      },
      err => {
        console.log(err)
        this.isLoading = false
        this.isShowCard = false
      }
    )
  }

  private convertToCelsius(temp:number) : string{
    return (temp - 273.15).toFixed(1)
  }

  public disableModal(){
    this.isShowModal = false
  }

  public executeModalForApi(date:string){
    // date se utilizará para consulta por fecha.
    if(this.isShowCard){
      this.dataOneCall = []
      this.isShowModal = true
      this.isLoadingModal = true
      this.isShowCardSm = false
      this.openWheaterService.getDataOneCall(this.citySelected.city.coord.lat,this.citySelected.city.coord.lon)
      .subscribe(
        res => {
          this.isLoadingModal = false
          this.isShowCardSm = true
          for(let dataDaily of (res as any).daily.splice(0,4)){
            var weather : WeatherCardModel
            weather = {
              city: this.citySelectedString,
              day: "",
              date: dataDaily.dt,
              month : "",
              temperature: this.convertToCelsius(dataDaily.temp.day),
              temperatureMax : this.convertToCelsius(dataDaily.temp.max),
              temperatureMin : this.convertToCelsius(dataDaily.temp.min),
              icon: dataDaily.weather[0].icon,
              wind: dataDaily.wind_speed,
              clouds: dataDaily.clouds
            }
            this.dataOneCall.push(weather)
          }
                
        },
        err => {
          this.isLoadingModal = false
          this.isShowCardSm = false
          console.log(err)
        }      
      )
    }    
  }

}
