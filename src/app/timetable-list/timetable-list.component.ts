import { Component} from '@angular/core';


export class Timetable {
  _id!: string;
  location!: string;
  bus_routes!: string[];
  next_bus!: string;

  constructor(id: string, loc: string, routes: string[], next: string, distance: number) {
    this._id = id;
    this.location = loc;
    this.bus_routes = routes;
    this.next_bus = next;
  }
}

@Component({
  selector: 'app-timetable-list',
  templateUrl: './timetable-list.component.html',
  styleUrl: './timetable-list.component.css'
})
export class TimetableListComponent{
	//name = "Bus Timetables";
	//constructor(){ }
	
	timetables: Timetable[] = [
		new Timetable(
			'6537886343f7460cc42c4a7f',
			'Tralee',
			['Tralee to Listowel', 'Tralee to Killarney', 'Tralee to Cork'],
			'13:00 to Cork'
		),
		new Timetable(
			'653788e743f7460cc42c4a80',
			'Listowel',
			['Listowel to Tralee', 'Listowel to Limerick', 'Listowel to Ballybunion'],
			'12:00 to Limerick'
		),
		new Timetable(
			'6537892743f7460cc42c4a81',
			'Killarney',
			['Killarney to Cork', 'Killarney to Waterford', 'Killarney to Tralee'],
			'14:00 to Cork'
		),
		new Timetable(
			'656e45efff226870a8a8f883',
			'Cork',
			['Cork to Tralee', 'Cork to Limerick', 'Cork to Dublin'],
			'13:00 to Tralee'
		)
		];
	
	
}
