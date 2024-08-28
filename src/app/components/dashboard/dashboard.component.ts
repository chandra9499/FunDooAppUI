import { Routes, Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  {

  constructor(
    private authService:AuthService,
    private router:Router
  ){}
  @Input()
  activeItem: string = 'notes';
  isSidenavCollapsed = false;
  hasClicked = false;
  
  isListView:boolean = true;
  
  sidenavitems = [
    { name: 'notes', label: 'Notes', icon: 'lightbulb_outline', link: '/notes',click:'allnotes()' },
    { name: 'reminders', label: 'Reminders', icon: 'notifications_none', link: '/reminders',click:'reminders()' },
    { name: 'edit', label: 'Edit labels', icon: 'edit', link: '/edit',click:'edit()' },
    { name: 'archive', label: 'Archive', icon: 'archive', link: '/archive',click:'archive()' },
    { name: 'trash', label: 'Trash', icon: 'delete', link: '/trash',click:'trash()' }
  ];
  userInitial: string= 'John Doe';

  ngOnInit() {
    this.userInitial = this.userInitial.charAt(0).toUpperCase();
  }
  setActive(item: string) {
    this.activeItem = item;    
  }
  setListOrGride() {
    this.isListView = !this.isListView;
  }
  toggleSidenav() {
    if (this.hasClicked) {
      this.isSidenavCollapsed = !this.isSidenavCollapsed;
    } else {
      this.hasClicked = true;
    }
  }
  onLogout() {
    this.authService.logout();
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
