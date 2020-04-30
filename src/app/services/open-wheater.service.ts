import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  *  as  api  from  '../../assets/data/api.json';

@Injectable({
  providedIn: 'root'
})
export class OpenWheaterService {

  api: any = (api as any).default;

  
  urlCurrentWheater: string = '';
  urlDataOneCall: string= '';

  constructor(private httpClient: HttpClient) { 
    this.urlCurrentWheater = `${api.baseURL}${api.getCurrentDataWheare}${api.baseKey}${api.apiKey}${api.baseData}`
    this.urlDataOneCall = `${api.baseURL}${api.getDataOneCall}${api.baseKey}${api.apiKey}`
  }

  getDataWheater(city: string, code: string){ 
    return this.httpClient.get(`${this.urlCurrentWheater}${city},${code}`)
  }

  getDataOneCall(lat: string, lon: string){
    return this.httpClient.get(`${this.urlDataOneCall}${api.baseLat}${lat}${api.baseLon}${lon}`)
  }
}
