function Newsletter() {
  return (
    <section className="bg-gray-50 mt-20">
      <div className="container mx-auto md:px-20 py-16 text-center">
        <h1 className="font-bold text-3xl "> Newsletter Subscription</h1>
        <div className="py-4">
          <input
            type="text"
            className="shadow broder rounded w-6/12 py-3 text-gray-700 focus:outline-none focus:shadow-outline "
            placeholder="Enter Your Email"
          />
        </div>
        <button className="rounded-full  text-gray-50 bg-orange-400 hover:bg-slate-500 px-20 py-3 text-xl">
          Subscribe
        </button>
      </div>
    </section>
  );
}

export default Newsletter;
