import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const todos = [
			{
				title: 'Изучить JavaScript',
				completed: true
			},
			{
				title: 'Изучить Angular 2',
				completed: false
			},
			{
				title: 'Написать приложение',
				completed: false
			}
		];

		return { todos };
	}
}