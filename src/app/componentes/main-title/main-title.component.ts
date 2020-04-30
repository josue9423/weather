import { Component, OnInit } from '@angular/core';
import  *  as  strings  from  '../../../assets/data/strings.json';

@Component({
  selector: 'app-main-title',
  templateUrl: './main-title.component.html',
  styleUrls: ['./main-title.component.css']
})
export class MainTitleComponent implements OnInit {

  strings: any = (strings as any).default;

  constructor() { }

  ngOnInit(): void {
  }

}
