import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
// import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http'

import { ServerComponent } from './server/server.component'
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { DangerComponent } from './danger/danger.component'

@NgModule({
  declarations: [AppComponent, ServerComponent, ServersComponent, DangerComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
