export const About: React.FC = () => {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-indigo-950">
      <div className="w-full max-w-3xl mx-auto text-center">
        <h1 className="text-white text-5xl font-bold mb-10 tracking-tight">
          Instrucciones del Juego
        </h1>

        <section className="text-gray-200 mb-10">
          <p className="leading-relaxed max-w-xl mx-auto">
            En <strong className="text-white">MVP y Lean Startup</strong>{" "}
            competirás con tu equipo para construir el mejor mvp y así ganar el
            que tanto anhelan sus stakeholders,
            para ello se enfrentarán a mini desafíos de agilidad. Cada dinámica dura
            entre <strong>1 y 3 minutos</strong> y busca hacer alusión a algún
            concepto de agilidad:
          </p>

          <div className="mt-6 grid gap-2 text-lg">
            <p>✔ Crear funcionalidades</p>
            <p>✔ Lidiar con obstáculos reales</p>
            <p>✔ Ganar clientes</p>
            <p>✔ Fallar y mejorar rápidamente</p>
            <p>✔ Lidiar con la deuda técnica</p>
            <p>✔ Reflexionar, mejora continua</p>
          </div>
        </section>

        <div className="bg-gray-800 border border-gray-700 shadow-lg rounded-2xl p-8 text-gray-100">
          <h2 className="text-2xl font-bold mb-4">
            ¿De qué se trata el juego?
          </h2>
          <p className="text-sm text-gray-200 mb-4">
            El objetivo es acumular la mayor cantidad de puntos posibles
            completando actividades representadas por cartas de diferentes
            palos. Cada palo tiene un significado específico y afecta tu puntaje
            de distintas maneras.
          </p>

          <p className="text-2xl text-gray-200 mb-4">
            Regla por turno:
          </p>

          <ul className="text-left space-y-3 max-w-md mx-auto mb-4">
            <li>
              <span>
                - Una persona del grupo toma la primera carta del mazo y la lee en
                voz alta. En caso de haber, puede omitir este paso y hacer alguna feature en deuda técnica.
              </span>
            </li>

            <li>
              <span>
                - En la pantalla aparecerán el nombre, la descripción de la carta
                y el evento asociado.
              </span>
            </li>

            <li>
              <span>
                - El equipo deberá colaborar para resolver el desafío dentro del
                tiempo asignado. Si es una carta de funcionalidad se puede dejar la carta al costado
                y hacer más tarde. Esto corresponde a una deuda técnica. Al final del juego por cada carta
                de deuda técnica se restarán 20 puntos.
              </span>
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">Tipos de cartas</h3>

          <ul className="text-left space-y-3 max-w-md mx-auto">
            <li className="flex items-start gap-2">
              <span className="text-red-400 text-2xl">❤️</span>
              <p className="text-xl">
                <strong>Corazones:</strong> Ganar clientes. Siempre otorgan
                puntos (pueden ser muchos).
              </p>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-gray-300 text-2xl">♠️</span>
              <p className="text-xl">
                <strong>Espadas:</strong> Obstáculos reales. Restan puntos (pueden ser pocos).
              </p>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-yellow-300 text-2xl">♦️</span>
              <p className="text-xl">
                <strong>Diamantes:</strong> Actividades de aprendizaje,
                reflexión y mejora continua.
              </p>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-300 text-2xl">♣️</span>
              <p className="text-xl">
                <strong>Tréboles:</strong> Funcionalidades bajo presión. Según
                el resultado pueden sumar o restar puntos.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};
