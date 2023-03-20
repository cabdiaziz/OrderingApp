import { useRouter } from "next/router";
export default function ServiceDetail() {
  const router = useRouter();
  const { serviceId } = router.query;
  return <h1> serviceId : {serviceId}</h1>;
}
