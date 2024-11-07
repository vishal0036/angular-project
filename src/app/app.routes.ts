import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
    {
        path:'header', component:HeaderComponent
    },
    {
        path:'', component:HomeComponent
    },
    {
        path:'blogs', component:BlogsComponent
    },
    {
        path:'about', component:AboutComponent
    },
    {
        path:'contact-us', component:ContactUsComponent
    },
    {
        path:'**', component:PageNotFoundComponent
    }
];
