import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'al-button',
    template: `
        <button [class]="type" (click)="buttonClick.emit($event)">
            <ng-content></ng-content>
        </button>
    `,
    styleUrls: ['./button.component.css']
})
export class ButtonComponent {

    /**
     * Type of the button
     */
    @Input() type: 'success' | 'info' | 'warn';

    /**
     * Button click event
     */
    @Output() buttonClick = new EventEmitter<MouseEvent>();

}
