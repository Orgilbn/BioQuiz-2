import React from "react";
import './DrawerComponent.css';
const DrawerComponent = ({title, icon, onClick, method}) => {
    return(
        <div className="DrawerComWrapper" onClick={onClick}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{marginRight: 10}}>{icon}</div>
                <div>{title}</div>
            </div>
            <div>{method}</div>
        </div>
    )
}

export default DrawerComponent;