import React from "react";

export default function SearchForm({ handleSubmit, setInput }) {
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Zip Code'
                required
                onChange={(e) => setInput(e.target.value)}
            />
            <input type='submit' />
        </form>
    );
}
