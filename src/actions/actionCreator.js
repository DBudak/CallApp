//Make a call
export function call(name, phone){
    return {
        type: 'MAKE_CALL',
        name,
        phone
    }
}

//Create text
export function text(name,phone,text){
    return {
        type: 'CREATE_TEXT',
        name,
        phone,
        text
    }
}

//Create new contact
export function newContact(name, phone){
    return{
        type: 'CREATE_CONTACT',
        name,
        phone
    }
}