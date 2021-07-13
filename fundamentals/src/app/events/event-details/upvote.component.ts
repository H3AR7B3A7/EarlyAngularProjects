import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
    selector: 'upvote',
    styleUrls: ['./upvote.component.css'],
    template: `
    <div class="votingWidgetComtainer pointable" (click)="onClick()">
        <div class="well votingWidget">
            <div class="votingButton">
                <i class="glyphicon glyphicon-heart" [style.color]="iconColor"></i>
            </div>
            <div class="badge badge-inverse votingCount">
                <div>{{count}}</div>
            </div>
        </div>
    </div>
    `
})
export class UpvoteComponent {
    @Input() count: number;
    @Input() set voted(val) {
        this.iconColor = val = val ? 'red' : 'white';
    }
    @Output() vote = new EventEmitter();
    iconColor: string;

    onClick() {
        this.vote.emit();
    }
}