import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { UsersComponent } from "./users/users.component";
import { AboutUsComponent } from "./shared/about-us/about-us.component";
import { ForgotPassComponent } from "./auth/forgot-pass/forgot-pass.component";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
    // { path: 'auth', component: AuthComponent },
    // { path: 'forgotpass', component: ForgotPassComponent },


    { path: 'aboutus', component: AboutUsComponent },

    {
        path: 'user',
        canLoad: [AuthGuard],
        canActivate: [AuthGuard],
        loadChildren: () => {
            return import('./users/users.module').then(m => m.UsersModule);
        }
    },
    {
        path: 'items', loadChildren: () => {
            return import('./items/items.module').then(m => m.ItemsModule);
        }
    },
    {
        path: 'shop', loadChildren: () => {
            return import('./shop/shop.module').then(m => m.ShopModule);
        }
    },
    {
        path: 'orders', loadChildren: () => {
            return import('./orders/orders.module').then(m => m.OrdersModule);
        }
    },

    {
        path: 'auth', loadChildren: () => {
            return import('./auth/auth.module').then(m => m.AuthModule);
        }
    },
    { path: '', redirectTo: '/auth', pathMatch: 'full' },
    { path: '**', redirectTo: '/user', pathMatch: 'full' },
    
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}