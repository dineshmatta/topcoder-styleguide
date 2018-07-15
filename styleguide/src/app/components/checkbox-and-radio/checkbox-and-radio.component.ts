import { Component, OnInit } from '@angular/core';
import { EscapeHtmlService } from '../../shared/escape-html.service';

@Component({
  selector: 'app-checkbox-and-radio',
  templateUrl: './checkbox-and-radio.component.html',
  styleUrls: ['./checkbox-and-radio.component.scss']
})
export class CheckboxAndRadioComponent implements OnInit {
  codePreview1 = `<div class="ac-form-field">
  <div class="ac-checkbox">
    <input type="checkbox" class="mdc-checkbox__native-control" id="checkbox-01" />
    <div class="mdc-checkbox__background">
      <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
        <path class="mdc-checkbox__checkmark-path" fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
      </svg>
      <div class="mdc-checkbox__mixedmark"></div>
    </div>
  </div>
  <label for="checkbox-01">Inactive</label>
</div>\n
<div class="ac-form-field">
  <div class="ac-checkbox">
    <input type="checkbox" class="mdc-checkbox__native-control" id="checkbox-02" checked/>
    <div class="mdc-checkbox__background">
      <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
        <path class="mdc-checkbox__checkmark-path" fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
      </svg>
      <div class="mdc-checkbox__mixedmark"></div>
    </div>
  </div>
  <label for="checkbox-02">Active</label>
</div>`;

  codePreview2 = `<div class="ac-form-field">
  <div class="ac-radio">
    <input class="mdc-radio__native-control" type="radio" id="radio-02" name="radios">
    <div class="mdc-radio__background">
      <div class="mdc-radio__outer-circle"></div>
      <div class="mdc-radio__inner-circle"></div>
    </div>
  </div>
  <label for="radio-02">Inactive</label>
</div>\n
<div class="ac-form-field">
  <div class="ac-radio">
    <input class="mdc-radio__native-control" type="radio" id="radio-03" name="radios" checked>
    <div class="mdc-radio__background">
      <div class="mdc-radio__outer-circle"></div>
      <div class="mdc-radio__inner-circle"></div>
    </div>
  </div>
  <label for="radio-03">Selected</label>
</div>`;

  codePreview3 = 
  `<div class="ac-form-field more-space">
    <div class="mdc-switch">
      <input type="checkbox" id="basic-switch-01" class="mdc-switch__native-control" role="switch" checked>
      <div class="mdc-switch__background">
        <div class="mdc-switch__knob"></div>
      </div>
    </div>
    <label for="basic-switch-01">Active</label>
  </div>\n
  <div class="ac-form-field more-space">
    <div class="ac-switch">
      <input type="checkbox" id="basic-switch-04" class="mdc-switch__native-control" role="switch">
      <div class="mdc-switch__background">
        <div class="mdc-switch__knob"></div>
      </div>
    </div>
    <label for="basic-switch-04">Inactive</label>
  </div>\n
  <div class="ac-form-field more-space">
    <div class="mdc-switch">
      <input type="checkbox" id="basic-switch-02" class="mdc-switch__native-control" role="switch" checked disabled>
      <div class="mdc-switch__background">
        <div class="mdc-switch__knob"></div>
      </div>
    </div>
    <label for="basic-switch-02">Active Disabled</label>
  </div>\n
  <div class="ac-form-field more-space">
    <div class="ac-switch">
      <input type="checkbox" id="basic-switch-05" class="mdc-switch__native-control" role="switch" disabled>
      <div class="mdc-switch__background">
        <div class="mdc-switch__knob"></div>
      </div>
    </div>
    <label for="basic-switch-05">Inactive Disabled</label>
  </div>\n
  <div class="ac-form-field more-space">
    <div class="mdc-switch">
      <input type="checkbox" id="basic-switch-03" class="mdc-switch__native-control" role="switch" checked>
      <div class="mdc-switch__background skeleton">
        <div class="mdc-switch__knob"></div>
      </div>
    </div>
    <label for="basic-switch-03">Active Skeleton</label>
  </div>\n
  <div class="ac-form-field more-space">
    <div class="ac-switch">
      <input type="checkbox" id="basic-switch-06" class="mdc-switch__native-control" role="switch">
      <div class="mdc-switch__background skeleton">
        <div class="mdc-switch__knob"></div>
      </div>
    </div>
    <label for="basic-switch-06">Inactive Skeleton</label>
  </div>`;

  constructor(private escapeHtml: EscapeHtmlService) {}

  ngOnInit() {
    this.codePreview1 = this.escapeHtml.convert(this.codePreview1);
    this.codePreview2 = this.escapeHtml.convert(this.codePreview2);
    this.codePreview3 = this.escapeHtml.convert(this.codePreview3);
  }
}
