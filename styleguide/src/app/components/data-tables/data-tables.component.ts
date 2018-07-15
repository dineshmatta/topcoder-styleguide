import { Component, OnInit } from '@angular/core';
import { EscapeHtmlService } from '../../shared/escape-html.service';

@Component({
  selector: 'app-data-tables',
  templateUrl: './data-tables.component.html',
  styleUrls: ['./data-tables.component.scss']
})
export class DataTablesComponent implements OnInit {
  codePreview1 = `<div class="ac-pagination">
    <a href="javascript:;" class="ac-pagination__arrow">
      <i class="ac-pagination__left-icon ac-icon-chevron-left"></i>
    </a>
    <a href="javascript:;" class="ac-pagination__item">1</a>
    <a href="javascript:;" class="ac-pagination__item">2</a>
    <a href="javascript:;" class="ac-pagination__item active">3</a>
    <a href="javascript:;" class="ac-pagination__item">4</a>
    <a href="javascript:;" class="ac-pagination__item">5</a>
    <a href="javascript:;" class="ac-pagination__item">6</a>
    <a href="javascript:;" class="ac-pagination__item">7</a>
    <a href="javascript:;" class="ac-pagination__item">8</a>
    <a href="javascript:;" class="ac-pagination__item">9</a>
    <a href="javascript:;" class="ac-pagination__arrow">
      <i class="ac-pagination__right-icon ac-icon-chevron-left"></i>
    </a>
  </div>\n
  <div class="ac-pagination disabled">
    <a href="javascript:;" class="ac-pagination__arrow">
      <i class="ac-pagination__left-icon ac-icon-chevron-left"></i>
    </a>
    <a href="javascript:;" class="ac-pagination__item">1</a>
    <a href="javascript:;" class="ac-pagination__item">2</a>
    <a href="javascript:;" class="ac-pagination__item active">3</a>
    <a href="javascript:;" class="ac-pagination__item">4</a>
    <a href="javascript:;" class="ac-pagination__item">5</a>
    <a href="javascript:;" class="ac-pagination__item">6</a>
    <a href="javascript:;" class="ac-pagination__item">7</a>
    <a href="javascript:;" class="ac-pagination__item">8</a>
    <a href="javascript:;" class="ac-pagination__item">9</a>
    <a href="javascript:;" class="ac-pagination__arrow">
      <i class="ac-pagination__right-icon ac-icon-chevron-left"></i>
    </a>
  </div>`;

  codePreview2 = 
  `<div class="ac-showing">
    Showing
    <span class="ac-showing__drop">
      <span class="ac-showing__number">25</span>
      <i class="ac-icon-chevron-left"></i>
    </span>
    Of 73 Jobs
  </div>`;

