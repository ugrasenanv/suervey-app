import { UsersActions } from '../actions/users.actions';
import { User } from '../model/user';

const INITIAL_STATE: User[] = [{
		"id": 1,
		"first_name": "Farlie",
		"last_name": "Rehn",
		"email": "frehn0@nasa.gov",
		"gender": "Male",
		"phoneNumber": "751-527-6224",
		"comments": "Postgastric surgery synd",
		"rating": 1,
		"date": "9/3/2019"
	},
	{
		"id": 2,
		"first_name": "Katie",
		"last_name": "D'Onisi",
		"email": "kdonisi1@oracle.com",
		"gender": "Female",
		"phoneNumber": "726-155-2518",
		"comments": "Lt-for-date w/mal wtNOS",
		"rating": 2,
		"date": "12/1/2019"
	},
	{
		"id": 3,
		"first_name": "Maxwell",
		"last_name": "Rushbury",
		"email": "mrushbury2@nasa.gov",
		"gender": "Male",
		"phoneNumber": "404-280-5007",
		"comments": "Amp below elb, unil-comp",
		"rating": 3,
		"date": "4/2/2019"
	},
	{
		"id": 4,
		"first_name": "Shaine",
		"last_name": "Paxman",
		"email": "spaxman3@infoseek.co.jp",
		"gender": "Male",
		"phoneNumber": "672-464-8390",
		"comments": "Gall&bil cal w/ac w obs",
		"rating": 4,
		"date": "9/17/2019"
	},
	{
		"id": 5,
		"first_name": "Graham",
		"last_name": "Stranahan",
		"email": "gstranahan4@sfgate.com",
		"gender": "Male",
		"phoneNumber": "868-875-3167",
		"comments": "Neuritis-delivered w p/p",
		"rating": 5,
		"date": "1/29/2019"
	},
	{
		"id": 6,
		"first_name": "Garret",
		"last_name": "Aubry",
		"email": "gaubry5@xing.com",
		"gender": "Male",
		"phoneNumber": "697-967-9400",
		"comments": "Dermat d/t int agent NEC",
		"rating": 6,
		"date": "10/31/2019"
	}];

export function UsersReducer (
  state: User[] = INITIAL_STATE, action: any
  ): any {

  switch (action.type) {
    case UsersActions.USER_ADD:
      return [...state, action.payload];

    case UsersActions.USER_DELETE:
      return state.filter(({ id }) => id !== action.payload);

    default:
      return [...state];
  }
}

