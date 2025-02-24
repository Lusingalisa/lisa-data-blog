import React from 'react';

export default function TitleCard({associationName,departmentName}){
    return(
        <div style={{textAlign:"center"}}>
            <h1>{associationName}</h1>
            <h2>{departmentName}</h2>
            <h3>ASSOCIATION CHAPTERS</h3>

        </div>

    );
}