  codePreview3 = 
  `<div class="ac-table">
  <div class="ac-table__header">
    <div class="ac-showing">
      Showing
      <span class="ac-showing__drop">
        <span class="ac-showing__number">25</span>
        <i class="ac-icon-chevron-left"></i>
      </span>
      Of 73 Configurations
    </div>

    <div class="ac-search-bar expanded">
      <i class="ac-search-bar__icon ac-icon-search"></i>
      <input class="ac-search-bar__input" placeholder="Search configurations by name">
    </div>
  </div>

  <div class="ac-table__theader">
    <div class="ac-table__cell-item flex3">
      <i class="ac-table__sort-icon ac-icon-down-arrow"></i>Configurations</div>
    <div class="ac-table__cell-item flex3">Template</div>
    <div class="ac-table__cell-item flex1-5">Owner
      <div class="dropdown">All
        <i class="ac-icon-arrow"></i>
      </div>
    </div>
    <div class="ac-table__cell-item flex1-5">Next Job(CST)</div>
    <div class="ac-table__cell-item">Active</div>
    <div class="ac-table__cell-item flex0-5">Run</div>
    <div class="ac-table__cell-item action">
      <i class="ac-icon-more"></i>
    </div>
  </div>


  <div class="mdc-list-item">
    <div class="ac-table__cell-item flex3 color-actian-azure">Actian: SF to NS Account</div>
    <div class="ac-table__cell-item flex3 color-light-grey">Salesforce Account to Netsuite Config T...</div>
    <div class="ac-table__cell-item flex1-5 color-actian-azure">kvyvial</div>
    <div class="ac-table__cell-item flex1-5">11/28/2016 | 00:01:08</div>
    <div class="ac-table__cell-item">On</div>
    <div class="ac-table__cell-item flex0-5">
      <i class="ac-icon-play"></i>
    </div>
    <div class="ac-table__cell-item action">Actions
      <i class="ac-icon-arrow"></i>
    </div>
  </div>

  <div class="mdc-list-item">
    <div class="ac-table__cell-item flex3 color-actian-azure">Planview: SF to NS Account</div>
    <div class="ac-table__cell-item flex3 color-actian-azure">Salesforce Account to Netsuite Config T...</div>
    <div class="ac-table__cell-item flex1-5 color-actian-azure">jwagner</div>
    <div class="ac-table__cell-item flex1-5">11/28/2016 | 00:01:08</div>
    <div class="ac-table__cell-item">On</div>
    <div class="ac-table__cell-item flex0-5">
      <i class="ac-icon-play"></i>
    </div>
    <div class="ac-table__cell-item action">Actions
      <i class="ac-icon-arrow"></i>
    </div>
  </div>

  <div class="mdc-list-item">
    <div class="ac-table__cell-item flex3 color-actian-azure">ServiceNow: SF to NS Account</div>
    <div class="ac-table__cell-item flex3 color-actian-azure">Salesforce Account to Netsuite Config T...</div>
    <div class="ac-table__cell-item flex1-5 color-actian-azure">mgabriel</div>
    <div class="ac-table__cell-item flex1-5 color-light-grey">Not scheduled</div>
    <div class="ac-table__cell-item">On</div>
    <div class="ac-table__cell-item flex0-5">
      <i class="ac-icon-play"></i>
    </div>
    <div class="ac-table__cell-item action">Actions
      <i class="ac-icon-arrow"></i>
    </div>
  </div>

  <div class="mdc-list-item">
    <div class="ac-table__cell-item flex3 color-actian-azure">SQL to Salesforce Template</div>
    <div class="ac-table__cell-item flex3 color-actian-azure">SQL to Salesforce Templ…</div>
    <div class="ac-table__cell-item flex1-5 color-actian-azure">kvyvial</div>
    <div class="ac-table__cell-item flex1-5 color-light-grey">Not scheduled</div>
    <div class="ac-table__cell-item">On</div>
    <div class="ac-table__cell-item flex0-5">
      <i class="ac-icon-play"></i>
    </div>
    <div class="ac-table__cell-item action">Actions
      <i class="ac-icon-arrow"></i>
    </div>
  </div>

  <div class="mdc-list-item">
    <div class="ac-table__cell-item flex3 color-actian-azure">Nimsoft Monitoring</div>
    <div class="ac-table__cell-item flex3 color-actian-azure">Nimsoft Integration</div>
    <div class="ac-table__cell-item flex1-5 color-actian-azure">mgabriel</div>
    <div class="ac-table__cell-item flex1-5">11/28/2016 | 17:20:10</div>
    <div class="ac-table__cell-item">On</div>
    <div class="ac-table__cell-item flex0-5">
      <i class="ac-icon-play"></i>
    </div>
    <div class="ac-table__cell-item action">Actions
      <i class="ac-icon-arrow"></i>
    </div>
  </div>

  <div class="mdc-list-item">
    <div class="ac-table__cell-item flex3 color-actian-azure">Another Config #1</div>
    <div class="ac-table__cell-item flex3 color-mid-grey">No template used</div>
    <div class="ac-table__cell-item flex1-5 color-actian-azure">jsmith</div>
    <div class="ac-table__cell-item flex1-5 color-light-grey">Not scheduled</div>
    <div class="ac-table__cell-item">Off</div>
    <div class="ac-table__cell-item flex0-5 color-mid-grey">
      <i class="ac-icon-play"></i>
    </div>
    <div class="ac-table__cell-item action">Actions
      <i class="ac-icon-arrow"></i>
    </div>
  </div>
  <div class="mdc-list-item">
    <div class="ac-table__cell-item flex3 color-actian-azure">Really Really Really Long Config Na…</div>
    <div class="ac-table__cell-item flex3 color-mid-grey">No template used</div>
    <div class="ac-table__cell-item flex1-5 color-actian-azure">jsmith</div>
    <div class="ac-table__cell-item flex1-5">11/28/2016 | 00:01:08</div>
    <div class="ac-table__cell-item">On</div>
    <div class="ac-table__cell-item flex0-5">
      <i class="ac-icon-play"></i>
    </div>
    <div class="ac-table__cell-item action">Actions
      <i class="ac-icon-arrow"></i>
    </div>
  </div>
  <div class="mdc-list-item">
    <div class="ac-table__cell-item flex3 color-actian-azure">Another Config #1</div>
    <div class="ac-table__cell-item flex3 color-actian-azure">Another Config Template</div>
    <div class="ac-table__cell-item flex1-5 color-actian-azure">jsmith</div>
    <div class="ac-table__cell-item flex1-5 color-light-grey">Not scheduled</div>
    <div class="ac-table__cell-item">Off</div>
    <div class="ac-table__cell-item flex0-5">
      <i class="ac-icon-play"></i>
    </div>
    <div class="ac-table__cell-item action">Actions
      <i class="ac-icon-arrow"></i>
    </div>
  </div>
</div>`;

  constructor(private escapeHtml: EscapeHtmlService) {}

  ngOnInit() {
    this.codePreview1 = this.escapeHtml.convert(this.codePreview1);
    this.codePreview2 = this.escapeHtml.convert(this.codePreview2);
    this.codePreview3 = this.escapeHtml.convert(this.codePreview3);
  }
}
