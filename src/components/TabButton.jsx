import React from 'react'

export default function TabButton({ children, onSelect }) {
    function handleClick() {
        console.log("Button Clicked");
    }
    return (
        <li><button onClick={onSelect}>{children}</button></li>
    )
}

