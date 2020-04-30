import { Component, OnInit } from '@angular/core';
import  *  as  strings  from  '../../../assets/data/strings.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  strings: any = (strings as any).default;

  constructor() { }

  ngOnInit(): void {
  }

}
