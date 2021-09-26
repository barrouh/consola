import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem } from "src/app/shared/interface/menu-item";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  menuItems: MenuItem[] = [
    {
      label: "Projects",
      icon: "work",
      routerLink: "/layout/project",
    },
    {
      label: "Employees",
      icon: "people",
      routerLink: "/layout/employee",
    },
    {
      label: "Notfications",
      icon: "notifications",
      routerLink: "/layout/notification",
    },
    {
      label: "Supervisor Account",
      icon: "supervisor_account",
      routerLink: "/layout/supervisor",
    },
  ];

  constructor(private router: Router) {}

  public isAuthenticated: string = "";
  ngOnInit(): void {
    this.checkAuth();
  }

  redirctToRouterLink(value: any) {
    this.router.navigateByUrl(value.routerLink);
  }

  checkAuth() {
    let temp = sessionStorage.getItem("isAuthenticated");
    if (temp) {
      this.isAuthenticated = temp.toString();
    }
  }

  signOut() {
    window.sessionStorage.clear();
    this.router.navigateByUrl("/login");
  }
}
