export default function HomePage() {
  return (
    <div className="bg-green-300 p-12 h-96">
      <div className="ml-14 mt-14 w-96 text-4xl">
        <h1 className="capitalize font-black ">
          ordering app
          <br />
          <span className="text--400 font-medium capitalize">
            {" "}
            start your order now
          </span>
        </h1>
      </div>
      <div className="w-96 ml-16 mt-12">
        <button className="text-xl font-medium bg-gray-200 py-3 px-6 rounded-full hover:shadow-md hover:shadow-black hover:bg-black hover:text-white capitalize">
          get order
        </button>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-44 h-44 -z-50 content-center bg-green-300 rounded-full"></div>
        <div className="w-44 h-44 -z-50 content-center bg-green-300 rounded-full"></div>
        <div className="w-44 h-44 -z-50 content-center bg-green-300 rounded-full"></div>
        <div className="w-44 h-44 -z-50 content-center bg-green-300 rounded-full"></div>
        <div className="w-44 h-44 -z-50 content-center bg-green-300 rounded-full"></div>
        <div className="w-44 h-44 -z-50 content-center bg-green-300 rounded-full"></div>
        <div className="w-44 h-44 -z-50 content-center bg-green-300 rounded-full"></div>
        <div className="w-44 h-44 -z-50 content-center bg-green-300 rounded-full"></div>
      </div>
    </div>
  );
}
