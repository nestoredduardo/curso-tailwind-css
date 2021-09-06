const Home = () => {
  return (
    <div>
      <h1 className="h-16 w-64 text-center bg-yellow-500 text-white">
        Hello World
      </h1>
      <input
        type="text"
        className="border border-blue-500 placeholder-green-300"
        placeholder="Lorem Ipsum"
      />
      <div className="flex flex-wrap m-4 justify-center items-center h-64 bg-green-600">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 bg-blue-200"></div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 bg-blue-300"></div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 bg-blue-400"></div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 bg-blue-500"></div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 bg-blue-600"></div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 bg-blue-700"></div>
      </div>
      <p className="text-lg leading-6 capitalize underline">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
        nam saepe aperiam asperiores dolorem illum velit voluptatem at totam
        minus earum id distinctio cum dignissimos vel quos explicabo beatae
        dolor!
      </p>
    </div>
  );
};

export default Home;
