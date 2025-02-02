// Función para aclarar el color
export function lightenColor(hex: string, percent: number): string {
    const { r, g, b } = hexToRgb(hex);
    const lighten = (value: number) => Math.min(255, Math.floor(value + (255 - value) * (percent / 100)));
    return rgbToHex(lighten(r), lighten(g), lighten(b));
  }
  
  // Función para oscurecer el color
  export function darkenColor(hex: string, percent: number): string {
    const { r, g, b } = hexToRgb(hex);
    const darken = (value: number) => Math.max(0, Math.floor(value * (1 - percent / 100)));
    return rgbToHex(darken(r), darken(g), darken(b));
  }
  
  // Determinar si el color es claro u oscuro
  export function isColorLight(hex: string): boolean {
    const { r, g, b } = hexToRgb(hex);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5;
  }
  
  // Conversión de HEX a RGB
  function hexToRgb(hex: string): { r: number; g: number; b: number } {
    const cleanHex = hex.replace('#', '');
    const bigint = parseInt(cleanHex, 16);
    return {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: bigint & 255
    };
  }
  
  // Conversión de RGB a HEX
  function rgbToHex(r: number, g: number, b: number): string {
    const toHex = (value: number) => value.toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }


  export function convertHexToRgba(hex: string, transparency: number): string {
    // Validar el hexadecimal
    const validHex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
    const match = hex.match(validHex);
  
    if (!match) {
      console.warn('Color inválido:', hex);
      return hex; // Devuelve el color original si no es válido
    }
  
    // Extraer los valores de R, G, B
    const r = parseInt(match[1], 16);
    const g = parseInt(match[2], 16);
    const b = parseInt(match[3], 16);
  
    // Convertir el porcentaje de transparencia (0-100) a opacidad (0-1)
    const alpha = Math.max(0, Math.min(transparency / 100, 1));
  
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  