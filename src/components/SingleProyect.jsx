export default function SingleProyect({titulo, descripcion, link}) {
    return (
        <li>
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
            <a href={link}>
                <span className="material-symbols-outlined">link</span>
            </a>
        </li>
    )
    }