"use client";

import React, { useState } from "react";
import styles from "../styles/PreguntasFrecuentes.module.scss";

const PreguntasFrecuentes = () => {
  const [preguntaAbierta, setPreguntaAbierta] = useState(null);

  const preguntas = [
    {
      id: 1,
      pregunta: "¿Qué es la cirugía laparoscópica y cuáles son sus ventajas?",
      respuesta:
        "La cirugía laparoscópica es una técnica mínimamente invasiva que utiliza pequeñas incisiones (5-10mm) en lugar de una gran abertura. Sus principales ventajas incluyen: menor dolor postoperatorio, recuperación más rápida, cicatrices mínimas, menor riesgo de infección, y retorno más temprano a las actividades normales.",
    },
    {
      id: 2,
      pregunta:
        "¿Cuánto tiempo dura la recuperación después de una colecistectomía laparoscópica?",
      respuesta:
        "La recuperación típica es de 1-2 semanas para actividades normales y 4-6 semanas para actividades físicas intensas. La mayoría de pacientes pueden regresar al trabajo en 3-7 días, dependiendo del tipo de trabajo. El alta hospitalaria suele ser en 24-48 horas.",
    },
    {
      id: 3,
      pregunta: "¿Necesito preparación especial para una endoscopia?",
      respuesta:
        "Sí, la preparación varía según el tipo de endoscopia. Para endoscopia alta: ayuno de 8-12 horas. Para colonoscopia: dieta líquida y preparación intestinal con medicamentos específicos 1-2 días antes. Se proporcionan instrucciones detalladas previo al procedimiento.",
    },
    {
      id: 4,
      pregunta: "¿Cuándo es necesaria la cirugía de vesícula?",
      respuesta:
        "La cirugía de vesícula (colecistectomía) está indicada en casos de: cálculos biliares sintomáticos con dolor recurrente, colecistitis aguda, pólipos de vesícula mayores a 1cm, o complicaciones como pancreatitis biliar. No todos los cálculos requieren cirugía.",
    },
    {
      id: 5,
      pregunta: "¿Qué tipos de hernias se pueden operar por laparoscopia?",
      respuesta:
        "Se pueden operar por laparoscopia: hernias inguinales bilaterales, hernias recurrentes, hernias ventrales o incisionales, y algunas hernias inguinales unilaterales. La técnica se selecciona según el tamaño, ubicación y características específicas de cada hernia.",
    },
    {
      id: 6,
      pregunta: "¿Cuáles son los riesgos de la cirugía laparoscópica?",
      respuesta:
        "Aunque es muy segura, los riesgos incluyen: sangrado menor, infección de heridas (raro), lesión inadvertida de órganos vecinos (muy raro), y riesgos anestésicos habituales. La tasa de complicaciones es significativamente menor que en cirugía abierta.",
    },
    {
      id: 7,
      pregunta: "¿Puedo comer normalmente después de una cirugía de vesícula?",
      respuesta:
        "Inicialmente se recomienda dieta blanda y baja en grasas. Gradualmente se pueden reintroducir alimentos normales. Algunas personas pueden experimentar molestias digestivas temporales. La mayoría de pacientes toleran una dieta normal en 2-4 semanas.",
    },
    {
      id: 8,
      pregunta: "¿Qué debo hacer si tengo síntomas después de una cirugía?",
      respuesta:
        "Contacte inmediatamente si presenta: fiebre superior a 38.5°C, dolor intenso no controlado con medicamentos, sangrado excesivo, náuseas y vómitos persistentes, o signos de infección en las heridas. Siempre es mejor consultar ante cualquier duda.",
    },
  ];

  const togglePregunta = (id) => {
    setPreguntaAbierta(preguntaAbierta === id ? null : id);
  };

  return (
    <section id="preguntas-frecuentes" className={styles.faq}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2>Preguntas Frecuentes</h2>
          <p>
            Respuestas a las consultas más comunes sobre procedimientos
            quirúrgicos
          </p>
        </header>

        <div className={styles.preguntasContainer}>
          {preguntas.map((item) => (
            <article key={item.id} className={styles.preguntaItem}>
              <button
                className={`${styles.preguntaButton} ${
                  preguntaAbierta === item.id ? styles.activa : ""
                }`}
                onClick={() => togglePregunta(item.id)}
                aria-expanded={preguntaAbierta === item.id}
              >
                <span className={styles.preguntaTexto}>{item.pregunta}</span>
                <span className={styles.icono}>
                  {preguntaAbierta === item.id ? "−" : "+"}
                </span>
              </button>

              <div
                className={`${styles.respuesta} ${
                  preguntaAbierta === item.id ? styles.abierta : ""
                }`}
              >
                <p>{item.respuesta}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.contactoAdicional}>
          <h3>¿No encuentra la respuesta que busca?</h3>
          <p>
            Contáctenos directamente para resolver sus dudas específicas sobre
            cualquier procedimiento médico.
          </p>
          <div className={styles.contactoButtons}>
            <a href="tel:+573138627818" className={styles.telefonoButton}>
              📞 Llamar al Dr. Solarte
            </a>
            <a
              href="https://wa.me/573174503604"
              className={styles.whatsappButton}
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreguntasFrecuentes;
