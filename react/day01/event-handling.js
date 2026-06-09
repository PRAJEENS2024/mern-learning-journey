function App(){

    function handleClick(){

        alert("Button Clicked");

    }

    return (

        <div>

            <h1>React Event Example</h1>

            <button onClick={handleClick}>

                Click Me

            </button>

        </div>

    );

}

export default App;