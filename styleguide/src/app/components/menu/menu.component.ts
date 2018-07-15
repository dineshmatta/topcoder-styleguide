import { Component, OnInit } from '@angular/core';
import { EscapeHtmlService } from '../../shared/escape-html.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  codePreview1 = 
  `<div class="ac-menu primary">
    <div class="mdc-list">
      <div class="mdc-list-item active">
        <i class="ac-icon-edit"></i>
        Edit
      </div>
      <div class="mdc-list-item">
        <i class="ac-icon-copy"></i>
        Duplicate
      </div>
      <div class="mdc-list-item">
        <i class="ac-icon-share"></i>
        Share
      </div>
      <div class="mdc-list-item">
        <i class="ac-icon-archive"></i>
        Archive
      </div>
      <div class="mdc-list-item">
        <i class="ac-icon-delete"></i>
        Delete
      </div>
    </div>
  </div>`;

  constructor(private escapeHtml: EscapeHtmlService) {}

  ngOnInit() {
    this.codePreview1 = this.escapeHtml.convert(this.codePreview1);
  }
}
