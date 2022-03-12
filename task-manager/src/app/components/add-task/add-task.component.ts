import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';

@Component({
    selector: 'app-add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
    @Output() onAddTask = new EventEmitter();
    text!: string;
    day!: string;
    time!: string;
    reminder: boolean = false;

    constructor() {}

    ngOnInit(): void {}

    onSubmit() {
        // console.log(this.text);
        // console.log(this.day);
        // console.log(this.time);
        // console.log(this.reminder);
        if (!this.text) {
            alert('Please enter a task!');
            return;
        }
        if (!this.day) {
            alert('Please enter the day of the task!');
            return;
        }
        if (!this.time) {
            alert('Please enter the time of the task!');
            return;
        }

        const newTask = {
            text: this.text,
            day: this.day,
            time: this.time,
            reminder: this.reminder,
        };

        // console.log(newTask);
        // @todo - emit event
        this.onAddTask.emit(newTask);

        this.text = '';
        this.day = '';
        this.time = '';
        this.reminder = false;
    }
}
