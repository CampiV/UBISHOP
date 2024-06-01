import React from "react";
import '../styles/Main.css';

function Landing() {
    return (
        <div class="container_main">
          <section class="Mapa_home">
            <h3 class="Entrada">El dia de hoy me encuentro</h3>
            
            <div class="Mapa_inicio">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1625.4010134437785!2d-71.61831531506526!3d-35.43493389712703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9665c722dfe00fb1%3A0xe2cef340c74abf9f!2sFacultad%20de%20Ciencias%20de%20la%20Ingenier%C3%ADa!5e0!3m2!1ses-419!2scl!4v1717219423528!5m2!1ses-419!2scl" width="1920"  height="250"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </section>
        </div>
      
    );
  }
  
  export default Landing;