export interface Widget {
    id?: string;
    type: 'link' | 'file' | 'img' | 'articule' | 'chart' | 'schedule' | 'social-media' | 'location' | 'product-catalog' | 'image-catalog' | 'data-collection' | 'post' | 'blog' | 'listWidget' | 'timeline';
    dateCreate?: Date;
    lastUpdate?: Date;
    position?:number,
    active:boolean,
    name?: string;
    createBy?:string,
    idProfile?:string,
    icon?:string,
    statsId?: string;
  }
  export interface TimelineWidget extends Widget{
    type:'timeline', //tipo de widget
    name?:string, //name del widget
    events:TimelineEvent[],
    settings?: SettingTimelineWidget
    
  }
  export interface SettingTimelineWidget {
    colorTitles?:string,
    activeColorTitles?:boolean,
    colorSubtitles?:string,
    activeColorSubtitles?:boolean,
    colorTime?:string,
    activeColorTimes?:boolean,
    activeCorlorCards?:boolean,
    colorCards?:string,
    activeColorIcon?:boolean,
    colorIcon?:string,
    activeColorText?:boolean,
    colorText?:string,
    
  }
  export interface Time {
    monthStart?: {
      name: string;
      value?: number;
    };
    yearStart?: number;
    monthEnd: {
      name: string;
      value?: string;
    };
    yearEnd?: number;
    currently?: boolean;
    iconTime?:string,
  }
  export interface TimelineEvent {
  id?:string,
  titleEvent: string; // Title of the event
  subtitle?: string; // Subtitle of the event
  time: Time; // Use the reusable Time interface
  description: string;
  links: LinkWidget[];
  icon?:string,
  // align? : 'alternate' | ''
}

  export interface DataCollectionWidget extends Widget {
    type: 'data-collection';
    label?:string,
    title?:string,
    // icon?:string,
    fastData?: 'fast' | 'accordion' | 'bottom-sheet' ,
    labelCTAButton?:string,
    fields: Array<{
      label: string;
      type: 'text' | 'email' | 'textarea';
      required: boolean;
    }>;
  }

  export interface  WidgetListConfig extends Widget {
    type:'listWidget',
    title: string;
    showTitle?: boolean,
    widgets: WidgetUnion[]; // Donde WidgetConfig representa la configuración individual de cada widget.
    layoutStyle: 'list' | 'responsive' | 'scroll';
    style?: {
      backgroundColor?: string;
      padding?: string;
      borderRadius?: string;
    };
    principalColor?:string;
  }
  

  export interface BlogWidget extends Widget {
    type: 'blog';
    blogName?: string;            // Nombre del blog
    description?: string;        // Descripción breve
    featured?: boolean;          // Blog destacado o no
    allowComments?: boolean;     // Opcional: permitir comentarios en los posts
    tags?: string[];             // Etiquetas a nivel de blog (opcional)
    showIcon?: boolean;
    layoutStyle?: 'list' | 'responsive' | 'scroll';
    // Config de lista de posts
    posts: PostWidget[];         // Lista de posts
    paginationPageSize?: number;  // Cantidad de posts por página
    principalColor?:string;
  }

  

  export interface PostWidget extends Widget {
    type: 'post';
    // Configuración principal
    title: string;              // Título del post
    subtitle: string;           // Subtítulo o tagline
    shortDescription: string;   // Descripción corta (extracto)
    coverImage?: string;        // URL o path a la imagen principal
    pathCover?:string,
    featured: boolean;          // Indica si es un post destacado
    linkPost?: boolean; //Link directo al post
    // Contenido
    content: string;            // Contenido largo (HTML o Markdown, según convenga)
    authorPost?:string,
    // Enlaces relacionados
    links: Array<{
      label: string;            // Texto o nombre del enlace
      url: string;              // URL del enlace
      icon?: string;            // Icono (opcional, para usar con FontAwesome o PrimeIcons)
      active: boolean;          // Permite activar/desactivar el enlace
    }>;
    links2: LinkWidget[]
  
    // Etiquetas y metadatos
    tags: string[];
    activeStylesShip?:boolean,
    backgroundColorShip?:string,
    fontColorShip?:string,             // Lista de etiquetas o categorías
    dateCreated?: Date;         // Fecha de creación

    // Nuevo para la elección de estilo de la tarjeta:
  cardStyle?: 'style1' | 'style2' | 'style3'; 
  rating?:number,
  ratingCount?:number
  isLiked?:boolean,
  likes?:number,
  comments?:number,
  readTime?:number,
  }


  export interface LinkWidget extends Widget {
    type:'link',
    stylesButton?: 'style1' | 'style2' | 'style3' //style small, medium y big
    url?: string;
    // icon?: string;
    activeImage?:boolean;
    urlImage?: string;
    pathImage?:string
    createdBy?: string;
    vibrate?:boolean;
    typebtn?: string;
    activeColor?:boolean; //General Color
    animation?: 'vibre' | 'glow' | 'bounce' | 'color-face' | 'zoom-in';
    activeBorderColor?:boolean;//Color del borde
    borderColor?:string,
    activeBackgroundColor?:boolean;
    backgroundColor?:string,
    font?:string,
    weightFont?:string,
    activeColorFont?: boolean; //Color font
    colorFont?:string;
    activeSecundaryTex?:boolean,
    secondaryTex?:string,
    activeColorSecondaryText?:string,
    backgroundColorSecondaryText?: string,
    colorFontSecondary?:string,
    subtitleSecondaryText?:string,
  }  

  export interface ImageWidget extends Widget {
    type: 'img';
    src: string;
    alt: string;
    path?:string,
    demoImage:boolean,
    size?:'small' | 'medium' | 'big'
  }
  export interface ImageCatalogWidget extends Widget {
    type:'image-catalog',
    images: ImagesCatalog[];
    presentationStyle?: 'basic-carousel' | 'thumbnail-carousel' | 'caption-carrusel'
  }

  export interface ImagesCatalog {
      id?:string
      src:string,
      alt:string,
      path:string,
      position:number,
      highlight:boolean,
      title?: string;
      description?: string;
  }

  export interface ArticuleWidget extends Widget {
    type: 'articule';
    content: string;
  }

  export interface ChartWidget extends Widget {
    type: 'chart';
    content: string;
  }

  export interface FileWidget extends Widget {
    type: 'file';
    content: string;
  }
  export interface ScheduleWidget extends Widget {
    type: 'schedule';
    expanded?:boolean;
    businessHours?: Array<{
      day: string;
      open: string | null; // Hora en formato string (HH:mm) o null
      close: string | null; // Hora en formato string (HH:mm) o null
      open24: boolean; // Indica si está abierto 24 horas
      openDay?:boolean; //indica si esta cerrado
    }>;
    
  }

  export interface LocationWidget extends Widget {
    type: 'location';
    locationUrl: string; // Enlace de Google Maps generado por el cliente
    expanded?:boolean,
  }
  

  export interface SocialMediaWidget extends Widget {
    type: 'social-media';
    title?: string; // Título opcional para el widget
    socialLinks: Array<{
      platform: string; // Nombre de la red social (ej.: "Facebook", "Twitter")
      url: string; // URL completa del enlace
      icon: string; // Clase del ícono (ej.: "pi pi-facebook")
    }>;
  }

  export interface ProductCatalogWidget extends Widget {
    type: 'product-catalog';
    categories?: Array<{
      id: string;
      name: string;
      products: Product[];
    }>;
    products: Product[]; // Para productos sin categoría;
    activeColorPrincipal?:boolean;
    principalColor?:string,
    activeColorPrice?:boolean;
    colorPrice?: string,
    activeColorCard?:boolean,
    colorCard?:string,
    activeCart?:boolean,
    activeLikes?:boolean,
    activeComments?:boolean,
  }
  
  export interface Product {
    id: string;
    title: string;
    subtitle?: string;
    description: string;
    image?: string;
    pathImg?:string; //path de la image en storage
    price: number;
    discount?:number,
    isFavorite:boolean,
    isQuotable: boolean; // Indica si el precio se puede cotizar
  }
  


  export type WidgetUnion =
    | LinkWidget
    | ImageWidget
    | ArticuleWidget
    | ChartWidget
    | FileWidget
    | ScheduleWidget
    | LocationWidget
    | ProductCatalogWidget
    | ImageCatalogWidget
    | DataCollectionWidget
    | PostWidget
    | BlogWidget
    | WidgetListConfig
    | TimelineWidget
  ;

  export interface WidgetResponse {
      message:string,
      id:string,
      widget:Widget
  }