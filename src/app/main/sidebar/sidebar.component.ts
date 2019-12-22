import { Component, OnInit } from '@angular/core';
import {ThemeService} from "../../services/theme.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  currentHeades:any[] = [];
  headers:any[] = [
    {id: 0, name: 'home', active: false, icon: 'home', children: []},
    {
      id: 1,
      name: 'equipment',
      active: false,
      icon: 'date_range',
      children: ['Calendar', 'Time Line', 'Reservation History', 'Usage History', 'User Training']
    },
    {id: 2, name: 'event and alert', active: false, icon: 'messages', children: []},
    {
      id: 3,
      name: 'loan desk',
      active: false,
      icon: 'flip',
      children: ['Loan Desk', 'Assign User ID Card to user', 'Loanable Equipment List', 'Loan Desk settings']
    },
    {
      id: 4,
      name: 'request service',
      active: false,
      icon: 'flash_on',
      children: ['Sample Requests', 'Requests Lines Management', 'Requests Lines Management Configuration']
    },
    {id: 5, name: 'other service', active: false, icon: 'format_list_bulleted', children: []},
    {id: 6, name: 'tender', active: false, icon: 'credit_card', children: []},
    {id: 7, name: 'all assets', active: false, icon: 'gps_fixed', children: ['Physical Inventory Update']},
    {id: 8, name: 'projects', active: false, icon: 'flag', children: []},
    {id: 9, name: 'reports', active: false, icon: 'report', children: ['Audit', 'Reports generator']},
    {
      id: 10,
      name: 'messages',
      active: false,
      icon: 'volume_down',
      children: ['Send Email to Users', 'Calendar Messages', 'Dashboard Announcement']
    },
    {id: 11, name: 'documents', active: false, icon: 'library_books', children: []},
    {id: 12, name: 'admin panel', active: false, icon: 'settings_applications', children: []},
  ];
  headersAdmin:any[] = [
    {id: 13, name: 'home', active: false, icon: 'home', children: []},
    {
      id: 14,
      name: 'equipment',
      active: false,
      icon: 'date_range',
      children: ['Calendar', 'Time Line', 'Reservation History', 'Usage History', 'User Training']
    },

    {id: 15, name: 'other service', active: false, icon: 'format_list_bulleted', children: []},
    {id: 16, name: 'sample type', active: false, icon: 'flash_on', children: []},
    {id: 17, name: 'service group', active: false, icon: 'clear_all', children: []},
    {id: 18, name: 'incidence', active: false, icon: 'messages', children: []},
    {id: 19, name: 'users', active: false, icon: 'person', children: []},
    {id: 20, name: 'billing managment', active: false, icon: 'local_atm', children: []},
    {id: 21, name: 'supplies', active: false, icon: 'build', children: []},
    {id: 22, name: 'expenses', active: false, icon: 'monetization_on', children: []},
    {id: 23, name: 'reports', active: false, icon: 'report', children: ['Audit', 'Reports generator']},
    {id: 24, name: 'settings', active: false, icon: 'language', children: []}
  ];
  currentItem:any = {};
  selectedTheme:string=null;
  constructor(private themeService: ThemeService) {
  }

  ngOnInit() {
    this.currentHeades = this.headers;
  }



  onSideBarClick() {
  }

  clickTab(item) {
    this.currentItem = item;
    if (item.name == 'home') {

      this.currentHeades = this.headers;

      for (let i = 0; i < this.currentHeades.length; i++) {
        this.currentHeades[i].active = false;
      }
    }
    if (item.name == 'admin panel') {

      this.currentHeades = this.headersAdmin;

      for (let i = 0; i < this.currentHeades.length; i++) {
        this.currentHeades[i].active = false;
      }
    }
    if (item.name != 0 || item.name != 'admin panel') {
      for (let i = 0; i < this.currentHeades.length; i++) {
        if (item.id == this.currentHeades[i].id) {
          if (item.active == false) {
            this.currentHeades[i].active = true;

          }
          else {
            this.currentHeades[i].active = false;
          }
        } else {
          this.currentHeades[i].active = false;
        }

      }
    }

  }
}
