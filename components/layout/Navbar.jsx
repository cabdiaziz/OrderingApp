import Link from "next/link";
function NavbarItem({ url, title }) {
  return (
    <li className="mx-2 md: hover:underline hover:text-white">
      <Link href={url}>{title}</Link>
    </li>
  );
}

export default function Navbar() {
  return (
    <div className="flex md:flex-row flex-col justify-between text-3xl font-medium capitalize bg-sky-300 p-4">
      <h1 className=" md:pl-32 pb-4">service ordering app</h1>
      <nav className="">
        <ul className="md:inline-flex">
          <NavbarItem title="home" url="/" />
          <NavbarItem title="orders" url="/orders" />
          <NavbarItem title="new order" url="/orders/new" />
        </ul>
      </nav>
    </div>
  );
}
