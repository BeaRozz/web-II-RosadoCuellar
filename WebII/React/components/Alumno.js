const { useState } = React;

function Alumno({alumno}) {
  
    const [visible, setVisible] = useState(true);

    function verInfo(){
        setVisible(!visible);
    }

    return (
        <div>
            <button onClick={verInfo}>Ver alumno: {alumno.nombre}</button>
            <div style={{display: visible? 'block': 'none'}}>
                <p>Este es el alumno {alumno.nombre}</p>
                <p>Calificacion: {alumno.calificacion}</p>
                <p>Materia: {alumno.materia}</p>
            </div>
        </div>
    )
}
  
window.Alumno = Alumno;