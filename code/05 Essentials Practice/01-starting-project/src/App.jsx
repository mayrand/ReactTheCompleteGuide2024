import logo from './assets/investment-calculator-logo.png'
import Header from "./compoonents/Header.jsx";
import UserInput from "./compoonents/UserInput.jsx";
import {useState} from "react";
import Results from "./compoonents/Results.jsx";
import {calculateInvestmentResults} from "./util/investment.js"

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    })
        
    function handleChange(inputIdentifier, newValue){
        setUserInput((prevInput)=>{
            return {
                ...prevInput,
                [inputIdentifier]: +newValue
            }
        })
    }
    return <>
        <Header/>
        <UserInput userInput={userInput} onChange={handleChange}/>
        <Results resultsData={calculateInvestmentResults(userInput)}/>
    </>
}

export default App
