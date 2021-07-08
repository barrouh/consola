import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem } from "src/app/shared/interface/menu-item";
import { Employee } from "src/app/shared/model/employee";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {

  public employeeObj: Employee = new Employee();

  menuItems: MenuItem[] = [];
  
  menuItemsAdmin: MenuItem[] = [
    {
      label: "My Calendar",
      icon: "work",
      routerLink: "/layout/landing-page",
    },
    {
      label: "Employees",
      icon: "people",
      routerLink: "/layout/employee",
    },
    {
      label: "Roles",
      icon: "work",
      routerLink: "/layout/role",
    },
    {
      label: "Projects",
      icon: "work",
      routerLink: "/layout/project",
    },
    {
      label: "Status",
      icon: "work",
      routerLink: "/layout/status",
    },
    {
      label: "Vacation",
      icon: "work",
      routerLink: "/layout/vacation",
    },
    {
      label: "Vacation Status",
      icon: "work",
      routerLink: "/layout/vacation-status",
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

  menuItemsEmp: MenuItem[] = [
    {
      label: "My Calendar",
      icon: "work",
      routerLink: "/layout/landing-page",
    },
    {
      label: "Vacation",
      icon: "work",
      routerLink: "/layout/vacation",
    },
    {
      label: "Notfications",
      icon: "notifications",
      routerLink: "/layout/notification",
    }
  ];

  constructor(private router: Router) {}

  public isAuthenticated: string = "";
  public fullName: string = "";
  public role: string = "Role";
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
    temp = sessionStorage.getItem("userDetails");

    if(temp){
      this.employeeObj = JSON.parse(temp) as Employee;
      this.fullName = this.employeeObj.fullName;
      if(this.role == this.employeeObj.role.name){
        this.menuItems = this.menuItemsAdmin;
      }else{
        this.menuItems = this.menuItemsEmp;
      }
    }
  }

  signOut() {
    window.sessionStorage.clear();
    this.router.navigateByUrl("/login");
  }
}