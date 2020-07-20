import { Component, OnInit, ViewChild, ElementRef, Renderer2, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notecard',
  templateUrl: './notecard.component.html',
  styleUrls: ['./notecard.component.scss']
})
export class NotecardComponent implements OnInit {
  @Input() title:string
  @Input() body:string

  @Output('delete') deleteEvent:EventEmitter<void>=new EventEmitter<void>()

  @ViewChild('truncator',{static:true}) truncator:ElementRef<HTMLElement>
  @ViewChild('bodyText',{static:true}) bodyText:ElementRef<HTMLElement>

  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
    //if no text overflow, hide the truncator
    let style = getComputedStyle(this.bodyText.nativeElement).getPropertyValue('max-height');
    let viewableHeight=parseInt(style,10)
    console.log(viewableHeight);
    
    
    if(this.bodyText.nativeElement.scrollHeight>viewableHeight){
      this.renderer.setStyle(this.truncator.nativeElement,'display','block')
    }
    else{
      this.renderer.setStyle(this.truncator.nativeElement,'display','none')
    }
  }

  onXbuttonClick(){
    this.deleteEvent.emit() 
  }


}
