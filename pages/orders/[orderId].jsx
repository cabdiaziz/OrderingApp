import { useRouter } from "next/router";
export default function OrderDetail() {
  const router = useRouter();
  const { orderId } = router.query;
  return <h1> orderId : {orderId}</h1>;
}
