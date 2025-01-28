import type { LinkWidget } from "./widget";


export interface Profile {
    id?: string;
    uuid: string;
    idPreset?:string,
    status: boolean;
    createAt?: Date;
    userName:string,
    urlImage?:string,
    pathImage?:string,
    name?:string;
    description?:string;
    typeProfile?:string,
    typeButtonSocialMedia?: 'large' | 'icon',
    socialMedia?:LinkWidget[];
    activeSocialMedia?:boolean;
    posicionSocialMedia?: 'top' | 'bottom',
    activeSpecialShip?:boolean,
    contentSpecialShip?:string,
    backgroundColorSpecialShip?:string,
    activeColorBackgroundSpecialShip?:boolean,
    activeTextColorSpecialShip?:boolean,
    colorTextSpecialShip?:string,
    activeSpecialColorBorder?:boolean,
    emailContact?:string,
    activeContact?:boolean,
    statsId?: string;
    isPremium?:boolean;
  }
  
  export interface ProfileResponse {
    message: string;
    profiles: Profile[];
  }
  export interface ProfileResposeBackend {
    message:string,
    data:Profile,
    status:string,
  }