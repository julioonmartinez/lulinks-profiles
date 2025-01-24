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
  