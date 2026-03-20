import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  ngAfterViewInit() {
    $('[data-widget="treeview"]').Treeview('init');
  }
}
