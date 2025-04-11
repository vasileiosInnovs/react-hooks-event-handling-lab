// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe() {
    function handleFocus() {
        console.log('Good!')
    }
    function handleBlur() {
        console.log('Hey! Eyes on me!')
    }
    
    return (
        <button onBlur={handleBlur} onFocus={handleFocus}>Eyes on me</button>
    )
    
}
export default EyesOnMe;