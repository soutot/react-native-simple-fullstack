import mongoose from 'mongoose';
import Session from '../../models/session';

async function sessionSeeder() {
  const createSessionPromise = [];
  await Session.remove({});

  const sessions = [
		{
			day: 1,
			slot: '8:30-10:00',
			title: 'Registration and French Breakfast',
			speakers: []
		},
		{
			day: 1,
			slot: '10:00-10:30',
			title: 'Keynote',
			speakers: ['Dan Abramov']
		},
		{
			day: 1,
			slot: '10:30-11:00',
			title: 'Native Navigation for Every Platform',
			speakers: ['Eric Vicenti']
		},
		{
			day: 1,
			slot: '11:00-11:30',
			title: 'Coffee Break',
			speakers: []
		},
		{
			day: 1,
			slot: '11:30-12:00',
			title: 'A cartoon guide to performance in React',
			speakers: ['Link Clark']
		},
		{
			day: 1,
			slot: '12:00-12:30',
			title: 'React Native <360FPS - Improving React Native animations>',
			speakers: ['Krzysztof Magiera']
		},
		{
			day: 1,
			slot: '12:30-14:00',
			title: 'French Buffet',
			speakers: []
		},
		{
			day: 1,
			slot: '14:00-14:30',
			title: 'Being Successful at Open Source',
			speakers: ['Christopher Chedeau']
		},
		{
			day: 1,
			slot: '14:30-15:00',
			title: 'GraphQL at Facebook',
			speakers: ['Dan Schafer']
		},
		{
			day: 1,
			slot: '15:00-15:30',
			title: 'Coffee Break',
			speakers: []
		},
		{
			day: 1,
			slot: '15:30-16:00',
			title: 'A Deepdive Into Flow',
			speakers: ['Jeff Morrison']
		},
		{
			day: 1,
			slot: '16:00-16:30',
			title: 'Debugging flux applications in production',
			speakers: ['Mihail Diordiev']
		},
		{
			day: 1,
			slot: '16:30-17:00',
			title: 'Coffee Break',
			speakers: []
		},
		{
			day: 1,
			slot: '17:00-17:30',
			title: 'On the Spectrum of Abstraction',
			speakers: ['Cheng Lou']
		},
		{
			day: 1,
			slot: '17:30-18:00',
			title: 'React Redux Analytics',
			speakers: ['Bertrand Karerangabo', 'Evan Schultz']
		},
		{
			day: 1,
			slot: '18:00-18:30',
			title: 'Lightning Talks',
			speakers: ['Various Speakers']
		},
		{
			day: 1,
			slot: '18:30-22:00',
			title: 'Dinner',
			speakers: []
		},
		{
			day: 2,
			slot: '8:30-10:00',
			title: 'Check-In and French Breakfast',
			speakers: []
		},
		{
			day: 2,
			slot: '10:00-10:30',
			title: 'Evolving the Visual Programming Environment with React',
			speakers: ['Jonas Gebhardt']
		},
		{
			day: 2,
			slot: '10:30-11:00',
			title: 'React Native Retrospective',
			speakers: ['Bonnie Eisenman']
		},
		{
			day: 2,
			slot: '11:00-11:30',
			title: 'Coffee Break',
			speakers: []
		},
		{
			day: 2,
			slot: '11:30-12:00',
			title: 'The Evolution of React UI Development',
			speakers: ['Max Stoiber', 'Nik Graf']
		},
		{
			day: 2,
			slot: '12:00-12:30',
			title: 'Lightning Talks',
			speakers: ['Various Speakers']
		},
		{
			day: 2,
			slot: '12:30-14:00',
			title: 'French Buffet',
			speakers: []
		},
		{
			day: 2,
			slot: '14:00-14:30',
			title: 'Recomposing your React application',
			speakers: ['Andrew Clark']
		},
		{
			day: 2,
			slot: '14:30-15:00',
			title: 'JavaScript, React Native and Performance',
			speakers: ['Tadeu Zagallo']
		},
		{
			day: 2,
			slot: '15:00-15:30',
			title: 'Coffee Break',
			speakers: []
		},
		{
			day: 2,
			slot: '15:30-16:00',
			title: 'Falcor: One Model Everywhere',
			speakers: ['Jafar Husain']
		},
		{
			day: 2,
			slot: '16:00-16:30',
			title: 'React with feeds and other long lists',
			speakers: ['Brent Vatne']
		},
		{
			day: 2,
			slot: '16:30-17:00',
			title: 'Coffee Break',
			speakers: []
		},
		{
			day: 2,
			slot: '17:00-17:30',
			title: 'GraphQL Future',
			speakers: ['Laney Kuenzel', 'Lee Bryon']
		},
		{
			day: 2,
			slot: '17:30-18:00',
			title: 'Progressive Enhancement for mobile apps: exploring the continuum between web apps and React Native',
			speakers: ['Martijn Walraven']
		},
		{
			day: 2,
			slot: '18:00-19:00',
			title: 'Q&A',
			speakers: ['Team']
		},
		{
			day: 2,
			slot: '19:00-20:00',
			title: 'Impromptu Lightning Talks Session',
			speakers: []
		},
		{
			day: 2,
			slot: '19:00-22:00',
			title: 'Drink Up',
			speakers: []
		}
	];

  sessions.forEach(session => {
    createSessionPromise.push(Session.create(session));
  });

  return Promise.all(createSessionPromise);
}

const closeConnection = () => {
  mongoose.connection.close(() => {
    console.log('Mongoose connection disconnected');
  });
};

async function initSeed() {
  await mongoose.connect(''); // Your database endpoint goes here. Example: mongodb://user:password@ds999999.mlab.com:99999/myApp

  console.log('***** seeding session instances...');
	await sessionSeeder();

	closeConnection();
}

initSeed();
