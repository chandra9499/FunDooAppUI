import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() isSidenavCollapsed = false;
  activeItem: string = 'notes';

  setActive(item: string) {
    this.activeItem = item;
  }
}
