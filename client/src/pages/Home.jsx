import { useState } from 'react'


function Home(props) {
    console.log(props)

    const state = useState(() => {
        return {
            bodyText: 'Hello World'
        }
    })

    fetch('http://localhost:9000/testAPI').then((res) => {
        console.log(res);
    })

    return (
        <div className="App">
            <h1>{state.bodyText}</h1>
        </div>

    );

}



export default Home;
