import React, { useState } from "react";
import { add } from "./calculator";

const StringCalculator = () => {

    const [value, setValue] = useState("");
    const [result, setResult] = useState("");
    const [isError, setIsError] = useState(false);

    const handleAdd = () => {
        try {
            setResult(add(value));
            setValue("");
            setIsError(false);
        } catch (error) {
            setResult(error.message);
            setIsError(true)
            setValue("")
        }
    }
    return (
        <div className="calculator">
            <h2>String Calcluator TDD Kata</h2>
            <div className="form-group">
                <label>Input</label>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter Value" />
                <button onClick={handleAdd}>Add</button>
            </div>
            <p> Calculated Value:
                <span className={isError ? 'error' : 'success'}>&quot;{result}&quot;</span>
            </p>
        </div>
    )
}
export default StringCalculator;