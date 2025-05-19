import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../components/admin/sidebar/sidebar.component';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, SidebarComponent],
  standalone: true,
  template: `
    <app-sidebar></app-sidebar>
    <router-outlet></router-outlet>
  `
})
export class AdminLayoutComponent {

}
