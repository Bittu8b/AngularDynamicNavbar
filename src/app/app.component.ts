import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NavbarService } from "./services/navbar.service";
import { LoginComponent } from "./login/login.component";
import { UserComponent } from "./user/user.component";
import { AdminComponent } from "./admin/admin.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "AngularDynamicRoutes";
  links: Array<{ text: string; path: string }>;
  isLoggedIn = false;

  constructor(private router: Router, private navbarService: NavbarService) {
    this.router.config.unshift();
  }

  ngOnInit() {
    this.links = this.navbarService.getLinks();
    this.navbarService
      .getLoginStatus()
      .subscribe(status => (this.isLoggedIn = status));
  }

  logout() {
    this.navbarService.updateLoginStatus(false);
    this.router.navigate(["home"]);
  }
}
