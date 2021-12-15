//AS ALWAYS, 
//DATA SECTION

import React, {useState} from 'react';

//LOGIC SECTION
const Login=(props)=>{ //props will be used later when we start doing authentiky
    //DATA SECTION
    const initialState={
        username: '',
        password: ''
    }

    const [state,setState] = useState(initialState);

    //LOGIC SECTION

    const onChange=(event)=>{
        setState({
            ...state, //we need our state so we can mutate the object, hence spread here
            [event.target.name]: event.target.value
        })
    };

    const onSubmit=(event)=>{
        event.preventDefault();
        console.log(state); //first, we must make sure we are passing correct data to state!
    }

    //RETURN SECTION

    return (
    <div className='login'>
        <h1>L O G I N</h1>

        <form onSubmit={onSubmit}>
            <label name='username'>
            USERNAME
            <input 
            name='username'
            type='text'
            value={state.username}
            onChange={onChange}
            />
            </label>

            <label name='password'>
            PASSWORD
            <input 
            name='password'
            type='password'
            value={state.password}
            onChange={onChange}
            />
            </label>
            <button onClick={onSubmit}>CLICKA-ME to LOG-IN!</button>
        </form>
    </div>
    );
}
//RETURN SECTION
export default Login;