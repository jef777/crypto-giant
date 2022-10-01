import {
  ComputerDesktopIcon,
  CircleStackIcon,
} from '@heroicons/react/24/outline';

export const navigationLinks = [
  { name: 'Home', to: '/', icon: ComputerDesktopIcon, current: true },
  {
    name: 'crypto',
    to: '/cryptocurrencies',
    icon: CircleStackIcon,
    current: false,
  },
];

export default navigationLinks;
