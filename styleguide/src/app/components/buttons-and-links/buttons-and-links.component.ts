import { Component, OnInit } from '@angular/core';
import { EscapeHtmlService } from '../../shared/escape-html.service';

@Component({
  selector: 'app-buttons-and-links',
  templateUrl: './buttons-and-links.component.html',
  styleUrls: ['./buttons-and-links.component.scss']
})
export class ButtonsAndLinksComponent implements OnInit {
  constructor(private escapeHtml: EscapeHtmlService) {}

  codePreview1 =
    '<button class="ac-button primary">< i class = "button__icon ac-icon-add" > </i>Add</button>\n' +
    '<button class="ac-button primary" disabled>< i class = "button__icon ac-icon-add" > </i>Add</button>\n' +
    '<button class="ac-button primary">Next</button>\n' +
    '<button class="ac-button primary" disabled>Next</button>\n' +
    '<button class="ac-button">Save</button>\n' +
    '<button class="ac-button" disabled>Save</button>\n' +
    '<button class="ac-button primary lg">Login in</button>';

  codePreview2 =
    '<button class="ac-button secondary">< i class = "button__icon ac-icon-add" > </i>Add</button>\n' +
    '<button class="ac-button secondary" disabled>< i class = "button__icon ac-icon-add" > </i>Add</button>\n' +
    '<button class="ac-button secondary danger">< i class = "button__icon ac-icon-delete" > </i>Delete Confiuration</button>\n' +
    '<button class="ac-button secondary danger" disabled>< i class = "button__icon ac-icon-delete" > </i>Delete Confiuration</button>\n' +
    '<button class="ac-button normal-fill sm">< i class = "button__icon ac-icon-play" > </i>Run</button>\n' +
    '<button class="ac-button normal-fill">Add a Confiuration</button>\n' +
    '<button class="ac-button normal">Register</button>\n' +
    '<button class="ac-float-button" aria-label="Favorite">< i class = "button__icon ac-icon-delete" > </i></button>';

  codePreview3 =
    '<div class="element pull-left">< a href = "javascript:;" class = "ac-link" > Cancel < /a></div>\n' +
    '<a href="javascript:;" class="ac-link sm active">< i class = "link__icon ac-icon-refresh" > </i>Refresh All</a>\n' +
    '<a href="javascript:;" class="ac-link">Cancel</a>\n' +
    '<button class="ac-button danger-fill">Delete Forever</button>\n' +
    '<a href="javascript:;" class="ac-link">Cancel</a>\n' +
    '<button class="ac-button normal-fill">Add a Confiuration</button>\n' +
    '<a href="javascript:;" class="ac-link">Cancel</a>\n' +
    '<button class="ac-button primary">Next</button>\n' +
    '<a href="javascript:;" class="ac-link">Cancel</a>\n' +
    '<button class="ac-button primary" disabled>Next</button>\n' +
    '<button class="ac-button">Save</button>\n' +
    '<a href="javascript:;" class="ac-link">Cancel</a>\n' +
    '<button class="ac-button" disabled>Save</button>\n' +
    '<a href="javascript:;" class="ac-link">Cancel</a>';

  ngOnInit() {
    this.codePreview1 = this.escapeHtml.convert(this.codePreview1);
    this.codePreview2 = this.escapeHtml.convert(this.codePreview2);
    this.codePreview3 = this.escapeHtml.convert(this.codePreview3);
  }
}
