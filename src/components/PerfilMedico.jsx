"use client";

import React from "react";
import Image from "next/image";
import styles from "../styles/PerfilMedico.module.scss";

const PerfilMedico = () => {
  const formacion = [
    {
      titulo: "Médico Cirujano",
      institucion: "Universidad Nacional de Colombia",
      año: "2010",
    },
    {
      titulo: "Especialización en Cirugía General",
      institucion: "Hospital Universitario San Ignacio",
      año: "2015",
    },
    {
      titulo: "Entrenamiento en Cirugía Laparoscópica",
      institucion: "Instituto de Cirugía Mínimamente Invasiva",
      año: "2017",
    },
    {
      titulo: "Certificación en Endoscopia Digestiva",
      institucion: "Asociación Colombiana de Endoscopia Digestiva",
      año: "2018",
    },
  ];

  const experiencia = [
    {
      cargo: "Cirujano General",
      lugar: "Hospital Regional de Sibundoy",
      periodo: "2015 - Presente",
      descripcion: "Cirugía general, laparoscópica y endoscopia digestiva",
    },
    {
      cargo: "Médico Rural",
      lugar: "ESE Hospital Local de Mocoa",
      periodo: "2011 - 2015",
      descripcion: "Atención médica general y procedimientos menores",
    },
  ];

  const certificaciones = [
    "Registro Médico Nacional - Ministerio de Salud",
    "Especialista en Cirugía General - ASPAC",
    "Certificación en Laparoscopia Básica y Avanzada",
    "Acreditación en Endoscopia Digestiva Alta",
    "Curso de Soporte Vital Avanzado (ACLS)",
    "Miembro de la Sociedad Colombiana de Cirugía",
  ];

  const estadisticas = [
    { numero: "500+", descripcion: "Cirugías Laparoscópicas" },
    { numero: "1000+", descripcion: "Procedimientos Endoscópicos" },
    { numero: "15+", descripcion: "Años de Experiencia" },
    { numero: "98%", descripcion: "Tasa de Éxito" },
  ];

  return (
    <section id="perfil-medico" className={styles.perfilMedico}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.doctorInfo}>
              <h1>Dr. Alirio Solarte España</h1>
              <h2>Médico Cirujano General</h2>
              <p className={styles.especialidad}>
                Especialista en Cirugía Laparoscópica y Endoscopia Digestiva
              </p>
              <p className={styles.ubicacion}>
                📍 Sibundoy, Putumayo - Colombia
              </p>
            </div>
            <div className={styles.doctorImage}>
              <Image
                src="https://ihlfsrfme90d2jjk.public.blob.vercel-storage.com/images/doctor.jpg"
                alt="Dr. Alirio Solarte España"
                width={300}
                height={300}
                className={styles.imagen}
              />
            </div>
          </div>
        </header>

        <div className={styles.estadisticas}>
          {estadisticas.map((stat, index) => (
            <div key={index} className={styles.estadistica}>
              <h3 className="dark:bg-black text-black">{stat.numero}</h3>
              <p>{stat.descripcion}</p>
            </div>
          ))}
        </div>

        <div className={styles.contenidoPrincipal}>
          <section className={styles.biografia}>
            <h3>Acerca del Dr. Solarte</h3>
            <p>
              El Dr. Alirio Solarte España es un médico cirujano general con más
              de 15 años de experiencia en el campo de la cirugía. Especializado
              en técnicas mínimamente invasivas, ha dedicado su carrera
              profesional a brindar atención médica de alta calidad en la región
              de Putumayo.
            </p>
            <p>
              Su enfoque se centra en la cirugía laparoscópica y los
              procedimientos endoscópicos, técnicas que permiten una
              recuperación más rápida y menos dolorosa para los pacientes. El
              Dr. Solarte mantiene una actualización constante en las últimas
              técnicas quirúrgicas y tecnologías médicas.
            </p>
            <p>
              Comprometido con la excelencia médica y el bienestar de sus
              pacientes, combina experiencia técnica con un trato humano y
              personalizado, garantizando la mejor atención posible en cada
              procedimiento.
            </p>
          </section>

          <section className={styles.formacionSection}>
            <h3>Formación Académica</h3>
            <div className={styles.formacionList}>
              {formacion.map((item, index) => (
                <div key={index} className={styles.formacionItem}>
                  <div className={`${styles.año} `}>{item.año}</div>
                  <div className={styles.formacionContent}>
                    <h4>{item.titulo}</h4>
                    <p>{item.institucion}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.experienciaSection}>
            <h3>Experiencia Profesional</h3>
            <div className={styles.experienciaList}>
              {experiencia.map((item, index) => (
                <div key={index} className={styles.experienciaItem}>
                  <div className={styles.periodo}>{item.periodo}</div>
                  <div className={styles.experienciaContent}>
                    <h4>{item.cargo}</h4>
                    <p className={styles.lugar}>{item.lugar}</p>
                    <p className={styles.descripcion}>{item.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.certificacionesSection}>
            <h3>Certificaciones y Membresías</h3>
            <div className={styles.certificacionesList}>
              {certificaciones.map((cert, index) => (
                <div key={index} className={styles.certificacionItem}>
                  <span className={styles.checkmark}>✓</span>
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className={styles.contactoProfesional}>
          <h3>Contacto Profesional</h3>
          <div className={styles.contactoInfo}>
            <div className={styles.contactoItem}>
              <span className={styles.icono}>📞</span>
              <div>
                <strong>Consultas:</strong>
                <p>+57 313 862 7818</p>
              </div>
            </div>
            <div className={styles.contactoItem}>
              <span className={styles.icono}>💬</span>
              <div>
                <strong>WhatsApp:</strong>
                <p>+57 317 450 3604</p>
              </div>
            </div>
            <div className={styles.contactoItem}>
              <span className={styles.icono}>🏥</span>
              <div>
                <strong>Atención:</strong>
                <p>Consulta Privada y Hospitalaria</p>
              </div>
            </div>
            <div className={styles.contactoItem}>
              <span className={styles.icono}>⏰</span>
              <div>
                <strong>Horarios:</strong>
                <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerfilMedico;
