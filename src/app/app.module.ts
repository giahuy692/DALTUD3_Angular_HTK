import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './p-shop/pages/homepage/homepage.component';
import { AboutComponent } from './p-shop/pages/about/about.component';
import { ShopComponent } from './p-shop/pages/shop/shop.component';
import { ShopSingleComponent } from './p-shop/pages/shop-single/shop-single.component';
import { NewsComponent } from './p-shop/pages/news/news.component';
import { PortfolioSingleComponent } from './p-shop/pages/portfolio-single/portfolio-single.component';
import { ManComponent } from './p-shop/pages/man/man.component';
import { ContactComponent } from './p-shop/pages/contact/contact.component';
import { ErrorComponent } from './p-shop/pages/error/error.component';
import { PasswordProtectComponent } from './p-shop/pages/password-protect/password-protect.component';
import { HeaderComponent } from './p-shop/share/components/header/header.component';
import { FooterComponent } from './p-shop/share/components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsModule } from '@progress/kendo-angular-icons';
import { LabelModule } from '@progress/kendo-angular-label';
import { ShopApiService } from './p-shop/share/services/shop-api.service';
import { ProductComponent } from './p-shop/share/components/product/product.component';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';

import { NotificationModule } from '@progress/kendo-angular-notification'; // cái lỗi này thì npm i
import { TooltipsModule } from '@progress/kendo-angular-tooltip'; // cái lỗi này thì npm i
import { GroupComponent } from './p-shop/share/components/group/group.component';
import { BlogGroupComponent } from './p-shop/share/components/blog-group/blog-group.component';
import { DatePipe } from '@angular/common';
import { NgModel } from '@angular/forms';
import { DateFormatPipePipe } from './p-shop/share/pipe/date-format-pipe.pipe';
import { LoginComponent } from './p-shop/pages/login/login.component';
import { RegisterComponent } from './p-shop/pages/register/register.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { CartComponent } from './p-shop/pages/cart/cart.component';
import { WomenComponent } from './p-shop/pages/women/women.component';
import { CoupleComponent } from './p-shop/pages/couple/couple.component';
import { CheckoutComponent } from './p-shop/pages/checkout/checkout.component';
import { GridBlockComponent } from './p-shop/share/components/grid-block/grid-block.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ManagerUserComponent } from './p-shop/pages/manager-user/manager-user.component';
import { ManagerProductComponent } from './p-shop/pages/manager-product/manager-product.component';
import { ManagerCartComponent } from './p-shop/pages/manager-cart/manager-cart.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { ProductListComponent } from './p-shop/pages/product-list/product-list.component';
import { LoadingDirective } from './p-shop/share/drirective/loading.directive';
import { LoadingComponent } from './p-shop/share/components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    ShopComponent,
    ShopSingleComponent,
    NewsComponent,
    PortfolioSingleComponent,
    ManComponent,
    ContactComponent,
    ErrorComponent,
    PasswordProtectComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    GroupComponent,
    BlogGroupComponent,
    DateFormatPipePipe,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    ManagerUserComponent,
    ManagerProductComponent,
    ManagerCartComponent,
    WomenComponent,
    CoupleComponent,
    CheckoutComponent,
    GridBlockComponent,
    ProductListComponent,
    LoadingDirective,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    BrowserAnimationsModule,
    InputsModule,
    LayoutModule,
    FontAwesomeModule,
    IconsModule,
    LabelModule,
    HttpClientModule,
    ScrollViewModule,
    NotificationModule,
    TooltipsModule,
    DatePipe,
    FormsModule,
    ReactiveFormsModule,
    GridModule,
    DropDownsModule,
    DialogsModule,
  ],
  providers: [ShopApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
