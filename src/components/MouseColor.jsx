import React, { useState } from 'react';

function MouseColor() {

    const style2 = {
        backgroundColor: 'blue',
        height: '255px',
        width: '255px'
    };

    const [style, setStyle] = useState(style2);
    const [stopColor, setStopColor] = useState(true);

    let capturarRaton = (event) => {        
        setStyle(({
            backgroundColor: "rgb(" + event.clientX + ", 0," + event.clientY + ")",
            height: '255px',
            width: '255px'
        }));
    }

    let capturaEntradaRaton = (event) => {
        console.log(stopColor);
        if (stopColor) {
            let rojo = ramdomValue();
            let verde = ramdomValue();
            let azul = ramdomValue();        
            setStyle(({
                backgroundColor: "rgb(" + rojo + ", " + verde + "," + azul + ")",
                height: '255px',
                width: '255px'
            }));
        }
    }
    let capturaSalidaRaton = (event) => {
        if (stopColor) {
            let rojo = ramdomValue();
            let verde = ramdomValue();
            let azul = ramdomValue();
            setStyle(({
                backgroundColor: "rgb(" + rojo + ", " + verde + "," + azul + ")",
                height: '255px',
                width: '255px'
            }));
        }
    }
    let dobleClick = (event) => {
        setStopColor((prevStopColor, props) => (
           !prevStopColor
        ));
    }

    function ramdomValue() {        
        return Math.floor(Math.random() * (255 - 0) + 1);
    }

    return (
        <div style={style}
        onMouseMove={capturarRaton}
        onMouseEnter={capturaEntradaRaton} 
        onMouseLeave={capturaSalidaRaton}
        onDoubleClick={dobleClick}>
            Prueba de cambio de color segun movamos el raton por el fondo coloreado.<br/>
            Si hacemos dobleClick activamos/desactivamos la generacion aleatoria de colores
        </div>
    )
}

export default MouseColor;