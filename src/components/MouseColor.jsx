import React, { useState } from 'react';

function MouseColor() {

    const style2 = {
        backgroundColor: 'blue',
        height: '255px',
        width: '255px'
    };

    const [style, setStyle] = useState(style2);

    let capturarRaton = (event) => {        
        setStyle(({
            backgroundColor: "rgb(" + event.clientX + ", 0," + event.clientY + ")",
            height: '255px',
            width: '255px'
        }));
        console.log(event.clientX);
        console.log(event.clientY);
    }

    return (
        <div style={style}
        onMouseMove={capturarRaton}>
            Prueba de cambio de color segun movamos el raton por el fondo coloreado
        </div>
    )
}

export default MouseColor;