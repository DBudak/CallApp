import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

function contacts(state = [], action){
    switch(action.type){
        case 'CREATE_CONTACT':
            return [
                {
                    name: action.name,
                    phone: action.phone
                },
                ...state
            ]
        default:
            return state;
    }
}

function callHistory(state = [], action){
     switch(action.type){
        case 'MAKE_CALL':
            console.log('reducer call action received');
            return [
                {
                    type: 'PHONE_CALL',
                    name: action.name,
                    phone: action.phone,
                    text: ''
                },
                ...state
            ]
        case 'CREATE_TEXT':
        console.log('reducer text action received');
            return [
                {
                    type:'TEXT_MESSAGE',
                    name: action.name,
                    phone: action.phone,
                    text: action.text
                },
                ...state
            ];
        default:
            return state;
    }   
}

const rootReducer = combineReducers({
    contacts,
    callHistory,
    routing: routerReducer
});

export default rootReducer;