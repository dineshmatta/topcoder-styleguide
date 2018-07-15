import { Component, OnInit } from '@angular/core';
import { EscapeHtmlService } from '../../shared/escape-html.service';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {
  codePreview1 = 
  `<div class="ac-dialog sm">
  <header class="header">
    <h2 class="title">Save Entry Point?</h2>
  </header>
  <div class="body">
    It looks like you have made changes to the entry point. Would you like to save before moving on?
  </div>
  <footer class="footer">
    <button class="ac-button cancel">Discard Changes</button>
    <button class="ac-button primary">Save Changes</button>
  </footer>
</div>`;

  constructor(private escapeHtml: EscapeHtmlService) {}

  ngOnInit() {
    this.codePreview1 = this.escapeHtml.convert(this.codePreview1);
  }
}
