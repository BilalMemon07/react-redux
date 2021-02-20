
///// this is global state / redux store 

const INITIAL_STATE = {
    users: [{
        name: 'Bilal',
        emial: 'bilal@gmail.com'
    },
    {
        name: 'Basit',
        email: 'basit@gmail.com'
    }

    ]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SETDATA':
            return ({
                ...state,
                users: [...state.users, action.data]
            })
        default:
            return state;

    }
}