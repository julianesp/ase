"use client";

import React from "react";
import styles from "../styles/EspecialidadesMedicas.module.scss";

const EspecialidadesMedicas = () => {
  const especialidades = [
    {
      id: 1,
      titulo: "Cirugía Laparoscópica",
      descripcion:
        "Técnica mínimamente invasiva que permite realizar intervenciones quirúrgicas a través de pequeñas incisiones, reduciendo el dolor postoperatorio y acelerando la recuperación.",
      procedimientos: [
        "Colecistectomía laparoscópica",
        "Apendicectomía laparoscópica",
        "Hernioplastia laparoscópica",
        "Cirugía de hernias inguinales",
      ],
      icono: "🔬",
      ventajas: [
        "Menor dolor postoperatorio",
        "Recuperación más rápida",
        "Cicatrices mínimas",
        "Menor riesgo de infección",
      ],
    },
    {
      id: 2,
      titulo: "Endoscopia Digestiva",
      descripcion:
        "Procedimientos diagnósticos y terapéuticos que permiten visualizar y tratar problemas del tracto digestivo sin necesidad de cirugía abierta.",
      procedimientos: [
        "Endoscopia digestiva alta",
        "Colonoscopia diagnóstica",
        "Polipectomía endoscópica",
        "Biopsia endoscópica",
      ],
      icono: "🔍",
      ventajas: [
        "Diagnóstico preciso",
        "Procedimiento ambulatorio",
        "Sin incisiones",
        "Resultados inmediatos",
      ],
    },
    {
      id: 3,
      titulo: "Cirugía General",
      descripcion:
        "Amplio espectro de procedimientos quirúrgicos para el tratamiento de patologías abdominales y de tejidos blandos.",
      procedimientos: [
        "Cirugía de vesícula biliar",
        "Tratamiento de hernias",
        "Cirugía de apéndice",
        "Procedimientos de pared abdominal",
      ],
      icono: "⚕️",
      ventajas: [
        "Experiencia comprobada",
        "Técnicas actualizadas",
        "Atención personalizada",
        "Seguimiento integral",
      ],
    },
  ];

  return (
    <section id="especialidades" className={styles.especialidades}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2>Especialidades Médicas</h2>
          <p>
            Servicios especializados en cirugía general, laparoscopia y
            endoscopia
          </p>
        </header>

        <div className={styles.especialidadesGrid}>
          {especialidades.map((especialidad) => (
            <article key={especialidad.id} className={styles.especialidadCard}>
              <div className={styles.cardHeader}>
                <span className={styles.icono}>{especialidad.icono}</span>
                <h3>{especialidad.titulo}</h3>
              </div>

              <p className={styles.descripcion}>{especialidad.descripcion}</p>

              <div className={styles.procedimientos}>
                <h4>Procedimientos:</h4>
                <ul>
                  {especialidad.procedimientos.map((proc, index) => (
                    <li key={index}>{proc}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.ventajas}>
                <h4>Ventajas:</h4>
                <ul>
                  {especialidad.ventajas.map((ventaja, index) => (
                    <li key={index}>✓ {ventaja}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.cta}>
          <h3>¿Necesita más información?</h3>
          <p>
            Consulte con el Dr. Alirio Solarte España para evaluar su caso
            específico
          </p>
          <a href="tel:+573138627818" className={styles.ctaButton}>
            Solicitar Consulta
          </a>
        </div>
      </div>
    </section>
  );
};

export default EspecialidadesMedicas;
