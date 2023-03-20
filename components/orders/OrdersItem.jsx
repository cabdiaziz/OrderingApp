import Link from "next/link";
import Image from "next/image";
import orderAvatar from "@/components/images/order.png";
export default function OrdersItem(props) {
  console.log("props=", props);
  return (
    <li className="w-full">
      {/* single order display card  */}
      <div className="flex flex-row border mx-64 rounded-lg text-base font-bold p-4 justify-between capitalize ">
        <h1></h1>
        <h1>order name</h1>
        <h1>date</h1>
        <h1>status</h1>
        <h1>go to profile</h1>
      </div>
      <div className="mb-8 p-6 rounded-lg border-l border-b border-r border-gray-300 text-md font-medium hover:shadow-xl hover:shadow-sky-200 hover:bg-white flex flex-row justify-between mx-64 py-10 capitalize">
        <Image src={orderAvatar} alt="order" width="56" height="" />
        <p className="h-8 mt-2">{props.name}</p>
        <p className="h-4 mt-2">{props.date}</p>
        <p className="bg-orange-600 w-20 h-8 mt-2 text-white rounded-md px-2.5 pt-1 hover:scale-110">
          {props.status}
        </p>
        <Link
          href={`/orders/${props.id}`}
          className="focus:ring-4 h-12 text-md font-medium rounded-lg py-3 pl-9 inline-flex w-28 text-white bg-blue-400 hover:bg-blue-500 hover:shadow-xl hover:shadow-sky-200"
        >
          View
        </Link>
      </div>
    </li>
  );
}
