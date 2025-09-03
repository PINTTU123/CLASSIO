import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
youtubeUrl = 'https://www.youtube.com/embed/eb9drDRHEzs'; 
teamMembers = [
    { name: 'Mr. Navin Rana', role: 'Lead Architect & Interior Designer', image: 'assets/navinrana.jpg' },
    { name: 'Miss Priyanka', role: 'Interior Designer', image: 'assets/priyanka.jpg' },
    { name: 'Mr. Srikant Rana', role: 'Project Manager', image: 'assets/pinturana.jpg' },
    { name: 'Mr. Jitendra Rana', role: 'Contractor', image: 'assets/jiturana.jpg' }
  ];
}
