import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EscapeHtmlService {

  constructor() { }

  convert(htmlCode) {
    return htmlCode.replace(/[&<>"']/g, function ($0) {
      return "&" + { "&": "amp", "<": "lt", ">": "gt", '"': "quot", "'": "#39" }[$0] + ";";
    });
  }
}
