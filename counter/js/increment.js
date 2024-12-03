const domContainer = document.getElementById("root");

// const myElementWithoutFunction = (
//     <div>
//         <h1 id="display">0</h1>
//         <div>
//             <button id="button">Increment +</button>
//         </div>
//     </div>
// );

const Increment = () => {
    const [value, setValue] = React.useState(0);

    return (
        <div>
            <h1>{value}</h1>
            <div>
                <button onClick={() => setValue(value + 1)} >Increment +</button>
                <button onClick={() => setValue(value - 1)} >Decreament-</button>
            </div>
        </div>
    );
}


// const myElement = React.createElement("div", null, React.createElement("h1", null, "Hello World!"));

ReactDOM.render(
    <div>
        <Increment /><Increment /><Increment />
    </div>,
    domContainer);