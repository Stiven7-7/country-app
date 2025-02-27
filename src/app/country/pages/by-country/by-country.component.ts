import { Component } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { ListComponent } from "../../components/list/list.component";

@Component({
  selector: 'app-by-country',
  imports: [SearchInputComponent, ListComponent],
  templateUrl: './by-country.component.html',
})
export class ByCountryComponent {

  onValue($event: string) {
    console.log($event, 'onValue');
  }
}
