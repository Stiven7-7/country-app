import { Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent {

  placeholder = input<string>('Buscar...');
  value = output<string>();

  onSearch(value: string) {
    this.value.emit(value);
  }
}
