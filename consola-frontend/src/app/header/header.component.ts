import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../shared/interface/menu-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuItems: MenuItem[] = [
    {
      label: 'Projects',
      icon: 'work',
      routerLink: '/layout/project',
    },
    {
      label: 'Employees',
      icon: 'people',
      routerLink: '/layout/employee',
    },
    {
      label: 'Notfications',
      icon: 'notifications',
      routerLink: '/layout/notification',
    },
    {
      label: 'Supervisor Account',
      icon: 'supervisor_account',
      routerLink: '/layout/supervisor',
    },
    {
      label: 'Contact Support',
      icon: 'contact_support',
      routerLink: '/layout/contact',
    },
    {
      label: 'Sign Out',
      icon: 'logout',
      routerLink: '/login',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirctToRouterLink(value: any) {
    this.router.navigateByUrl(value.routerLink);
  }
}
