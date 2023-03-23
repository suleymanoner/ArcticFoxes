import fox0 from '../assets/foxes/fox0.jpg';
import fox1 from '../assets/foxes/fox1.jpg';
import fox2 from '../assets/foxes/fox2.jpg';
import fox3 from '../assets/foxes/fox3.jpg';
import fox4 from '../assets/foxes/fox4.jpg';
import fox5 from '../assets/foxes/fox5.jpg';
import fox6 from '../assets/foxes/fox6.jpg';
import fox7 from '../assets/foxes/fox7.jpg';

export interface Fox {
  id: string;
  name: string;
  age: string;
  image: string;
}

export const foxData: Fox[] = [
  {
    id: '4221a8f0-7079-4c07-8c3a-ff8bf48eb1ac',
    name: 'Alfa',
    age: '3',
    image: fox0,
  },
  {
    id: '6a993a2f-f01a-4a3b-af4f-3d3ed4cdd891',
    name: 'Bravo',
    age: '1',
    image: fox1,
  },
  {
    id: 'b5d8f804-36a1-4cd2-81b0-4d71e729961b',
    name: 'Charlie',
    age: '2',
    image: fox2,
  },
  {
    id: '6c777288-7f96-45c2-8874-cafa45c83151',
    name: 'Delta',
    age: '3',
    image: fox3,
  },
  {
    id: '16510211-bce6-4a9f-8089-46cf37335007',
    name: 'Echo',
    age: '5',
    image: fox4,
  },
  {
    id: 'cea8cab5-c178-4d0b-8f47-a6b7b2014076',
    name: 'Foxtrot',
    age: '6',
    image: fox5,
  },
  {
    id: '7014f7ce-1b55-486d-97ed-5a8eea3cde9e',
    name: 'Golf',
    age: '7',
    image: fox6,
  },
  {
    id: '6c5a41d9-1ed8-439f-9194-26b09f7b8ec2',
    name: 'Hotel',
    age: '5',
    image: fox7,
  },
];
