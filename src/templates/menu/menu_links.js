import {
  ComputerDesktopIcon,
  CircleStackIcon,
  NewspaperIcon,
} from '@heroicons/react/24/outline';

export const navigationLinks = [
  { name: 'Home', to: '/', icon: ComputerDesktopIcon, current: true },
  {
    name: 'crypto',
    to: '/cryptocurrencies',
    icon: CircleStackIcon,
    current: false,
  },
  {
    name: 'crypto-news',
    to: '/crypto-news',
    icon: NewspaperIcon,
    current: false,
  },
];

export default navigationLinks;
