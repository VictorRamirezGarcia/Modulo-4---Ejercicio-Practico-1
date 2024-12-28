import { Link, Route, Routes } from 'react-router-dom'
import './App.css'

import React, { useState, useEffect, Profiler} from 'react';
import DoctorCard from './DoctorCard';
import ServiceList from './ServiceList';
import AppointmentForm from './AppointmentForm';


function onRenderCallback(
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions // the Set of interactions belonging to this update
) {
  console.log(`Componente: ${id} | Fase: ${phase} | Duración: ${actualDuration.toFixed(2)}ms`);
  // Aggregate or log render timings...
}

// Componente de la sección de Inicio
function Home() {

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Simulando la carga de datos (esto normalmente vendría de una API)
    setDoctors([
      { name: 'Dr. Pérez', specialty: 'Cardiología', yearsOfExperience: 10 },
      { name: 'Dr. Gómez', specialty: 'Pediatría', yearsOfExperience: 8 },
      { name: 'Dr. Ramirez', specialty: 'Pediatría', yearsOfExperience: 5 },
      { name: 'Dr. Rojas', specialty: 'Cardiologia', yearsOfExperience: 3 },
    ]);

  }, []);

  return (
    <Profiler id="content" onRender={onRenderCallback}> 
    <div className="content">
      <h2>Bienvenidos al Hospital</h2>
      <p>En este hospital, nos comprometemos con su salud.</p>
      <h3>Listado de Profesionales</h3>
      {doctors.map((doctor, index) => (
        <DoctorCard
          key={index}
          name={doctor.name}
          specialty={doctor.specialty}
          yearsOfExperience={doctor.yearsOfExperience}
        />
      ))}
    </div>
    </Profiler>  
  )
}

// Componente de la sección de Servicios
function Services() {

  const [services, setServices] = useState([]);

  useEffect(() => {
    // Simulando la carga de datos (esto normalmente vendría de una API)
    setServices(['Consulta general', 'Cirugía', 'Pediatría', 'Cardiología']);
  }, []);

  return (
    <div className="content">
    <ServiceList services={services} />
    </div>
  )
}

// Componente de la sección de Contacto
function Contact() {

  const [doctors, setDoctors] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Simulando la carga de datos (esto normalmente vendría de una API)
    setDoctors([
      { name: 'Dr. Pérez', specialty: 'Cardiología', yearsOfExperience: 10 },
      { name: 'Dr. Gómez', specialty: 'Pediatría', yearsOfExperience: 8 },
      { name: 'Dr. Ramirez', specialty: 'Pediatría', yearsOfExperience: 5 },
      { name: 'Dr. Rojas', specialty: 'Cardiologia', yearsOfExperience: 3 },
    ]);

    setServices(['Consulta general', 'Cirugía', 'Pediatría', 'Cardiología']);
  }, []);

  return (
    <div className="content">
    <AppointmentForm doctors={doctors} />

      <h3>Contacto</h3>
      <p>Teléfono: +1 234 567 890</p>
      <p>Email: contacto@hospital.com</p>
      <p>Dirección: Calle 123, Ciudad, País</p>
    </div>
  )
}

function App() {

  return (
    <div>
      <header className="navbar">
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/servicios">Servicios</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Hospital XYZ. Todos los derechos reservados.</p>
        <div>
          <a href="#privacy-policy">Política de Privacidad</a> | <a href="#terms-of-service">Términos de Servicio</a>
        </div>
      </footer>

    </div>
  )
}

export default App


// // src/App.js

// import React, { useState, useEffect } from 'react';
// import DoctorCard from './DoctorCard';
// import ServiceList from './ServiceList';
// import AppointmentForm from './AppointmentForm';

// function App() {
//   const [doctors, setDoctors] = useState([]);
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     // Simulando la carga de datos (esto normalmente vendría de una API)
//     setDoctors([
//       { name: 'Dr. Pérez', specialty: 'Cardiología', yearsOfExperience: 10 },
//       { name: 'Dr. Gómez', specialty: 'Pediatría', yearsOfExperience: 8 },
//     ]);

//     setServices(['Consulta general', 'Cirugía', 'Pediatría', 'Cardiología']);
//   }, []);

//   return (
//     <div className="App">
//       <h1>Bienvenido al Hospital</h1>
//       <div className="doctor-cards">
//         {doctors.map((doctor, index) => (
//           <DoctorCard
//             key={index}
//             name={doctor.name}
//             specialty={doctor.specialty}
//             yearsOfExperience={doctor.yearsOfExperience}
//           />
//         ))}
//       </div>
//       <ServiceList services={services} />
//       <AppointmentForm doctors={doctors} />
//     </div>
//   );
// }

// export default App;
