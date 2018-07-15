import { Component, OnInit } from '@angular/core';
import { EscapeHtmlService } from '../../shared/escape-html.service';


@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.scss']
})
export class OthersComponent implements OnInit {
  codePreview1 = `<div class="tag-container">
    <div class="ac-tag">FROM TEMPLATE</div>
  </div>`;

  codePreview2 = `<div class="ac-breadcrumb">
    <a class="breadcrumb-item" href="javascript:;">
      <i class="ac-icon-chevron-left"></i>
      Back to Confiruations list
    </a>
  </div>`;

  codePreview3 = `
  <div class="ac-tip left">
    <div class="ac-tip__content">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
    </div>
    <div class="ac-tip__arrow"></div>
  </div>\n
  <div class="ac-tip up">
    <div class="ac-tip__content">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s
    </div>
    <div class="ac-tip__arrow"></div>
  </div>\n
  <div class="ac-tip right">
    <div class="ac-tip__content">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries
    </div>
    <div class="ac-tip__arrow"></div>
  </div>\n
  <div class="ac-tip bottom">
    <div class="ac-tip__content">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </div>
    <div class="ac-tip__arrow"></div>
  </div>
</div>`;

  codePreview4 = `
    <div class="sample-search-container">
    <div class="ac-search-bar collapsed">
      <i class="ac-search-bar__icon ac-icon-search"></i>
      <input class="ac-search-bar__input">
    </div>
    <div class="ac-search-bar expanded">
      <i class="ac-search-bar__icon ac-icon-search"></i>
      <input class="ac-search-bar__input" placeholder="Search configurations by name">
    </div>
  </div>\n
  <div class="sample-search-container">
    <div class="ac-search-bar disabled collapsed">
      <i class="ac-search-bar__icon ac-icon-search"></i>
      <input class="ac-search-bar__input">
    </div>
    <div class="ac-search-bar disabled expanded">
      <i class="ac-search-bar__icon ac-icon-search"></i>
      <input class="ac-search-bar__input">
    </div>
  </div>
  `;

  codePreview5 = `
  <div class="ac-toast succeed">
    <div class="ac-toast__text">
      <div class="line">MDC Toolbar acts as a container for multiple rows containing items such as application title, navigation menu
      </div>
    </div>
    <button class="ac-toast__button ac-button transparent">DISMISS</button>
  </div>\n
  <div class="ac-toast failed">
    <i class="ac-toast__icon ac-icon-info"></i>
    <div class="ac-toast__text">
      <div class="line">MDC Toolbar acts as a container for multiple rows containing items such as application title, navigation menu, and tabs,
        among other things. Toolbars scroll with content by default, but support fixed behavior as well.
      </div>
      <div class="line">Flexible behavior can be added to mdc-toolbar, where the height of the toolbar changes as the user scrolls.
      </div>
    </div>
    <button class="ac-toast__button ac-button transparent">DISMISS</button>
  </div>`;

  constructor(private escapeHtml: EscapeHtmlService) {}

  ngOnInit() {
    this.codePreview1 = this.escapeHtml.convert(this.codePreview1);
    this.codePreview2 = this.escapeHtml.convert(this.codePreview2);
    this.codePreview3 = this.escapeHtml.convert(this.codePreview3);
    this.codePreview4 = this.escapeHtml.convert(this.codePreview4);
    this.codePreview5 = this.escapeHtml.convert(this.codePreview5);

  }
}
