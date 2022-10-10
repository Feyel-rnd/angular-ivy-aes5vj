import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent implements OnInit {
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  app = environment.application
  constructor() { }

  ngOnInit() {
  }

}