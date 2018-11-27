import React, { Component } from 'react'

var g = [

D: 7-14, 8-14, X, X, 7-15, 7-15, 6-14

TJ: X, X, X, X, 9-15, 4-14, 5-9

Alex: 8-14, 8-14, 8-14, X, 8-15, 8-15, X

Chris: X, 8-14, 8-14, X, 8-14, 8-14, 8-14

Humberto: 9-14, 8-14, X, 8-14, 8-15, X, 8-14

Amber: X, X, 8-14, 9-14, 9-15, 9-15, X

Madison: X, X, X, 9-14, 9-15, 9-15, X

Corrine: X, X, X, X, X, 10-15, 10-14

Jos: 3-11, 8-14, 3-11, 3-11, X, 7-14, 9-14

Mike: 7-14, 8-14, 9-14, 9-14, 7-15, 8-15, X

0 = 8am
1 = 9am
2 = 10am
3 =11am
4 = 12pm
5 = 1pm
6 = 2pm
7 = 3pm
8 = 4pm
9 = 5pm
10 = 6pm
11 = 7pm
12 = 8pm
13 = 9pm
14 = 10pm    ];

var schedule = {
  //tues
  '12-1': {
		Delaney: { start: '8', end: '14', pos: 'front' },
//   NO INFO!!!		Emily: { start: '', end: '', pos: '' },
		//TJ: { start: '', end: '', pos: '' },
//-------------------------------------------
    Alex: { start: '8', end: '14', pos: 'cook' },
    Chris: { start: '8', end: '14', pos: 'cook' },
//   NO INFO!!!		Connor: { start: '', end: '', pos: 'cook' },
		Humberto: { start: '8', end: '14', pos: 'cook' },
//  NO INFO!!!		Isidro: { start: '2', end: '3', pos: 'cook' },
  //---------------------------------------------
	//	Amber: { start: '', end: '', pos: '' },
	//	Madison: { start: '', end: '', pos: '' },
  //---------------------------------------------
	//	Corrine: { start: '', end: '', pos: 'driver' },
	//   NO INFO!!!	Jeff: { start: '', end: '', pos: '' },
		Josilyn: { start: '8', end: '14', pos: 'driver' },
	//   NO INFO!!!	Kyle: { start: '', end: '', pos: '' },
		'Mike P.': { start: '8', end: '14', pos: 'driver' },
	//    NO INFO!!!	Pierre: { start: '', end: '', pos: '' },
  //  Nolan: { start: '4', end: '5', pos: 'manager' },
	},
  //wed
  '12-2': {
//    Delaney: { start: '8', end: '1', pos: 'manager' },
//   NO INFO!!!		Emily: { start: '', end: '', pos: '' },
    //TJ: { start: '', end: '', pos: '' },
//-------------------------------------------
    Alex: { start: '8', end: '14', pos: 'cook' },
    Chris: { start: '8', end: '14', pos: 'cook' },
//   NO INFO!!!		Connor: { start: '', end: '', pos: 'cook' },
//    Humberto: { start: '8', end: '14', pos: 'cook' },
//  NO INFO!!!		Isidro: { start: '2', end: '3', pos: 'cook' },
  //---------------------------------------------
  	Amber: { start: '8', end: '14', pos: 'cook' },
  //	Madison: { start: '', end: '', pos: '' },
  //---------------------------------------------
  //	Corrine: { start: '', end: '', pos: 'driver' },
  //   NO INFO!!!	Jeff: { start: '', end: '', pos: '' },
    Josilyn: { start: '3', end: '11', pos: 'driver' },
  //   NO INFO!!!	Kyle: { start: '', end: '', pos: '' },
    'Mike P.': { start: '9', end: '14', pos: 'driver' },
  //    NO INFO!!!	Pierre: { start: '', end: '', pos: '' },
  //  Nolan: { start: '4', end: '5', pos: 'manager' },
  },
  //thurs
  '12-3': {
//    Delaney: { start: '7', end: '1', pos: 'manager' },
//   NO INFO!!!		Emily: { start: '', end: '', pos: '' },
    //TJ: { start: '', end: '', pos: '' },
//-------------------------------------------
//    Alex: { start: '8', end: '14', pos: 'cook' },
//    Chris: { start: '8', end: '14', pos: 'cook' },
//   NO INFO!!!		Connor: { start: '', end: '', pos: 'cook' },
    Humberto: { start: '8', end: '14', pos: 'cook' },
//  NO INFO!!!		Isidro: { start: '2', end: '3', pos: 'cook' },
  //---------------------------------------------
  	Amber: { start: '9', end: '14', pos: 'cook' },
  	Madison: { start: '9', end: '14', pos: 'cook' },
  //---------------------------------------------
  //	Corrine: { start: '', end: '', pos: 'driver' },
  //   NO INFO!!!	Jeff: { start: '', end: '', pos: '' },
    Josilyn: { start: '3', end: '11', pos: 'driver' },
  //   NO INFO!!!	Kyle: { start: '', end: '', pos: '' },
    'Mike P.': { start: '9', end: '14', pos: 'driver' },
  //    NO INFO!!!	Pierre: { start: '', end: '', pos: '' },
  //  Nolan: { start: '4', end: '5', pos: 'manager' },
  },
  //friday
  '12-4': {
    Delaney: { start: '7', end: '15', pos: 'front' },
//   NO INFO!!!		Emily: { start: '', end: '', pos: '' },
    TJ: { start: '9', end: '15', pos: 'front' },
//-------------------------------------------
    Alex: { start: '8', end: '15', pos: 'cook' },
    Chris: { start: '8', end: '14', pos: 'cook' },
//   NO INFO!!!		Connor: { start: '', end: '', pos: 'cook' },
    Humberto: { start: '8', end: '15', pos: 'cook' },
//  NO INFO!!!		Isidro: { start: '2', end: '3', pos: 'cook' },
  //---------------------------------------------
  	Amber: { start: '9', end: '15', pos: 'cook' },
  	Madison: { start: '9', end: '15', pos: 'cook' },
  //---------------------------------------------
  //	Corrine: { start: '', end: '', pos: 'driver' },
  //   NO INFO!!!	Jeff: { start: '', end: '', pos: '' },
  //  Josilyn: { start: '8', end: '14', pos: '' },
  //   NO INFO!!!	Kyle: { start: '', end: '', pos: '' },
    'Mike P.': { start: '7', end: '15', pos: 'driver' },
  //    NO INFO!!!	Pierre: { start: '', end: '', pos: '' },
  //  Nolan: { start: '4', end: '5', pos: 'manager' },
  },
  //sat
  '12-5': {
    Delaney: { start: '7', end: '15', pos: 'front' },
//   NO INFO!!!		Emily: { start: '', end: '', pos: '' },
    TJ: { start: '4', end: '14', pos: 'front' },
//-------------------------------------------
    Alex: { start: '8', end: '15', pos: 'cook' },
    Chris: { start: '8', end: '14', pos: 'cook' },
//   NO INFO!!!		Connor: { start: '', end: '', pos: 'cook' },
//    Humberto: { start: '9', end: '14', pos: 'cook' },
//  NO INFO!!!		Isidro: { start: '2', end: '3', pos: 'cook' },
  //---------------------------------------------
  	Amber: { start: '9', end: '15', pos: 'cook' },
  	Madison: { start: '9', end: '15', pos: 'cook' },
  //---------------------------------------------
  	Corrine: { start: '10', end: '15', pos: 'driver' },
  //   NO INFO!!!	Jeff: { start: '', end: '', pos: '' },
    Josilyn: { start: '7', end: '14', pos: 'driver' },
  //   NO INFO!!!	Kyle: { start: '', end: '', pos: '' },
    'Mike P.': { start: '8', end: '15', pos: 'driver' },
  //    NO INFO!!!	Pierre: { start: '', end: '', pos: '' },
  //  Nolan: { start: '4', end: '5', pos: 'manager' },
  },
  //sun
  '12-6': {
    Delaney: { start: '6', end: '14', pos: 'front' },
    TJ: { start: '4', end: '9', pos: 'front' },
//-------------------------------------------
//    Alex: { start: '8', end: '14', pos: 'cook' },
    Chris: { start: '8', end: '14', pos: 'cook' },
    Humberto: { start: '8', end: '14', pos: 'cook' },
  //	Amber: { start: '', end: '', pos: '' },
  //	Madison: { start: '', end: '', pos: '' },
  	Corrine: { start: '10', end: '15', pos: 'driver' },

    Josilyn: { start: '9', end: '14', pos: 'driver' },
  //  'Mike P.': { start: '7', end: '14', pos: '' },
  //  Nolan: { start: '4', end: '5', pos: 'manager' },
  },
  //monday
  '12-7': {
    Delaney: { start: '7', end: '14', pos: 'front' },
//   NO INFO!!!		Emily: { start: '', end: '', pos: '' },
    //TJ: { start: '', end: '', pos: '' },
//-------------------------------------------
    Alex: { start: '8', end: '14', pos: 'cook' },
//    Chris: { start: '8', end: '14', pos: 'cook' },
//   NO INFO!!!		Connor: { start: '', end: '', pos: 'cook' },
    Humberto: { start: '9', end: '14', pos: 'cook' },
//  NO INFO!!!		Isidro: { start: '2', end: '3', pos: 'cook' },
  //---------------------------------------------
  //	Amber: { start: '', end: '', pos: '' },
  //	Madison: { start: '', end: '', pos: '' },
  //---------------------------------------------
  //	Corrine: { start: '', end: '', pos: 'driver' },
  //   NO INFO!!!	Jeff: { start: '', end: '', pos: '' },
    Josilyn: { start: '3', end: '11', pos: 'driver' },
  //   NO INFO!!!	Kyle: { start: '', end: '', pos: '' },
    'Mike P.': { start: '7', end: '14', pos: 'driver' },
  //    NO INFO!!!	Pierre: { start: '', end: '', pos: '' },
  //  Nolan: { start: '4', end: '5', pos: 'manager' },
  },
}

export default Arp
