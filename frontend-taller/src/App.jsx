import { useState, useEffect } from 'react';
import { Container, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

function App() {
  const [health, setHealth] = useState(null);
  const [info, setInfo] = useState(null);

  // Consumir el endpoint de Health
  useEffect(() => {
    fetch('http://localhost:3000/api/health')
      .then(res => res.json())
      .then(data => setHealth(data))
      .catch(err => console.error(err));
  }, []);

  // Consumir el endpoint de Info
  const cargarInfo = () => {
    fetch('http://localhost:3000/api/info')
      .then(res => res.json())
      .then(data => setInfo(data))
      .catch(err => console.error(err));
  };

  return (
    <Container className="mt-5">
      {/* 3. Título del taller */}
      <h1 className="text-center mb-4">Taller IV</h1>

      {/* 4. Sección de Health con etiquetas h4, p, div, section y estilos */}
      <section style={{ backgroundColor: '#f0f8ff', padding: '20px', borderRadius: '10px' }}>
        <div>
          <h4>Estado del API (Health)</h4>
          {health ? (
            <p style={{ color: 'green', fontWeight: 'bold' }}>{health.mensaje}</p>
          ) : (
            <p>Cargando estado...</p>
          )}
        </div>
      </section>

      {/* 5. Sección de Info usando Reactstrap */}
      <div className="mt-4">
        <Button color="primary" onClick={cargarInfo}>Cargar Información del Equipo</Button>
        
        {info && (
          <Card className="mt-3">
            <CardBody>
              <CardTitle tag="h5">Integrantes del Equipo</CardTitle>
              {info.integrantes.map((persona, index) => (
                <CardText key={index}>
                  <strong>{persona.nombre}</strong> - Edad: {persona.edad} - Carrera: {persona.carrera} - Materias aprobadas: {persona.materiasAprobadas}
                </CardText>
              ))}
            </CardBody>
          </Card>
        )}
      </div>
    </Container>
  );
}

export default App;