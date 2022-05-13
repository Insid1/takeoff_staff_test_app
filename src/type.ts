interface IUser {
  id: number,
  name: string,
  phone: string,
  email: string,
  date: string,
  company: string,
  city: string,
  address: string,
  country: string,
  creditCard: string,
  pinCode: number,
  colour: string,
  latlng: string,
  currency: string,
  isPremium: boolean,
}

interface IRegisterInputs {
  email: string,
  password: string,
}

export type { IUser, IRegisterInputs };
