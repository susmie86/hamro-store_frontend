import React from 'react'

function Infobox({ value, title }) {
    return (
        <div className="infobox">
            <h3 className="infobox-title">{title}</h3>
            <p className="infobox-value">
                {(value) ? value : `please enter your ${title}`}
            </p>
        </div>
    )
}

export default Infobox