import SingleProyect from "./SingleProyect";

export default function Proyectos() {
    return (
        <section className="proyectos">
        <h2>Mis proyectos</h2>
        <ul>
            <SingleProyect
                titulo="Todo list"
                descripcion="Lista de tareas básica programada con react"
                link="https://raultl12.github.io/reactTodo/"
            />

            <SingleProyect
                titulo="App de perros"
                descripcion="Devuelve una foto de un perro de forma aleatoria haciendo un fetch a una api"
                link="https://raultl12.github.io/DogsWebApp/"
            />
        </ul>
        </section>
    )
    }