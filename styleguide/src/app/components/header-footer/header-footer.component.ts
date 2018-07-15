import { Component, OnInit } from '@angular/core';
import { EscapeHtmlService } from '../../shared/escape-html.service';

@Component({
  selector: 'app-header-footer',
  templateUrl: './header-footer.component.html',
  styleUrls: ['./header-footer.component.scss']
})
export class HeaderFooterComponent implements OnInit {
  codePreview1 = `<div class="ac-header">
    <div class="left-part">
      <div class="logo-part">
        <i class="ac-logo--secondary"></i>
        <div class="title-part">
          <div class="primary-title">Integration Manager</div>
          <div class="secondary-title">Powered By DataCloud</div>
        </div>
      </div>
      <div class="nav-part">
        <div class="nav-item active">
          <div class="nav-item__text">DASHBOARD</div>
          <div class="nav-item__indicator"></div>
        </div>
        <div class="nav-item">
          <div class="nav-item__text">TEMPLATES</div>
          <div class="nav-item__indicator"></div>
        </div>
        <div class="nav-item">
          <div class="nav-item__text">CONFIGURATIONS</div>
          <div class="nav-item__indicator"></div>
        </div>
        <div class="nav-item">
          <div class="nav-item__text">FILES</div>
          <div class="nav-item__indicator"></div>
        </div>
        <div class="nav-item">
          <div class="nav-item__text">MACROS</div>
          <div class="nav-item__indicator"></div>
        </div>
        <div class="nav-item">
          <div class="nav-item__text">AGENTS</div>
          <div class="nav-item__indicator"></div>
        </div>
      </div>
    </div>

    <div class="right-part">
      <div class="profile-part">
        <button class="mdc-icon-button">
          <i class="ac-icon-help"></i>
        </button>
        <button class="mdc-icon-button">
          <i class="ac-icon-notification"></i>
        </button>
        <div class="profile-header">
          K
        </div>
        <div class="profile-name">kvyvial
          <i class="ac-icon-chevron-left"></i>
        </div>
      </div>
      <div class="setting-part">
        <button class="mdc-icon-button">
          <i class="ac-icon-setting"></i>
        </button>
        <div class="text">ADMIN</div>
      </div>
    </div>
  </div>`;

  codePreview2 = `<div class="ac-sub-header">
  <div class="primary-title-part">
    <div class="text">Configuration : Super Cool config</div>
    <div class="right-part">
      <div class="text">Currently ON</div>
      <div class="mdc-switch">
        <input type="checkbox" class="mdc-switch__native-control" role="switch" checked>
        <div class="mdc-switch__background">
          <div class="mdc-switch__knob"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="secondary-title-part">
    No description added.
  </div>

  <div class="bottom-part">
    <div class="nav-part">
      <div class="nav-item active">
        <div class="nav-item__text">JOBS (73)</div>
        <div class="nav-item__indicator"></div>
      </div>
      <div class="nav-item">
        <div class="nav-item__text">DETAILS</div>
        <div class="nav-item__indicator"></div>
      </div>
      <div class="nav-item">
        <div class="nav-item__text">MACROS (0)</div>
        <div class="nav-item__indicator"></div>
      </div>
      <div class="nav-item">
        <div class="nav-item__text">FILES (8)</div>
        <div class="nav-item__indicator"></div>
      </div>
      <div class="nav-item">
        <div class="nav-item__text">PERMISSIONS</div>
        <div class="nav-item__indicator"></div>
      </div>
    </div>
    <div class="right-part">
      <button class="ac-button primary">
        <i class="button__icon ac-icon-play"></i>Run Configuration
      </button>
    </div>
  </div>
</div>`;

  codePreview3 = 
  `<div class="ac-footer">
    <div class="copy-right">© 2018 Actian Coporation, All Rights Reserved.</div>
    <div class="links">
      <a href="javascript:;" class="link-item">Services Agreement</a>
      <a href="javascript:;" class="link-item">Privacy Policy</a>
      <a href="javascript:;" class="link-item">Contact</a>
      <a href="javascript:;" class="link-item">Actian Community</a>
      <a href="javascript:;" class="link-item last">Services Status</a>

    </div>
  </div>`;

  constructor(private escapeHtml: EscapeHtmlService) {}

  ngOnInit() {
    this.codePreview1 = this.escapeHtml.convert(this.codePreview1);
    this.codePreview2 = this.escapeHtml.convert(this.codePreview2);
    this.codePreview3 = this.escapeHtml.convert(this.codePreview3);
  }
}
