import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.component.html',
  styleUrls: ['./trabajo.component.css']
})
export class TrabajoComponent {
  @Input() img:string = "";
  @Input() titulo:string = "";
  @Input() fecha:string ="";
  @Input() descripcion:string="";
}
