import { Component } from '@angular/core';

// edw apo katw orizw kapoia metadata
// to selector einai to html element katw apo to opoio tha paei kai tha kollhsei to component app.component
// to component gnk perilamvanei ena .ts, ena .html kai ena .css 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// to export vgazei kati pou mporei na to xrhsimopoihsei to html
export class AppComponent {
  title = 'edcrud';
}

// antistoixo me to <App/> sth React
