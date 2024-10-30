import { Component, ElementRef, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paul-portfolio';
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  scrollTo(section: string, event: MouseEvent): void {
    event.preventDefault(); // Prevent default link behavior
    const element = this.el.nativeElement.querySelector('#' + section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  selectedSkill: string = 'programming'; // Default selected skill

  selectSkill(skill: string): void {
    this.selectedSkill = skill; // Update the selected skill
  }
}
