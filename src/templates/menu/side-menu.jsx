import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationLinks } from './menu_links';

export default function sideMenu({ classNames }) {
  let { pathname } = useLocation();

  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    let updatedActiveMenu = navigationLinks.map((item) => {
      if (item.to == pathname) {
        return { ...item, current: true };
      } else {
        return { ...item, current: false };
      }
    });

    setMenuItems(updatedActiveMenu);
  }, [pathname]);

  return (
    <div className="hidden w-28 overflow-y-auto bg-[#ffffff] md:block">
      <div className="flex w-full flex-col items-center ">
        <div className="flex flex-shrink-0 items-center h-16 px-2 ">
          <img
            className="rounded-full"
            src="./images/cryto-giant-rec.png"
            alt=""
          />
        </div>
        <div className="mt-6 w-full flex-1 space-y-1 px-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className={classNames(
                item.current
                  ? 'bg-indigo-800 text-white '
                  : 'text-indigo-400 hover:bg-indigo-800 hover:text-white',
                'group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium mb-8'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              <item.icon
                className={classNames(
                  item.current
                    ? 'text-white'
                    : 'text-indigo-500 group-hover:text-white',
                  'h-8 w-8'
                )}
                aria-hidden="true"
              />
              <span className="mt-2">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
