import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-danger',
  templateUrl: './danger.component.html',
  styleUrls: ['./danger.component.css']
})
export class DangerComponent implements OnInit {
  allowNewServer = false
  constructor () {
    setTimeout(() => {this.allowNewServer = true;}, 2000);
  }
  ngOnInit () {}
}
