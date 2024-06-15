export interface registerFormDataInterface{
    name?: string,
    email?: string,
    password?: string
}
export interface messageInterface{
  email?: string,
  message?: string
}

export interface loginFormDataInterface {
  email?: string,
  password?: string
}

export interface SingupFormDataInterface {
  name?: string,
  email?: string,
  password?: string
}

export interface reviewInterface {
  review?: string,
}

export interface mapProps{
  iframe?: string
}

export interface profileInterface {
  email?: string,
  password?: string,
  image?:string,
  name?:string
}

 export interface postInterface {
  _id: string | null; 
  name: string | null;
  rating?: number;
  district: string | null;
  description: string | null;
  image: string;
  map: string;
  level: string | null;
}

 export interface Hike {
  _id: string | null;
  name: string | null;
  rating?: number;
  district: string | null;
  description: string | null;
  image: string;
  map: string;
  level: string | null;
}