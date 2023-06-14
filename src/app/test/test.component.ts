import { Component } from '@angular/core';

@Component({
  selector: 'test-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  // one way binding:component to view
name="xasz";
getDetails():string{
  return this.name;
}
 
getLargest(n1:number,n2:number):number{
  return Math.max(n1,n2)
}

title = 'practice-angular';
isDisabled=true;
color="blue"
injectionText="Hello<script>alert('hi')</script>"

// view to component
//event Binding
count=0;
click(){
  this.count++;
}
clickr(){
  this.count--;
}
// event payload
value=''
getValue(event:any){
  this.value=(event.target as HTMLInputElement).value;
}
// template reference 
value1=''
getValue1(val:any){
  this.value1=val.value;
}

// <!-- key events filtering -->
value2=''
//two way binding 
value3=''
clear(){
  this.value3=''
}
}
