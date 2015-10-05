/* global variable dates
 * contains Strings of dates
 */
var dates = [
    'Dienstag, 8. Juli 2014',
    'Mittwoch, 9. Juli 2014',
    'Donnerstag, 10. Juli 2014',
    'Freitag, 11. Juli 2014',
    'Samstag, 12. Juli 2014',
    'Sonntag, 13. Juli 2014',
    'Montag, 14. Juli 2014'
];

/* global WEATHER ARRAY
 * contains (for seven days) WEATHER objects with different weather attributes:
 * date - String
 * condition - String (equivalent to image filename)
 * max - Number [°C]
 * min - Number [°C]
 * description - String 
 * detail - array of DETAIL objects with the following attributes
 *    hour - Number
 *    condition - String (equivalent to image filename)
 *    temp - Number [°C]
 *    rainrisk - Number [%]
 *    wind - Number [km/h]
 */

var weather = [
    {
        date:           'Dienstag, 8. Juli 2014',
		condition:      'regnerisch',
		max:            '19',
		min:            '16',
		description:    'Es werden Höchsttemperaturen von 19° (gefühlt: 18°) und mäßiger Wind (24 km/h) aus Westsüdwest mit steifen Böen (52 km/h) erwartet. Es kommt zu Niederschlagsmengen von 10 - 20 l/m², die Niederschlagswahrscheinlichkeit beträgt 93%, die Sonne scheint 1,5 Stunden.',
		detail: [
			{
				hour:       '06',
				condition:  'wolkig',
				temp:       '17',
				rainrisk:   '0',
				wind:       '30'
			},
			{
				hour:       '12',
				condition:  'regnerisch',
				temp:       '15',
				rainrisk:   '81',
				wind:       '48'
			},
			{
				hour:       '18',
				condition:  'regnerisch',
				temp:       '12',
				rainrisk:   '91',
				wind:       '52'
			},
			{
				hour:       '25',
				condition:  'regnerisch',
				temp:       '11',
				rainrisk:   '87',
				wind:       '44'
			}
		]
    },
    {
        date:           'Mittwoch, 9. Juli 2014',
		condition:      'regnerisch',
		max:            '13',
		min:            '11',
		description:    'Es werden Höchsttemperaturen von 13° (gefühlt: 11°) und mäßiger Wind (19 km/h) aus West mit starken Böen (44 km/h) erwartet. Es kommt zu Niederschlagsmengen von 5 - 15 l/m², die Niederschlagswahrscheinlichkeit beträgt 95%, die Sonne scheint nicht.',
		detail: [
			{
				hour:       '06',
				condition:  'regnerisch',
				temp:       '11',
				rainrisk:   '87',
				wind:       '43'
			},
			{
				hour:       '12',
				condition:  'regnerisch',
				temp:       '12',
				rainrisk:   '84',
				wind:       '44'
			},
			{
				hour:       '18',
				condition:  'wolkig',
				temp:       '12',
				rainrisk:   '66',
				wind:       '43'
			},
			{
				hour:       '25',
				condition:  'wolkig',
				temp:       '11',
				rainrisk:   '48',
				wind:       '30'
			}
		]
    },
    {
        date:           'Donnerstag, 10. Juli 2014',
		condition:      'meist wolkig',
		max:            '17',
		min:            '10',
		description:    'Es werden Höchsttemperaturen von 17° (gefühlt: 18°) und schwacher Wind (11 km/h) aus Westnordwest mit frischen Böen (30 km/h) erwartet. Es kommt zu Niederschlagsmengen von ≤ 0,5 l/m², die Niederschlagswahrscheinlichkeit beträgt 36%, die Sonne scheint 3 Stunden. ',
		detail: [
			{
				hour:       '06',
				condition:  'wolkig',
				temp:       '11',
				rainrisk:   '42',
				wind:       '20'
			},
			{
				hour:       '12',
				condition:  'meist wolkig',
				temp:       '15',
				rainrisk:   '32',
				wind:       '26'
			},
			{
				hour:       '18',
				condition:  'meist wolkig',
				temp:       '15',
				rainrisk:   '26',
				wind:       '26'
			},
			{
				hour:       '25',
				condition:  'meist wolkig',
				temp:       '12',
				rainrisk:   '28',
				wind:       '22'
			}
		]
    },
    {
        date:           'Freitag, 11. Juli 2014',
		condition:      'meist wolkig',
		max:            '19',
		min:            '11',
		description:    'Es werden Höchsttemperaturen von 19° (gefühlt: 20°) und schwacher Wind (11 km/h) aus Nordwest mit frischen Böen (30 km/h) erwartet. Es kommt zu Niederschlagsmengen von 2 - 4 l/m², die Niederschlagswahrscheinlichkeit beträgt 58%, die Sonne scheint 5 Stunden. ',
		detail: [
			{
				hour:       '06',
				condition:  'meist wolkig',
				temp:       '13',
				rainrisk:   '50',
				wind:       '19'
			},
			{
				hour:       '12',
				condition:  'meist wolkig',
				temp:       '16',
				rainrisk:   '38',
				wind:       '26'
			},
			{
				hour:       '18',
				condition:  'meist wolkig',
				temp:       '17',
				rainrisk:   '42',
				wind:       '30'
			},
			{
				hour:       '25',
				condition:  'wolkig',
				temp:       '14',
				rainrisk:   '45',
				wind:       '26'
			}
		]
    },
    {
        date:           'Samstag, 12. Juli 2014',
		condition:      'wechselhaft',
		max:            '21',
		min:            '13',
		description:    'Es werden Höchsttemperaturen von 21° (gefühlt: 22°) und leichte Brise (9 km/h) aus Westnordwest mit mäßigen Böen (26 km/h) erwartet. Es kommt zu Niederschlagsmengen von 4 - 8 l/m², die Niederschlagswahrscheinlichkeit beträgt 74%, die Sonne scheint 5,5 Stunden. ',
		detail: [
			{
				hour:       '06',
				condition:  'meist wolkig',
				temp:       '15',
				rainrisk:   '48',
				wind:       '7'
			},
			{
				hour:       '12',
				condition:  'meist wolkig',
				temp:       '19',
				rainrisk:   '16',
				wind:       '9'
			},
			{
				hour:       '18',
				condition:  'wechselhaft',
				temp:       '19',
				rainrisk:   '50',
				wind:       '7'
			},
			{
				hour:       '25',
				condition:  'gewittrig',
				temp:       '15',
				rainrisk:   '44',
				wind:       '7'
			}
		]
    },
    {
        date:           'Sonntag, 13. Juli 2014',
		condition:      'gewittrig',
		max:            '21',
		min:            '14',
		description:    'Es werden Höchsttemperaturen von 21° (gefühlt: 22°) und schwacher Wind (11 km/h) aus West mit frischen Böen (28 km/h) erwartet. Es kommt zu Niederschlagsmengen von 5 - 10 l/m², die Niederschlagswahrscheinlichkeit beträgt 79%, die Sonne scheint 5 Stunden. ',
		detail: [
			{
				hour:       '06',
				condition:  'meist wolkig',
				temp:       '16',
				rainrisk:   '41',
				wind:       '9'
			},
			{
				hour:       '12',
				condition:  'heiter',
				temp:       '20',
				rainrisk:   '41',
				wind:       '11'
			},
			{
				hour:       '18',
				condition:  'gewittrig',
				temp:       '19',
				rainrisk:   '52',
				wind:       '9'
			},
			{
				hour:       '25',
				condition:  'wolkig',
				temp:       '15',
				rainrisk:   '52',
				wind:       '9'
			}
		]
    },
    {
        date:           'Montag, 14. Juli 2014',
		condition:      'gewittrig',
		max:            '22',
		min:            '14',
		description:    'Es werden Höchsttemperaturen von 21° (gefühlt: 22°) und schwacher Wind (11 km/h) aus West mit mäßigen Böen (26 km/h) erwartet. Es kommt zu Niederschlagsmengen von 5 - 10 l/m², die Niederschlagswahrscheinlichkeit beträgt 85%, die Sonne scheint 6 Stunden.',
		detail: [
			{
				hour:       '06',
				condition:  'unbeständig',
				temp:       '16',
				rainrisk:   '48',
				wind:       '22'
			},
			{
				hour:       '12',
				condition:  'heiter',
				temp:       '20',
				rainrisk:   '16',
				wind:       '28'
			},
			{
				hour:       '18',
				condition:  'gewittrig',
				temp:       '19',
				rainrisk:   '60',
				wind:       '28'
			},
			{
				hour:       '25',
				condition:  'wechselhaft',
				temp:       '15',
				rainrisk:   '58',
				wind:       '22'
			}
		]
    }
];

/*names for wind strengths on the beaufort-scale between 0 and 12*/
var beaufort = [
    'Windstille',
    'leiser Zug',
    'leichte Brise',
    'schwache Brise',
    'mäßige Brise',
    'frische Brise',
    'starker Wind',
    'steifer Wind',
    'stürmischer Wind',
    'Sturm',
    'schwerer Sturm',
    'orkanartiger Sturm',
    'Orkan'
];