import { useEffect, useState } from "react";
import { getAnimales } from '../services/main'

function Us() {

    const [animales, setAnimales] = useState([]);

    useEffect(() => {
        console.log("Entro al componente Us");
        getAnimales().then((response) => {
            console.log(response.data.data);
            setAnimales(response.data.data); // esto es como asiganle el valor a aniamales
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
                    <h1>Formulario</h1>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Animal</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">Escribe el nombre de un animal.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Cantidad</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-primary">Guardar</button>
                    </form>

                </div>
            </div>
            <hr />
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
                                        <tr key={animal.id}>
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