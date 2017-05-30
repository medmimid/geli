import {Component, OnInit} from '@angular/core';
import {Dependency} from './dependency.model';
import {DependenciesList} from './dependencies';
import {AboutDataService} from '../../shared/services/data.service';

@Component({
  selector: 'app-licenses',
  templateUrl: './licenses.component.html',
  styleUrls: ['./licenses.component.scss']
})
export class LicensesComponent implements OnInit {

  allFrontendDependencies: Dependency[];
  allApiDependencies: Dependency[];

  constructor(private service: AboutDataService) {
  }

  ngOnInit() {
    this.getAllFrontendDependencies();
    this.getAllApiDependencies();
  }

  getAllFrontendDependencies() {
    this.allFrontendDependencies = DependenciesList.getDependencies()
      .sort(Dependency.compare);
  }

  getAllApiDependencies() {
    this.service.getApiDependencies()
      .then((dependencies: any) => {
        this.allApiDependencies = dependencies.sort(Dependency.compare);
      });
  }
}
