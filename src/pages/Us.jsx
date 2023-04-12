import { useEffect, useState } from "react";
import { getAnimales } from '../services/main'

function Us() {

    const [animales, setAnimales] = useState([]);

    useEffect(() => {
        console.log("Entro al componente Us");
        getAnimales().then((response) => {
            console.log(response.data.data);
            setAnimales(response.data.data);
        })
        // return () => {
        //     console.log("Salio del componente.")
        // }
    }, []);

    // implementar delete

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Pagina Us</h1>
                </div>
                <div className="col-md-12">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Animal</th>
                                <th>Cantidad</th>
                                <th>Fecha</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                animales.map((animal) => {
                                    return (
                                        <tr>
                                            <th>{animal.id}</th>
                                            <td>{animal.nombre}</td>
                                            <td>{animal.cantidad}</td>
                                            <td>{animal.fecha_registro}</td>
                                            <td>
                                                <button type="button" class="btn btn-danger">Eliminar</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
}

export default Us;