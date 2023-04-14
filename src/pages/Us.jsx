import { useEffect, useState } from "react";
import { getAnimales, createAnimal } from '../services/main'

function Us() {

    const [animales, setAnimales] = useState([]);
    const [formAnimales, setFormAnimales] = useState({
        nombre: "",
        cantidad: "",
    });

    const handleInputChange = (event)=> {
        // console.log(event.target.name);
        // console.log(event.target.value);
        // const {name, value } = event.target;
        setFormAnimales({
            ...formAnimales,
            [event.target.name]: event.target.value // name:"oso" o cantidad:"2"
        });
    }

    const guardarFormulario = async (event) => {
        // Async es para menar promesas con await
        // Esta linea evita la recarga automatica al presionar guardar
        event.preventDefault();
        console.log(formAnimales);
        let respuesta = await createAnimal(formAnimales);
        console.log(respuesta);
        loadAnimales();
        // aqui pondre la logica de guardado
    }

    useEffect(() => {
        console.log("Entro al componente Us");
        loadAnimales();
        // return () => {
        //     console.log("Salio del componente.")
        // }
    }, []);

    const loadAnimales = ()=> {
        getAnimales().then((response) => {
            console.log(response.data.data);
            setAnimales(response.data.data); // esto es como asiganle el valor a aniamales
        })
    }

    // implementar delete

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Formulario</h1>
                    <form onSubmit={guardarFormulario}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Animal</label>
                            <input type="text" className="form-control" name="nombre" onChange={handleInputChange}/>
                            <div id="emailHelp" className="form-text">Escribe el nombre de un animal.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Cantidad</label>
                            <input type="text" className="form-control" name="cantidad" onChange={handleInputChange}/>
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
                                                <button type="button" className="btn btn-danger">Eliminar</button>
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