export default function NewOrderForm() {
  return (
    <form className="container mx-auto text-center">
      <h1 className="pt-16 font-medium text-3xl capitalize">Add New Order</h1>
      <div className="grid grid-cols-2 gap-x-12 gap-y-12 pt-24 mx-80">
        <div>
          <label className="mr-[19rem] text-base font-medium">
            Service Name
          </label>
          <input
            type="text"
            placeholder="order name"
            className="block w-full px-3 py-1.5 h-12 mt-2 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 "
          />
        </div>
        <div>
          <label className="mr-[23rem] text-base font-medium ">Date</label>
          <input
            type="Date"
            className="block px-3 py-1.5 w-full mt-2 h-12 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 "
          />
        </div>
        <div className="col-span-2 ">
          <label className="text-base font-medium mr-[49rem]">
            Description
          </label>
          <textarea
            type="text"
            placeholder="Description"
            className="w-full h-32 px-3 py-1.5  mt-2 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 "
          />
        </div>
      </div>
      <div className="">
        <button
          type="button"
          className="bg-gray-200 text-xl text-medium rounded-lg px-6 p-2 my-24 text-blue-700 hover:bg-green-300 hover:text-black shadow-md hover:shadow-green-200 capitalize"
        >
          send order
        </button>
      </div>
    </form>
  );
}
