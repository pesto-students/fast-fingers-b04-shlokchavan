import React from 'react'
import '../Input/Input.scss';
function Input({placeholder}) {
    return (
        <div className="input form-group">
            <input
                placeholder={placeholder}
                className="input__field form-control-lg" />
        </div>
    )
}

export default Input
