import Link from "next/link";
import { useRouter } from "next/router";
function NavbarItem({ url, title, isSelected }) {
  return (
    <li
      className={`mx-2 md: hover:underline hover:text-green-700 ${
        isSelected ? "text-green-500" : "text-black"
      }`}
    >
      <Link href={url}>{title}</Link>
    </li>
  );
}

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="flex md:flex-row flex-col justify-between text-2xl font-medium capitalize bg-gray-200 rounded-md pt-4 pb-2 shadow-md border relative shadow-gray-300">
      <h1 className=" md:pl-32 pb-4 font-black text-green-700">Ordering app</h1>
      <nav className="">
        <ul className="md:inline-flex">
          <NavbarItem title="home" url="/" isSelected={router.asPath == "/"} />
          <NavbarItem
            title="orders"
            url="/orders"
            isSelected={router.asPath == "/orders"}
          />
          <NavbarItem
            title="add order"
            url="/orders/new"
            isSelected={router.asPath == "/orders/new"}
          />
        </ul>
      </nav>
    </div>
  );
}
