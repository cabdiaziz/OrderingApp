export default function NewOrderForm() {
  return (
    <form className="container mx-auto bg-gray-100 text-center">
      <h1 className="pt-16 font-medium text-3xl capitalize">Add New Order</h1>
      <div className="grid grid-cols-2 grid-rows-6 min-h-screen pt-24 mx-80">
        <div className="">
          <label className="block mb-2 -ml-72 text-base font-medium text-gray-900">
            Full Name
          </label>
          <input
            className="w-96 p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm shadow-md rounded-lg"
            type="text"
            placeholder="Full Name"
          />
        </div>
        <div className="">
          <label className="mb-2 -ml-64 block text-base font-medium text-gray-900">
            Phone Number
          </label>
          <input
            className="w-96 p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm shadow-md rounded-lg"
            type="text"
            placeholder="Phone Number"
          />
        </div>
        <div className="">
          <label className="block mb-2 -ml-72 text-base font-medium text-gray-900">
            Service
          </label>
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg shadow-md w-96 p-3">
            <option selected>Choose a service</option>
            <option value="someOption">Some option</option>
            <option value="otherOption">Other option</option>
          </select>
        </div>
        <div className="">
          <label className="block mb-2 -ml-80 text-base font-medium text-gray-900">
            Date
          </label>
          <input
            className="w-96 pl-3 p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm shadow-md rounded-lg"
            type="Date"
          />
        </div>
        <div>
          <label class="block mb-2 -ml-72 text-sm font-medium text-gray-900">
            Description
          </label>
          <textarea
            rows="4"
            className="block p-2.5 w-96 ml-8 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
            placeholder="Write description here..."
          ></textarea>
        </div>
      </div>
      {/* <button
        type="button"
        className="bg-red-400  float-center rounded block -mt-80 "
      >
        submit
      </button> */}
    </form>
  );
}
