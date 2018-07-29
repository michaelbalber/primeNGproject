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

  ngOnInit() {
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

