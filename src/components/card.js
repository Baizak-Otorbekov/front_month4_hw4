import React, { useState } from 'react'

const Card = ({ avatar, name, title, despretion }) => {

    return (
        <div className='card'>

            <img src={avatar} />
            {name}
            <div>
                <h3>{title}</h3>
                <p>
                    {despretion}
                </p>
            </div>

            <button>add to cart</button>
        </div>
    )
}

export default Card