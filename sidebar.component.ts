import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  dashboardData:any;
  data:any;


  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.getALLData();
}
   getALLData() {

    this.apiService
      .getDetail()
      .subscribe((response: any) => {
        this.data = response.dashboardData.lastestResults;

      });
  }
  getPercentage(score: number): string {
    return `${score}%`;
  }

}
