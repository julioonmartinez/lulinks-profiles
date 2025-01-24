import type { ProfileResposeBackend } from "../types/profile";
import type { WidgetUnion } from "../types/widget";

const apiBaseUrl = 'https://api-izb6asxh2a-uc.a.run.app/api';

// Obtener estilos del perfil
export async function getAllStyleProfiles(profileId: string) {
  try {
    const response = await fetch(`${apiBaseUrl}/profile/${profileId}/styles`);
    if (!response.ok) {
      throw new Error(`Error al obtener estilos: ${response.statusText}`);
    }
    const data = await response.json();
    return data[0]; // Retorna el primer estilo como indicas
  } catch (error) {
    console.error('Error al obtener estilos:', error);
    return null; // Manejar errores devolviendo null o un valor por defecto
  }
}

// Obtener widgets activos del perfil
export async function getActiveWidgets(profileId: string):Promise<WidgetUnion[]> {
  try {
    const response = await fetch(`${apiBaseUrl}/profile/${profileId}/widgets/active`);
    if (!response.ok) {
      throw new Error(`Error al obtener widgets: ${response.statusText}`);
    }
    const data:WidgetUnion[] = await response.json();
    const sortingWidgets = data.sort((a,b)=> a.position! - b.position!)
    return sortingWidgets;
  } catch (error) {
    console.error('Error al obtener widgets:', error);
    return []; // Retorna una lista vacía si hay errores
  }
}

export async function getProfileByUsername(username: string): Promise<ProfileResposeBackend | null> {
    try {
      const response = await fetch(`${apiBaseUrl}/profiles/by-username?username=${encodeURIComponent(username)}`);
      if (!response.ok) {
        throw new Error(`Error al obtener el perfil: ${response.statusText}`);
      }
      const data: ProfileResposeBackend = await response.json();
      return data;
    } catch (error) {
      console.error('Error al obtener el perfil por nombre de usuario:', error);
      return null;
    }
  }
