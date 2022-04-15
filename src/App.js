import { useRef, useState } from "react";
import "./assets/style/_reset.scss";
import "./assets/style/_app.scss";
import Button from "./components/Button";
import Screen from "./components/Screen";

const buttonValues = [
    ["CA", "+-", "%", "/"],
    ["7", "8", "9", "x"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
];

function App() {
    const [calc, setCalc] = useState({
        sign: "",
        number: 0,
        res: 0,
    });

    console.log(calc);

    const resetClickHandler = (e) => {
        e.preventDefault();
        setCalc({
            ...calc,
            sign: "",
            number: 0,
            res: 0,
        });
    };

    const invertClickHandler = (e) => {
        e.preventDefault();
        if(calc.number){
            setCalc({
                ...calc,
                number: Number(calc.number) * -1,
            })
        }else{
            setCalc({
                ...calc,
                res: Number(calc.res) * -1,
            })
        }
    };

    const percentClickHandler = (e) => {
        e.preventDefault();
        let number = Number(calc.number / 100);
        console.log(typeof number)
        let res = Number(calc.res/100);
        if(calc.number){
            setCalc({
                ...calc,
                number: number.toString().includes("e")
                    ? 0
                    // : number.toString().length > 12
                    // ? number.toFixed(10)
                    : +number.toString(),
            });
        }else{
            setCalc({
                ...calc,
                res: res.toString().includes("e")
                    ? 0
                    // : res.toString().length > 12
                    // ? res.toFixed(10)
                    : +res.toString(),
            });
        }
        
    };

    const equalsClickHandler = (e) => {
        e.preventDefault();
        const math = (a,b,sign) => sign==='+' ? a+b : sign === '-' ? a-b : sign === 'x' ? a*b : a/b
        if(calc.sign === '/' && calc.number ===0){
            console.log('can not divide by zero')
            return
        }
        if(calc.sign){
            setCalc({
                ...calc,
                res: math(calc.res,+calc.number,calc.sign),
                sign: '',
                number: 0,
            })
        }
    };

    const signClickHandler = (e) => {
        e.preventDefault();
        const value = e.target.innerHTML;
        setCalc({
            ...calc,
            sign: value,
            res: !calc.res && calc.number ? +calc.number : calc.res,
            number: 0,
        });
    };

    const commaClickHandler = (e) => {
        e.preventDefault();
        const value = e.target.innerHTML;
        setCalc({
            ...calc,
            number: !calc.number.toString().includes(".")
                ? calc.number + value
                : calc.number,
        });
    };

    const numClickHandler = (e) => {
        e.preventDefault();
        const number = e.target.innerHTML;
        if (calc.number <= 99999999 && calc.number.toString().length < 12) {
            setCalc({
                ...calc,
                number:
                    calc.number === 0 && number === "0"
                        ? 0
                        : calc.number.toString().includes(".")
                        ? calc.number + number
                        : calc.number % 1 === 0
                        ? Number(calc.number + number)
                        : calc.number + number,
            });
        }
    };

    return (
        <div className="App">
            <div className="container">
                <Screen value={calc.number ? calc.number : calc.res} />
                <div className="board">
                    {buttonValues.flat().map((btn, index) => {
                        return (
                            <Button
                                key={index}
                                value={btn}
                                special={btn === "0" ? true : false}
                                onClick={
                                    btn === "CA"
                                        ? resetClickHandler
                                        : btn === "+-"
                                        ? invertClickHandler
                                        : btn === "%"
                                        ? percentClickHandler
                                        : btn === "="
                                        ? equalsClickHandler
                                        : btn === "+" ||
                                          btn === "-" ||
                                          btn === "x" ||
                                          btn === "/"
                                        ? signClickHandler
                                        : btn === "."
                                        ? commaClickHandler
                                        : numClickHandler
                                }
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
