import React from 'react'
import '../Dropdown/Dropdown.scss';
import dropdownArrow from "../../assets/icons/arrow.svg";
function Dropdown({ options }) {
    return (
        <div className="dropdown form-group">
            <select className="dropdown__select form-control-lg" data-style="btn-new">
                {
                    options.map((option) => (
                        <option value={option?.value}>{option.name}</option>
                    ))
                }
            </select>
            <img className="dropdown__arrow" src={dropdownArrow} alt="dropdownArrow" />
        </div >
    )
}

export default Dropdown
