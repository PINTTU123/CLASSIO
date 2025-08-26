import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
youtubeUrl = 'https://www.youtube.com/embed/eb9drDRHEzs'; 
teamMembers = [
    { name: 'John Doe', role: 'Lead Architect', image: 'assets/team1.jpg' },
    { name: 'Jane Smith', role: 'Interior Designer', image: 'assets/team2.jpg' },
    { name: 'Alex Lee', role: 'Project Manager', image: 'assets/team3.jpg' },
    { name: 'Sophia Davis', role: 'Creative Director', image: 'assets/team4.jpg' }
  ];
}
