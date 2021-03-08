
///// this is global state / redux store 

const INITIAL_STATE = {
        user: [],
        current_user:{}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SETUSER':
            return ({
                ...state,
                current_user:action.payload
            })
        case 'SETFIREBASEDATA':
             return({
                    ...state,
                     user:action.payload
                    })    
                    
                    
                }
                return state;
}


