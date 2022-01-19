import Link from "next/link";
import slugify from "slugify";
import { useRouter } from "next/router";

const NavBar = ({ classes, menuItems }) => {
  const router = useRouter();
  const isActive = (pathname) =>
    router.pathname.split("/")[1] === pathname.split("/")[1];
  return (
    <nav
      className={`${
        classes ? "block" : "hidden"
      } pr-4 md:inline-flex font-medium  ${classes}`}
    >
      {menuItems.map((item, index) => {
        const menuItemPath = index ? `/${slugify(item, { lower: true })}` : "/";
        return (
          <Link key={item} href={menuItemPath} passHref>
            <a
              className={`no-underline text-white mb-2.5 px-7 lg:px-10 py-2 whitespace-nowrap w-min hover:bg-hci-white-dark text-white font-montserrat ${
                isActive(menuItemPath)
                  ? "bg-hci-white-light text-white font-bold"
                  : ""
              } hover:text-white cursor-pointer`}
            >
              {item}
            </a>
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;
