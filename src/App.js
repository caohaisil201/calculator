import { useRef } from "react";
import "./assets/style/_reset.scss";
import "./assets/style/_app.scss";
import Button from "./components/Button";
import Screen from "./components/Screen";

const buttonValues = [
    ['C','+-','%','/'],
    ['7','8','9','x'],
    ['4','5','6','-'],
    ['1','2','3','+'],
    ['0','.','='],
]

function App() {

    const resetClickHandler = (e) =>{

    }

    const invertClickHandler = (e)=>{

    }

    const percentClickHandler = (e) =>{

    }

    const equalsClickHandler = (e) =>{

    }

    const signClickHandler = (e) =>{
        
    }

    const commaClickHandler = (e) =>{
        
    }

    const numClickHandler = (e) =>{
        
    }

    return (
        <div className="App">
            <div className="container">
                <Screen value={0}/>
                <div className="board">
                    {buttonValues.flat().map((btn,index)=>{
                        return <Button
                                key={index} 
                                value={btn}
                                special={btn==='0'?true:false}
                                onClick={
                                    btn === 'C' ? resetClickHandler :
                                    btn === '+-' ? invertClickHandler :
                                    btn === '%' ? percentClickHandler : 
                                    btn === '=' ? equalsClickHandler :
                                    btn === '+' || btn === '-' || btn === 'x' || btn === '/' ? signClickHandler :
                                    btn === '.' ? commaClickHandler : numClickHandler
                                }
                        />
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
