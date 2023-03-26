import OrdersItem from "./OrdersItem";
export default function OrdersList(props) {
  const { orders } = props;
  return (
    <ul className="flex flex-col min-h-screen pt-12 bg-slate-100 ">
      {orders.map((order) => (
        <OrdersItem
          key={order.id}
          id={order.id}
          name={order.name}
          description={order.description}
          date={order.date}
          status={order.status}
        />
      ))}
    </ul>
  );
}
{
  /* every order detail has a li tag */
}
{
  /*//todo: 
//*Feature : avatar quantity: no, date:2023-mar-10,
//? orderedServiceName description  status btn->view
*/
}
