document.addEventListener('DOMContentLoaded', async () => {
    const apiBaseUrl = 'https://api-izb6asxh2a-uc.a.run.app/api';
  
    // Extraer el username desde la URL (suponiendo que usas rutas dinámicas)
    const username = window.location.pathname.split('/').pop();
  
    try {
      const response = await fetch(`${apiBaseUrl}/profiles/by-username?username=${username}`);
      if (response.ok) {
        const data = await response.json();
        const profile = data.data;
        
        // Actualizar la información en la página
        document.querySelector('h1').textContent = profile.name;
        document.querySelector('h2').textContent = `Usuario: ${profile.userName}`;
        
        // Actualizar redes sociales
        const socialMediaContainer = document.querySelector('#social-media ul');
        socialMediaContainer.innerHTML = ''; // Limpiar contenido por defecto
        profile.socialMedia.forEach(sm => {
          const li = document.createElement('li');
          li.textContent = sm.name;
          socialMediaContainer.appendChild(li);
        });
      } else {
        console.error('Error al obtener el perfil:', response);
      }
    } catch (error) {
      console.error('Error al conectar con la API:', error);
    }
  });
  