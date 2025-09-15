import { Component } from '@angular/core';
interface Job {
  id: number;
  title: string;              // e.g., "Paint my office walls"
  serviceType: string;        // e.g., Carpenter / Plumber / Electrician / Painter
  description: string;        // Job details
  clientName: string;         // Who posted the job
  ingredients?: string[];     // Materials or ingredients required
  location: string;           // City / area
  completionTime: string;     // e.g., "2 days"
  budget: number;             // Estimated budget
  highestBid: number;         // Current highest bid
  userBid?: number | null;    // User input bid
  postedDate: Date;           // When job was posted
}

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent {
   selectedFilter: string = 'All';
 jobs: Job[] = [
  {
    id: 1,
    title: 'Paint Office Walls',
    serviceType: 'Painter',
    description: 'Painting 3 rooms with high-quality wall paint.',
    clientName: 'Mr. Sharma',
    ingredients: ['Wall paint', 'Brushes', 'Rollers', 'Ladder'],
    location: 'Mumbai',
    completionTime: '2 days',
    budget: 5000,
    highestBid: 4000,
    postedDate: new Date('2025-09-15')
  },
  {
    id: 2,
    title: 'Install Electrical Wiring',
    serviceType: 'Electrician',
    description: 'Wiring for 3 rooms with proper switches and sockets.',
    clientName: 'Mrs. Gupta',
    ingredients: ['Wires', 'Switches', 'Sockets', 'Conduits'],
    location: 'Delhi',
    completionTime: '1 day',
    budget: 3500,
    highestBid: 3000,
    postedDate: new Date('2025-09-14')
  },
  {
    id: 3,
    title: 'Office Furniture Assembly',
    serviceType: 'Carpenter',
    description: 'Assemble 5 office tables and 10 chairs.',
    clientName: 'ABC Corp',
    ingredients: ['Tables', 'Chairs', 'Screws', 'Tools'],
    location: 'Bangalore',
    completionTime: '3 days',
    budget: 8000,
    highestBid: 7500,
    postedDate: new Date('2025-09-13')
  }
];


  placeBid(job: Job) {
    if (!job.userBid || job.userBid <= job.highestBid) {
      alert('Your bid must be higher than the current highest bid.');
      return;
    }
    job.highestBid = job.userBid;
    alert('Bid placed successfully!');
    job.userBid = null;
  }
    get filteredJobs(): Job[] {
    if (this.selectedFilter === 'All') {
      return this.jobs;
    }
    return this.jobs.filter(job => job.serviceType === this.selectedFilter);
  }

  setFilter(filter: string) {
    this.selectedFilter = filter;
  }
}
