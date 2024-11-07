import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonComponent } from './component/button/button.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CommonModule, NgIf } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ButtonComponent, HeaderComponent, HomeComponent, FooterComponent, RouterLink, PageNotFoundComponent, BlogsComponent, AboutComponent, ContactUsComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  http = inject(HttpClient);
  posts: any[] = [];
  constructor() {
    this.loadPosts();
  }

  loadPosts() {
    this.getPosts().subscribe((data: any) => {
      this.posts = data;
    });
  }

  getPosts() {
    return this.http.get(this.apiUrl);
  }
}
