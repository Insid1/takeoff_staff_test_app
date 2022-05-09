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

// eslint-disable-next-line import/prefer-default-export
export type { IUser };
