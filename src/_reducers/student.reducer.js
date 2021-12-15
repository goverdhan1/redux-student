const initialState = { anchor: 'left',
    student: [],
    open: false,
    id: '1',  
    name: 'Goverdhan',
    gender: 'Male',
    dob: '09-08-1984'
 };


export function student(state = initialState, action) {
    switch (action.type) {
        case 'FETECHED_ALL_STUDENT':
            return {
            ...state,
            student: action.student
            };
        case 'STUDENT_DETAIL':
            return {
                ...state,
                id: action.id,  
                name: action.name,
                gender: action.gender,
                dob: action.dob
            };
        case "USER_UPDATED":
            return state;
        case "HANDLE_ON_CHANGE":
            return {
                ...state,
                [action.props]: action.value
            };    
        default:
            return state
    }
  }