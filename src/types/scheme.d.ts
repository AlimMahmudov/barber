interface MasterType {
  id: number;
  human: string;
  photo: string;
  work: string;
  rating: string;
  skills: string;
  description: string;
}

interface ShaveType {
  id: number;
  title: string;
  image: string;
  price: string;
}

interface WatchType {
  id: number;
  oclock: string;
}

interface ServiceType {
  id: number;
  title: string;
  type: string;
  time: string;
  price: string;
}
