import { Component } from '@angular/core';
import { Icrick } from './shared/model/cricketer.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipe';

  info : string = ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi soluta, saepe vero ratione minima iure quos culpa aperiam quis id porro tempore magnam. Repudiandae reiciendis, perferendis at eum voluptatem obcaecati.';

  searchVal = '';
  searchField : string = 'name';

  cricketers : Array<Icrick> = [
  { name: "Virat Kohli", country: "India", role: "Batsman" },
  { name: "Rohit Sharma", country: "India", role: "Batsman" },
  { name: "MS Dhoni", country: "India", role: "Wicketkeeper" },
  { name: "Sachin Tendulkar", country: "India", role: "Batsman" },
  { name: "Jasprit Bumrah", country: "India", role: "Bowler" },
  { name: "AB de Villiers", country: "South Africa", role: "Batsman" },
  { name: "Chris Gayle", country: "West Indies", role: "Batsman" },
  { name: "Ben Stokes", country: "England", role: "All-rounder" },
  { name: "Kane Williamson", country: "New Zealand", role: "Batsman" },
  { name: "Pat Cummins", country: "Australia", role: "Bowler" }
];

}
