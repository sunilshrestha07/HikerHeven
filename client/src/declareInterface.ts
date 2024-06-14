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