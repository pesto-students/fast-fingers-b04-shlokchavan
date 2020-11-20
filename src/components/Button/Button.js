import React from 'react'
import '../Button/Button.scss';
import playIcon from "../../assets/icons/play.svg";
function Button({ type, icon, title }) {
    const handleClick = () => {
        alert(`Let's go  🚀`);
    }
    return (
        <div className="button">

            {/* <img src={`${imagePath}${icon}.svg`} alt="button__icon" className="button__icon" /> */}
            <button type={type} className="button__element" onClick={handleClick}>
                {
                    icon === 'play' &&
                    <img src={playIcon} style={{
                        width: '60px',
                        height: '60px'
                    }} alt="button__playIcon" />
                }
                {title}
            </button>
        </div>
    )
}

export default Button
