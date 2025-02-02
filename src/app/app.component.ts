import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './p-shop/share/services/auth.service';
import { AuthGuard } from './p-shop/share/services/AuthGuard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'DALTUD3-Angular';

  constructor(
    private router: Router,
    private auth: AuthService,
    private authFuard: AuthGuard
  ) {}

  ngOnInit(): void {}

  // Hàm kiểm tra xem trang có phải là trang admin hay không
  isAdminPage(): boolean {
    let isRouterAdmin = this.router.url.includes('/admin');
    let isRouterRegister = this.router.url.includes('/register');
    let isRouterLogin = this.router.url.includes('/admin');

    if (isRouterAdmin || isRouterRegister || isRouterLogin) {
      return true;
    }
    return false;
  }

  isAuth(): boolean {
    if (
      this.router.url.includes('/login') ||
      this.router.url.includes('/register')
    ) {
      return true;
    }

    return false;
  }
}
