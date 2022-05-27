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
    }

    let capturaEntradaRaton = (event) => {
        let rojo = ramdomValue();
        let verde = ramdomValue();
        let azul = ramdomValue();        
        setStyle(({
            backgroundColor: "rgb(" + rojo + ", " + verde + "," + azul + ")",
            height: '255px',
            width: '255px'
        }));
    }
    let capturaSalidaRaton = (event) => {
        let rojo = ramdomValue();
        let verde = ramdomValue();
        let azul = ramdomValue();
        setStyle(({
            backgroundColor: "rgb(" + rojo + ", " + verde + "," + azul + ")",
            height: '255px',
            width: '255px'
        }));
    }

    function ramdomValue() {        
        return Math.floor(Math.random() * (255 - 0) + 1);
    }

    return (
        <div style={style}
        onMouseMove={capturarRaton}
        onMouseEnter={capturaEntradaRaton} 
        onMouseLeave={capturaSalidaRaton}>
            Prueba de cambio de color segun movamos el raton por el fondo coloreado
        </div>
    )
}

export default MouseColor;