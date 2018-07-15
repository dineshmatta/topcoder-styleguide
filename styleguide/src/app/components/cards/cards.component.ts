import { Component, OnInit } from '@angular/core';
import { EscapeHtmlService } from '../../shared/escape-html.service';


@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.scss"]
})
export class CardsComponent implements OnInit {
  codePreview1 = 
  `<div class="ac-card default">
  <div class="package">Package
    <span class="star">*</span>
  </div>
  <div class="file-name">TemplatePackage.djar</div>
  <a href="javascript:;" class="ac-link">Change Package</a>
</div>`;

  codePreview2 = 
  `<div class="ac-card selected">
  <div class="title">Entry Point
    <span class="star">*</span>
  </div>
  <div class="ac-text-field dropdown">
    <input type="text" class="mdc-text-field__input" value="entry.ip.xml">
    <label class="mdc-floating-label mdc-floating-label--float-above" for="pre-filled">entry Point</label>
    <i class="dropdown-icon ac-icon-arrow"></i>
  </div>
  <div class="action-buttons">
    <button class="ac-button ">Save</button>
    <button class="ac-button cancel">Cancel</button>
  </div>
</div>`;

  codePreview3 = 
  `<div class="ac-card history">
  <div class="header">
    <i class="header__icon ac-icon-chevron-left"></i>
    <span class="title">Activity</span>
  </div>
  <div class="body">
    <div class="line">Last modified by
      <span class="bold">kvyvial</span> on November 27, 2016 at 05:49:09 CST</div>
    <div class="link">Created by
      <span class="bold">gcoates</span> on November 5, 2011 at 21:49:09 CST</div>
  </div>
</div>`;

  constructor(private escapeHtml: EscapeHtmlService) {}

  ngOnInit() {
    this.codePreview1 = this.escapeHtml.convert(this.codePreview1);
    this.codePreview2 = this.escapeHtml.convert(this.codePreview2);
    this.codePreview3 = this.escapeHtml.convert(this.codePreview3);
  }
}
