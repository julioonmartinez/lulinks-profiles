// src/pages/api/revalidate.ts
import { invalidateCache } from '../../lib/cache';

export async function post({ request }) {
  const { username, secret } = await request.json();

  if (secret !== process.env.MY_SECRET_TOKEN) {
    return new Response(JSON.stringify({ error: 'No autorizado' }), { status: 401 });
  }

  // Invalida la caché para este perfil
  const success = await invalidateCache(`/perfil/${username}`);
  if (!success) {
    return new Response(JSON.stringify({ error: 'Error al invalidar caché' }), { status: 500 });
  }

  return new Response(JSON.stringify({ revalidated: true }), { status: 200 });
}
