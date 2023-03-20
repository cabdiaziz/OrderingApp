import Link from "next/link";
import OrdersList from "@/components/orders/OrdersList";
export default function Orders() {
  const data = [
    {
      id: "1",
      name: "design webApp",
      description: "design webapp for me and thanks for that service",
      date: "2023-Mar--20",
      status: "Pending",
    },
    {
      id: "2",
      name: "mobile app",
      description: "develope mobile app for me and thanks for that service",
      date: "2023-Mar--20",
      status: "Pending",
    },
  ];
  return (
    <div>
      <Link href="/">Back Home</Link>
      <OrdersList orders={data} />
    </div>
  );
}
