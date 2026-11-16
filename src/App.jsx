import './App.css';
import foto_cv from './assets/foto_cv.jpg';

function App() {
  return (
    <div className="contenedor-principal">
        {/* Header: cabecera con la foto de perfil, el nombre, el título profesional y los datos de contacto. */}
        <div className="header">
          <img 
            src={foto_cv} 
            alt="Mi foto" 
            className="foto-perfil"
          />
          <div className="texto_header">
            <h1>Noelia Orleans López</h1>
            <h2>Estudiante de Desarrollo de Aplicaciones Multiplataforma</h2>
            <p> noeliaorleans@gmail.com |  655640635 |  Zaragoza</p>
          </div>
        </div>

    {/* Div para diferenciar la parte izquierda (sobre mí, habilidades e idiomas) de la derecha (exp. laboral, educación, certificaciones y proyectos) */}
    <div className="contenido">
        <div className="parte-izquierda">
          
          {/* Sobre Mí:  */}
          <div className="seccion">
            <h2 className="titulo-seccion">Sobre Mí</h2>
            <p>
              Estudiante de 2.º de Desarrollo de Aplicaciones Multiplataforma, con especial interés en Data Engineering, Inteligencia Artificial y Machine Learning, y una visión abierta hacia otras áreas del sector IT. <br />
            </p>
          </div>

          {/* Habilidades */}
          <div className="seccion">
            <h2 className="titulo-seccion">Habilidades</h2>
            <div className="lista-habilidades">
              <div className="habilidad">Python</div>
              <div className="habilidad">SQL</div>
              <div className="habilidad">Pandas</div>
              <div className="habilidad">Matplotlib</div>
              <div className="habilidad">Seaborn</div>
              <div className="habilidad">Power BI</div>
              <div className="habilidad">Tensorflow</div>
              <div className="habilidad">Scikit-Learn</div>
              <div className="habilidad">Microsoft Azure</div>
            </div>
          </div>

          <div className="seccion">
            <h2 className="titulo-seccion">Idiomas</h2>
            <div className="lista-idiomas">
              <div className="idioma">Español</div><br />
              <div className="idioma">Inglés</div>
            </div>
          </div>

        </div>
        
        <div className='parte-derecha'>
          {/* Experiencia */}
          <div className="seccion">
            <h2 className="titulo-seccion">Experiencia laboral</h2>

            <div className="item-experiencia">
              <h3>Policía Nacional</h3>
              <p className="empresa">Ministerio del Interior</p>
              <p className="periodo">septiembre 2021 - noviembre 2024</p>
              <p>Policía Nacional Escala Básica, funciones tanto administrativas como operativas</p>
            </div>
          </div>

          {/* Educación */}
          <div className="seccion">
            <h2 className="titulo-seccion">Educación</h2>

            <div className="item-experiencia">
              <h3>Grado en Derecho</h3>
              <p className="empresa">Universidad de Zaragoza</p>
              <p className="periodo">2017 - 2021</p>
            </div>

            <div className="item-experiencia">
              <h3>Desarrollo de Aplicaciones Multiplataforma</h3>
              <p className="empresa">CPIFP Los Enlaces</p>
              <p className="periodo">2025 - cursando en la actualidad</p>
            </div>
          </div>

          {/* Certificaciones */}
          <div className="seccion">
            <h2 className="titulo-seccion">Certificaciones</h2>

            <div className="item-experiencia">
              <h3>Microsoft AI-901</h3>
              <p className="empresa">Microsoft</p>
              <p className="periodo">octubre 2026</p>
              <p>AI-901: Aspectos básicos de la inteligencia artificial de Microsoft Azure</p>
            </div>

            <div className="item-experiencia">
              <h3>B2 First</h3>
              <p className="empresa">Cambridge</p>
              <p className="periodo">junio 2019</p>
              <p>B2 First FCE</p>
            </div>
          </div>

          {/* Proyectos */}
          <div className="seccion">
            <h2 className="titulo-seccion">Proyectos</h2>

            <div className="item-experiencia">
              <h3>Análisis de Datos mediante el Consumo de una API</h3>
              <p>Proyecto de análisis exploratorio de datos mediante el consumo de APIs. Integración de TheDogApi con Python para obtener, limpiar y transformar datos sobre distintas razas de perros. Análisis de la distribución de la esperanza de vida y de los temperamentos más frecuentes mediante Pandas y visualizaciones gráficas con Matplotlib/Seaborn.</p>
              <a href="https://github.com/NoeliaORLO/Analisis-BD-Perros-API" target='_blank'>Enlace a Github</a>
            </div>

            <div className="item-experiencia">
              <h3>Optimización y Selección de Características en Modelos de Machine Learning</h3>
              <p>Proyecto de segmentación de clientes mediante técnicas de Aprendizaje No Supervisado</p>
              <a href="https://github.com/NoeliaORLO/Proyecto-Analisis-y-Clasificacion-Clientes-Aprendizaje-No-Supervisado" target='_blank'>Enlace a Github</a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;