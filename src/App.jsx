import Proyectos from "./components/Proyectos"

function App() {

  return (
    <div>

      <header>
        <h1>Hola, soy Raúl Torrente López</h1>
        <img src="/Perfil.jpg" alt="Foto de perfil" />
      </header>

      <main>
        <section className="historia">
          <h2>Estudiante de 4º año de Ingeniería Informática de la UGR. Apasionado de la tecnología y la programación.</h2>
        </section>

        <Proyectos />

        <footer>
          <a href="https://github.com/raultl12">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png " alt="Developer: raultl12"/>
          </a>

          <a href="https://www.instagram.com/raultl_12/?hl=es">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram: raultl_12" />
          </a>

          <a href="https://www.instagram.com/raultl_12/?hl=es">
            <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="Instagram: raultl_12" />
          </a>
          
        </footer>
      </main>
    </div>
  )
}

export default App
