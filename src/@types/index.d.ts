type IExtra = {
  name: string;
  value: number;
};

type IMainCity = {
  name: string;
  country: string;
  flag: string;
  image: string;
}

type IContinent = {
  uid: string;
  name: string;
  message: string;
  imageUrl: string;
  description: string;
  extra: IExtra[];
  mainCities: IMainCity[];
};

type ISimpleContinent = {
  uid: string;
  name: string;
  message: string;
  imageUrl: string;
}