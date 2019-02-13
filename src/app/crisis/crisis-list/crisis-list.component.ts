import { Component, OnInit } from '@angular/core';
import { CrisisService } from '../crisis.service';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.scss']
})
export class CrisisListComponent implements OnInit {

  private crisis: any[] = [];

  constructor(
    private crisisService: CrisisService
  ) { }

  ngOnInit() {
    this.crisis = this.crisisService.getCrisis();
  }
}
