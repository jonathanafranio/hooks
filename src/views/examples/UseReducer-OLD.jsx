import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    cart: [],
    products: [],
    user: null,
    //foco...
    number: 0
}

function reducer(state, action) {
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

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                { state.user ?  
                    <span className="text">{ state.user.name }</span>
                    : <span className="text">Sem Usuário</span>
                }
                <span className="text">{ state.number }</span>

                <div>
                    <button className="btn" 
                        onClick={() => dispatch({ type: 'login', payload: 'Maria' })}>Login</button>
                    <button className="btn" 
                        onClick={() => dispatch({ type: 'number_add2' })}>+2</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'number_multiply7' })}>*7</button>
                    <button className="btn" 
                        onClick={() => dispatch({ type: 'number_divider25' })}>/ 25</button>
                    <button className="btn" 
                        onClick={() => dispatch({ type: 'number_int' })}>int</button>
                    <button className="btn" 
                        onClick={() => dispatch({ type: 'number_addN', n: 5 })}>+N</button>



                </div>
            </div>
        </div>
    )
}

export default UseReducer
