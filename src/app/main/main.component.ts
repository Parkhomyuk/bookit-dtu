import { Component, OnInit } from '@angular/core';
import {ThemeService} from "../services/theme.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  selectedTheme:string='light';
  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.themeService.theme.subscribe(newTheme=>this.selectedTheme=newTheme)
  }


}
