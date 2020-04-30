import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { OpenWheaterService } from '../../services/open-wheater.service'

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  @Input("darkMode")
  darkMode : boolean

  @Output()
  executeModal = new EventEmitter<string>();

  UNO : number = 1;

  /* CONSTANTES PARA EL CALENDARIO */
  months = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SETIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"]
  days = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"]
  dates = []
  
  dateSelected: Date
  yearSelected: String
  monthSelected: String
  
  constructor(private openWheaterService : OpenWheaterService) { }  
  
  ngOnInit(): void {
    this.dateSelected = new Date()
    this.setCalendarValues()
  }

  private setCalendarValues() : void {
    this.yearSelected = this.dateSelected.getFullYear().toString()
    this.monthSelected = this.months[this.dateSelected.getMonth()]
    this.getDates()
  }

  private daysInMonth(month:number, year:number) : number {
    return new Date(year || new Date().getFullYear(), month + 1, 0).getDate();
  }

  private getDates() : void {
    var dateAux = this.dateSelected 
    dateAux.setDate(this.UNO)
    var getFirstDateOfMonth: number = dateAux.getDay()
    var numberDaysPerMonth: number = this.daysInMonth(this.dateSelected.getMonth(), this.dateSelected.getFullYear())
    for(var i = this.UNO; i <= (getFirstDateOfMonth + numberDaysPerMonth) ; i++){
      if(i <= getFirstDateOfMonth){
        this.dates.push("")
      }
      else{
        this.dates.push(i - getFirstDateOfMonth)
      }
    }
  }

  public decreaseMonth(){
    this.dates = [];
    this.dateSelected.setMonth(this.dateSelected.getMonth() - this.UNO)
    this.setCalendarValues()
  }

  public increaseMonth(){
    this.dates = [];
    this.dateSelected.setMonth(this.dateSelected.getMonth() + this.UNO)
    this.setCalendarValues()
  }

  public onClickDay(date:number){
    var now = new Date()
    if(date == now.getDate() && now.getFullYear() == this.dateSelected.getFullYear() && now.getMonth() == this.dateSelected.getMonth()){
      this.executeModal.emit(date.toString())
    }
  }
}
