import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items: MenuItem[];
  itemsTab: MenuItem[];
    
  activeItem: MenuItem;
  options: any;
    
  overlays: any[];
  data: any;

  constructor() {
      this.data = {
          labels: ['A','B','C'],
          datasets: [
              {
                  data: [300, 50, 100],
                  backgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56"
                  ],
                  hoverBackgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56"
                  ]
              }]    
          };
  }
  ngOnInit() {
    this.options = {
        center: {lat: 36.890257, lng: 30.707417},
        zoom: 12
    };
      this.itemsTab = [
        {label: 'Stats', icon: 'fa fa-fw fa-bar-chart'},
        {label: 'Calendar', icon: 'fa fa-fw fa-calendar'},
        {label: 'Documentation', icon: 'fa fa-fw fa-book'},
        {label: 'Support', icon: 'fa fa-fw fa-support'},
        {label: 'Social', icon: 'fa fa-fw fa-twitter'}
      ];
      this.activeItem = this.itemsTab[0];

      this.items = [
          {
              label: 'File',
              items: [{
                      label: 'New',
                      icon: 'fa fa-fw fa-plus',
                      items: [
                          {label: 'Project'},
                          {label: 'Other'},
                      ]
                  },
                  {label: 'Open'},
                  {label: 'Quit'}
              ]
          },
          {
              label: 'Edit',
              icon: 'fa fa-fw fa-edit',
              items: [
                  {label: 'Undo', icon: 'fa fa-fw fa-mail-forward'},
                  {label: 'Redo', icon: 'fa fa-fw fa-mail-reply'}
              ]
          }
      ];
  }
  
}

