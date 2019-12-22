import { Component, ViewChildren, QueryList, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {CdkDropList, CdkDragDrop, CdkDragEnter, moveItemInArray} from '@angular/cdk/drag-drop';





export interface Tile {
  id?: number;
  color: string;
  cols: number;
  rows: number;
  text: string;
  content?: string;
}
const COLORS = [
  '#ecf3f7',

]

function getColor() {
  return COLORS[Math.floor(Math.random() * 32)];
}




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  entered($event: CdkDragEnter) {

    //noinspection TypeScriptUnresolvedVariable,TypeScriptValidateTypes
    moveItemInArray(this.cards, $event.item.data, $event.container.data);
  }
  entered2($event: CdkDragEnter) {

    //noinspection TypeScriptUnresolvedVariable,TypeScriptValidateTypes
    moveItemInArray(this.cards, $event.item.data, $event.container.data);
  }

  @ViewChildren(CdkDropList) dropsQuery: QueryList<CdkDropList>;

  drops: CdkDropList[];

  ngAfterViewInit() {
    this.dropsQuery.changes.subscribe(() => {
      this.drops = this.dropsQuery.toArray()
    })
    Promise.resolve().then(() => {
      this.drops = this.dropsQuery.toArray();
      console.log(this.drops);
    })
  }


  cards = [
    { id:1, title: 'Browse By Business Unit / Lab', cols: 2, rows: 1, color: '#ecf3f7', content:'tree',status:false},

    {id:2,  title: 'Currently Active Usages', cols: 2, rows: 1, color: '#ecf3f7', content:'table' ,status:false},

    { id:3, title: 'Awaiting Requests/Steps', cols: 2, rows: 1, color: '#ecf3f7', content:'',status:false },

    { id:4, title: 'Credits And Balance', cols: 2, rows: 1, color: '#ecf3f7', content:'',status:false },

    { id:5, title: 'My Upcoming Schedule', cols: 2, rows: 1, color: '#ecf3f7', content:'',status:false },
    { id:6, title: 'Instrument Incidents/Events', cols: 2, rows: 1, color: '#ecf3f7' , content:'',status:false},

    { id:7, title: 'Awaiting Requests/Steps', cols: 2, rows: 1, color: '#ecf3f7', content:'' ,status:false},
    { id:8, title: 'Ongoing Requests', cols: 2, rows: 1, color: '#ecf3f7' , content:'',status:false},
    { id:9, title: 'Request Charts', cols: 2, rows: 1, color: '#ecf3f7', content:'',status:false },
    { id:10, title: 'Schedule Awaiting Approval', cols: 2, rows: 1, color: '#ecf3f7', content:'',status:false },
    {id:11,  title: 'Awaiting Requests/Steps', cols: 2, rows: 1, color: '#ecf3f7' , content:'',status:false},
    { id:12, title: 'Pending Service Request Projects', cols: 2, rows: 1, color: '#ecf3f7' , content:'',status:false},

  ];
  item: any={id:-1};
  close(id: number){
    //this.cards=this.cards.filter(item=>item.id!=id);
    for(let i=0;i<this.cards.length;i++){
      if(this.cards[i].id==id){

        this.cards[i].rows=0;
        this.cards[i].cols=0;
      }
    }
  }
  zoomOut(id:number){
    for(let i=0;i<this.cards.length;i++){
      this.cards[i].cols=2;
      this.cards[i].rows=1;
    }
    let temp=null;
    for(let i=0;i<this.cards.length;i++){
      if(this.cards[i].id==id  ){
        if(i==0){
         this.cards[i].rows=3;
         this.cards[i].cols=6;
         this.cards[i].status=true;
        }
        temp=this.cards[0];
        this.item=Object.assign({},this.cards[i]);
        this.item.rows=3;
        this.item.cols=6;
        this.cards[0]=this.item;
        this.cards[i]=temp;
        this.cards[i].status=true;
        console.log('one')
      }

    }
  }
  zoomIn(id: number){
    this.item={id:-1};
    for(let i=0;i<this.cards.length;i++){
      if(this.cards[i].id==id){
        this.cards[i].status=false;
      }
      this.cards[i].cols=2;
      this.cards[i].rows=1;
    }
  }

}
