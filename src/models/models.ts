export interface IResort {
  _id: string;
  category: string;
  name: string;
  rating: string;
  contactInfo: IContactInfo;
  imageURL: string;
}

export interface IContactInfo {
  phoneNumber: string;
  email: string;
}
