import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jobCategory'
})
export class JobCategoryPipe implements PipeTransform {

   transform(jobs: any[], category: string): any[] {
    if (!jobs) return [];
    if (!category || category === 'All') return jobs;
    return jobs.filter(job => job.serviceType === category);
  }

}
