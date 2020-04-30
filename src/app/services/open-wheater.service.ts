import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import  *  as  api  from  '../../assets/data/api.json';

@Injectable({
  providedIn: 'root'
})
export class OpenWheaterService {

  api: any = (api as any).default;

  
  urlCurrentWheater: string = '';
  urlDataOneCall: string= '';

  constructor(private httpClient: HttpClient) { 
    //this.urlCurrentWheater = `${api.baseURL}${api.getCurrentDataWheare}${api.baseKey}${api.apiKey}${api.baseData}`
    //this.urlDataOneCall = `${api.baseURL}${api.getDataOneCall}${api.baseKey}${api.apiKey}`
  }

  getDataWheater(city: string, code: string){     
    const headers = new HttpHeaders().set("origin",  "*");
    return this.httpClient.get("https://api.openweathermap.org/data/2.5/weather?&appid=b9a416830e379646ab608c490ad476f2&q=Brasilia,BR",{ headers })
  }

  getDataOneCall(lat: string, lon: string){
    const headers = new HttpHeaders().set("origin", "*");
    return this.httpClient.get("https://api.openweathermap.org/data/2.5/onecall?lat=60.99&lon=30.9&appid=b9a416830e379646ab608c490ad476f2",{ headers })
  }
}
  