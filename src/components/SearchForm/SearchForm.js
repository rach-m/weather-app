import React from "react";
import "./SearchForm.css";

export default function SearchForm({ handleSubmit, setInput }) {
    return (
        <form onSubmit={handleSubmit}>
            <label id='zipcodeLabel' htmlFor='zipCode'>
                Zip Code:
            </label>
            <div id='inputContainer'>
                <input
                    id='zipCode'
                    type='text'
                    required
                    placeholder='10036'
                    onChange={(e) => setInput(e.target.value)}
                />
                <input id='submit' type='submit' value='Update' />
            </div>
        </form>
    );
}
