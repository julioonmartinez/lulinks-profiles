export interface StylesProfile {
    id?:string,
    idPreset?:string,
    createBy?:string;
    modelHeader?: 'rigth' | 'center' | 'left'| 'line'
    positionAvatar?: 'left' | 'right'
    responsiveAvatar?: boolean,
    adaptativeProfile?: boolean,
    banner?:boolean,
    urlBanner?:string,
    pathBanner?:string,
    sizeAvatar? : 'small' | 'medium' | 'big',
    sizeName?:number,
    // Fondo y apariencia general
    typeBackground?: 'color' | 'image' | 'gradient'
    backgroundColor?: string; // Color de fondo
    backgroundImage?: string; // URL de una imagen de fondo
    backgroundPath?: string;//path de la imagen en firestorage
    backgroundGradient?: string; // Gradiente de fondo (e.g., 'linear-gradient(to right, #fff, #000)')
    backgroundBlur?: boolean; // Activar o desactivar desenfoque de fondo
    blursize:number,
    colorTitle?:string
    // Tipografía
    fontType?: string; // Tipo de fuente (e.g., 'Poppins', 'Montserrat')
    fontColor?: string; // Color del texto principal
    fontSize?: string; // Tamaño del texto principal (e.g., '16px')
    fontWeight?: string; // Peso de la fuente (e.g., 'bold', 'lighter')
  
    // Botones
    buttonColor?: string; // Color del botón
    buttonColorTransparent?: boolean, // fondo de boton transparente
    buttonTextColor?: string; // Color del texto del botón
    buttonShape?: 'rounded' | 'square' | 'pill'; // Forma del botón
    buttonBorder: boolean,
    buttonColorBorder:string,
    buttonHoverColor?: string; // Color del botón al pasar el cursor
    buttonHoverTextColor?: string; // Color del texto del botón en hover
    buttonAnimation?: 'bounce' | 'pulse' | 'none'; // Animación del botón al hacer hover
    buttonOpacity?: number,
    // Animaciones y efectos
    linkHoverAnimation?: 'underline' | 'scale' | 'none'; // Animación al pasar el cursor sobre los enlaces
    pageLoadAnimation?: 'fade-in' | 'slide-in' | 'none'; // Animación al cargar la página
    textShadow?: string; // Sombra para el texto (e.g., '1px 1px 2px #000')
    boxShadow?: string; // Sombra para los contenedores (e.g., '0px 4px 10px rgba(0,0,0,0.5)')
  
    // Opciones adicionales
    borderStyle?: string; // Estilo del borde (e.g., 'solid', 'dashed')
    borderColor?: string; // Color del borde
    borderWidth?: string; // Ancho del borde (e.g., '2px')
    avatarShape?: 'circle' | 'square' | 'rounded' | 'none'; // Forma del avatar
    useParallaxEffect?: boolean; // Activar o desactivar efecto parallax en el fondo
    animationTiming?: string; // Velocidad de las animaciones (e.g., 'ease-in', 'ease-out')

        //icon
        isActiveIconColor?:boolean;
        iconColor?:string;
        isActiveBackgroundIconColor?:boolean;
        iconBackgroundColor?:string;
  }
  
