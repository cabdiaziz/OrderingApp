import Link from "next/link";
export default function Orders() {
  return (
    <div>
      <h1>Orders List</h1>
      {/* order lis component order design id , orderName, orderedBy, status:'canceled'- pending... -'completed' */}
      <div className="font-bold text-lg bg-gray-300 p-4">
        <Link
          href="/orders/20"
          className="mr-4 hover:underline hover:bg-blue-200"
        >
          Order 20
        </Link>
        <Link
          href="/orders/30"
          className="mr-4 hover:underline hover:bg-blue-200"
        >
          Order 30
        </Link>
        <Link href="/orders/40" className=" hover:bg-blue-200 hover:underline">
          Order 40
        </Link>
      </div>
    </div>
  );
}
