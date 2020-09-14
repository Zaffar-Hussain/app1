import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-notes';

  //interpollation and property binding
  empDetails = [{name:"zafar",post:"developer",location:"mangalore"},{name:"ashwin",post:"developer",location:"kerala"}];
  compLogo = "./assets/logo.png";

  //style binding
  isBold:boolean = true;
  fontSize:number = 30;
  isItalic:boolean = true;
  
  multiStyles() {
    let styles = {
    'font-weight' : this.isBold ? 'bold' : 'normal',
    'font-style' : this.isItalic ? 'bold' : 'normal',
    'font-size.px' : this.fontSize
    };
    return styles;
  }

  // class binding
  classesToApply:string = 'classItalic classColor';
  classApplyItalic:boolean = true;
  classApplyColor:boolean = true;

  addClasses() {
    let classes = {
      classItalics:this.classApplyItalic,
      classColor:this.classApplyColor
    }
    return classes;
  }
}
