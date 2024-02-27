import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-staffing-solutions',
  templateUrl: './staffing-solutions.component.html',
  styleUrls: ['./staffing-solutions.component.css']
})
export class StaffingSolutionsComponent {
  appURL = environment.app_url;
}
