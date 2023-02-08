import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false
  constructor () {    setTimeout(() => {
   this.allowNewServer = true
   }, 2000)}
  ngOnInit () {}
}


// import { Component, OnInit } from '@angular/core'

// @Component({
//   selector: 'app-servers',
//   templateUrl: './servers.component.html',
//   // js template expressions
//   styleUrls: ['./servers.component.css']
// })
// export class ServersComponent implements OnInit {
//   allowNewServer = false
//   constructor () {
//     setTimeout(() => {
//       this.allowNewServer = true
//     }, 2000)
//   }
//   ngOnInit () {}
// }
