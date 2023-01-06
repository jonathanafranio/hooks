export default function reducer(state, action) {
    switch(action.type) {
        case 'number_add2' :
            return { ...state, number: state.number + 2 }

        //multiplicar o number por 7
        case 'number_multiply7' :
            return { ...state, number: state.number * 7 }

        //dividir o number por 25
        case 'number_divider25' :
            return { ...state, number: state.number / 25 }

        //fazer uma acao que vai fazer o parseInt no number
        case 'number_int' :
            return { ...state, number: parseInt( state.number ) }

        // add um num n um numero qualquer
        case 'number_addN' :
            return { ...state, number: state.number + action.n }

        case 'login':
            //return { ...state, user: { name: 'Jonathan' } }
            return { ...state, user: { name: action.payload } }
        default:
            return state
    }
}
