//AS ALWAYS, 
//DATA SECTION

import React, {useState} from 'react';

//PSEUD EXPORT SECTION 
//somewhat 'logic', but since this is the default export...
const Login=(props)=>{ //props will be used later when we start doing authentiky
    const initialState={
        username: '',
        password: ''
    }

    const [state,setState] = useState(initialState);

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

    return (
    <div className='login'>
        <h1>L O G I N</h1>

        <form onSubmit={onSubmit}>
            <label name='username'>
            USERNAME
            <input 
            name='username'
            type='text'
            value={state}
            onChange={onChange}
            />
            </label>

            <label name='password'>
            PASSWORD
            <input 
            name='password'
            type='password'
            value={state}
            onChange={onChange}
            />
            </label>
            <button onClick={onSubmit}/>
        </form>
    </div>
    );
}

export default Login;