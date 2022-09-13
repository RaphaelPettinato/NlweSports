interface buttonProps {
    title: string;
}


function Button(props: buttonProps){
    return (
        <button>{props.title}</button>
    )
}


function App() {
  return (
    <div>
        <Button title="First Button"/>
        <Button title="Second Button"/>
        <Button title="Third Button"/>
        <Button title="Fourth Button"/>
    </div>
  )
}

export default App
