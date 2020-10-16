function Greeting(){ //функц component without props 
    return <h1>Hello, world!</h1>;
}

function Greeting1(props){ //функц component  with props
    return <h1>{props.name}</h1>;
}

function Greeting2(props){ //функц component  with props. олон html render лэнэ
    return(
    <div>
        <h1>{props.name}</h1>
        <p>{props.age}</p>
    </div>
    )
}

function EtsegComp(props){ // etseg ni dotroo 3 huu component aguulna
    return(
        <div>
            <Greeting/>
            <Greeting1 name={props.name}/>
            <Greeting2 name={props.name} age={props.age}/>
            <table> <tbody>
                <tr><td>{props.clas[0]}</td></tr>
                <tr><td>{props.clas[1]}</td></tr>
                <tr><td>{props.clas[2]}</td></tr>
                </tbody>
            </table>
        </div>
    )
}

ReactDOM.render(
    // <Greetings/>,
    // <Greeting1 name=" Hello! Bat"/>,
    // <Greeting2 name=" Hello! Bat" age='20'/>,
    <EtsegComp name="Sarah" age='22' clas={['ПХ', 'МС', 'НББМС']}/>,
document.getElementById('root')
);

