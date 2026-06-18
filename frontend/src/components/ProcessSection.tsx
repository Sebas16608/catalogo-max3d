const STEPS = [
  {
    number: "01",
    title: "Cuéntanos tu idea",
    description: "Comparte tu concepto, diseño o referencia. Te asesoramos para elegir el mejor enfoque.",
    color: "from-cyan-400 to-cyan-500",
  },
  {
    number: "02",
    title: "Diseño y optimización",
    description: "Preparamos y optimizamos tu modelo 3D para garantizar la mejor calidad de impresión.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    number: "03",
    title: "Impresión 3D",
    description: "Utilizamos tecnología FDM y SLA de alta precisión para materializar tu proyecto.",
    color: "from-blue-500 to-blue-600",
  },
  {
    number: "04",
    title: "Post-procesado",
    description: "Lijamos, pintamos y acabamos cada pieza para un resultado profesional impecable.",
    color: "from-blue-600 to-indigo-600",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100">
            Cómo funciona
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            De la idea al objeto físico en cuatro pasos simples. Todo el proceso es transparente y
            manteniéndote informado en cada etapa.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, index) => (
            <div key={step.number} className="relative group">
              {index < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-zinc-800 to-zinc-700">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border-t border-r border-zinc-600" />
                </div>
              )}

              <div className="relative rounded-xl bg-zinc-900 border border-zinc-800 p-6 transition-all duration-300 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${step.color} shadow-lg mb-4`}>
                  <span className="text-lg font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-lg font-semibold text-zinc-100">{step.title}</h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
