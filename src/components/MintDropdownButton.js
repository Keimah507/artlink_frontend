import React from 'react';

const Dropdown = ({options, onSelect }) => {

    const handleSelect = (event) => {
        const selectedFunction = options[event.target.value];
        onSelect(selectedFunction);
    };


    return (
        <select onChange={handleSelect}>
            <option value=''>Mint</option>
            {options.map((func, index) => (
                <option key={index} value={index}>
                    {func.name}
                </option>
            ))}
        </select>
    );
};


const ButtonWithDropDown = ({ buttonText, options }) => {
    const [selectedFunction, setSelectedFunction] = React.useState(null);
    const [dropdownVisible, setDropdownVisible] = React.useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    }

    const handleSelect = (func) => {
        onSelect(func);
        toggleDropdown();
    }

    const executeFunction = () => {
        if (selectedFunction) {
            selectedFunction();
        }
    }

    return (
        <div className='submit-button'>
            <button id='mintButton' className='btn btn-primary' type='submit' disabled={isLoading} onClick={executeFunction}>
                {isLoading ? 'Minting...' : 'Mint'}
            </button>
        </div>
    )
}

module.exports = ButtonWithDropDown;