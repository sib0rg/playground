import {Component} from 'angular2/core';

interface Person {
	id: number;
	name: string;
};

var PEOPLE: people[] = [
	{ id: 1, name: 'Simon1' },
	{ id: 1, name: 'Simon2' },
	{ id: 1, name: 'Simon3' },
	{ id: 1, name: 'Simon4' },
	{ id: 1, name: 'Simon5' },
	{ id: 1, name: 'Simon6' }
];

function onSelect() {

}

@Component({
    selector: 'my-app',
    templateUrl: 'app/views/person.html' 
})

export class AppComponent { 
	public title = 'My Test App';
	public person: Person = {
		id: 1,
		name: 'Simon'
	};
	public people = PEOPLE;
	public selectedPerson: Person;
};



/*
function onSelect(person:Person) {
	this.selectedPerson = person;
	
};
*/