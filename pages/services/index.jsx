import Link from "next/link";
export default function Services() {
  return (
    <div>
      <h1>Service List</h1>
      {/* Service lis component service-design id , serviceName, category, status:'available', 'not-available' */}
      <div className="font-bold text-lg bg-gray-300 p-4">
        <Link
          href="/services/1"
          className="mr-4 hover:underline hover:bg-blue-200"
        >
          Service 1
        </Link>
        <Link
          href="/services/2"
          className="mr-4 hover:underline hover:bg-blue-200"
        >
          Service 2
        </Link>
        <Link href="/services/3" className=" hover:bg-blue-200 hover:underline">
          Service 3
        </Link>
      </div>
    </div>
  );
}
