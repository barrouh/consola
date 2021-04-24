import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../shared/interface/menu-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuItems: MenuItem[] = [
    {
      label: 'Sign Out',
      icon: 'logout',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
