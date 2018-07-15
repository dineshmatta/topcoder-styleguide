import { Component, OnInit } from '@angular/core';
import { EscapeHtmlService } from '../../shared/escape-html.service';

@Component({
  selector: 'app-inputs-and-dropdown',
  templateUrl: './inputs-and-dropdown.component.html',
  styleUrls: ['./inputs-and-dropdown.component.scss']
})
export class InputsAndDropdownComponent implements OnInit {
  codePreview1 = `
<div class="ac-text-field">
  <input type="text" id="my-text-field" class="mdc-text-field__input" placeholder="Label">
</div>\n
<div class="ac-text-field">
  <input type="text" id="pre-filled" class="mdc-text-field__input" value="Value">
  <label class="mdc-floating-label mdc-floating-label--float-above" for="pre-filled">
    Label
  </label>
</div>\n
<div class="ac-text-field invalid">
  <input type="text" id="pre-filled-e" class="mdc-text-field__input" value="Value">
  <label class="mdc-floating-label mdc-floating-label--float-above" for="pre-filled-e">
    Label
  </label>
</div>
<p class="mdc-text-field-helper-text mdc-text-field-helper-text--validation-msg">This is a error message</p>`;

  codePreview2 = `
  <div class="ac-text-field dropdown">
    <input type="text" class="mdc-text-field__input" placeholder="Label" value="Value">
    <i class="dropdown-icon ac-icon-arrow"></i>
  </div>\n
  <div class="ac-text-field dropdown">
    <input type="text" class="mdc-text-field__input" value="Value">
    <label class="mdc-floating-label mdc-floating-label--float-above" for="pre-filled">Label</label>
    <i class="dropdown-icon ac-icon-arrow"></i>
  </div>\n
  <div class="ac-dropwown">
    <div class="search-line">
      <input class="search-input" placeholder="Search placeholder">
      <i class="search-icon ac-icon-search"></i>
    </div>

    <div class="mdc-list">
      <div class="mdc-list-item">Value #1</div>
      <div class="mdc-list-item active">Value #2</div>
      <div class="mdc-list-item">Value #3</div>
      <div class="mdc-list-item">Value #5</div>
      <div class="mdc-list-item">Value #6</div>
      <div class="mdc-list-item">Value #7</div>
      <div class="mdc-list-item">Value #8</div>
      <div class="mdc-list-item">Value #9</div>
      <div class="mdc-list-item">Value #10</div>
    </div>
  </div>`;

  constructor(private escapeHtml: EscapeHtmlService) {}

  ngOnInit() {
    this.codePreview1 = this.escapeHtml.convert(this.codePreview1);
    this.codePreview2 = this.escapeHtml.convert(this.codePreview2);
  }
}
