/* eslint-disable @next/next/no-img-element */
const Contact = (props) => (
  <div className="mx-auto container lg:my-32 lg:px-52 px-4 mt-16">
    <div className="flex items-center justify-center">
      <hr className="w-2.5 h-16 bg-indigo-700" />
      <h1 className="text-3xl font-bold text-gray-900 pl-7">Locations</h1>
    </div>
    <div className="lg:mt-16 mt-8 lg:flex items-end">
      <div className="lg:w-1/2 lg:border-r border-black lg:pr-24 lg:pb-24">
        <img
          loading="lazy"
          src="https://cdn.tuk.dev/assets/templates/foodies/cafe.png"
          className="w-full h-full"
          alt=""
        />
      </div>
      <div className="lg:w-1/2">
        <div className="lg:pb-24 lg:pl-24 lg:pt-0 pt-8">
          <div>
            <p className="text-2xl font-semibold">New Jersey, USA</p>
            <p className="text-lg pt-5">
              2464 Royal Ln. Mesa, New Jersey 45463
            </p>
            <p className="text-lg pt-1">(316) 555-0116</p>
            <p className="text-lg pt-1">New Jersey</p>
          </div>
          <div className="lg:pt-24 pt-8">
            <p className="text-2xl font-semibold">New Jersey, USA</p>
            <p className="text-lg pt-5">
              2464 Royal Ln. Mesa, New Jersey 45463
            </p>
            <p className="text-lg pt-1">(316) 555-0116</p>
            <p className="text-lg pt-1">New Jersey</p>
          </div>
        </div>
      </div>
    </div>
    <div className="lg:flex items-center justify-center w-full">
      <div className="lg:w-2/5 lg:border-t lg:border-r border-black">
        <div className="lg:pr-24 lg:pt-24 pt-8 lg:pb-24">
          <p className="text-2xl font-semibold">SanFrancisco, USA</p>
          <p className="text-lg pt-5">2464 Royal Ln. Mesa, New Jersey 45463</p>
          <p className="text-lg pt-1">(316) 555-0116</p>
          <p className="text-lg pt-1">New Jersey</p>
        </div>
      </div>
      <div className="lg:w-2/5 lg:border-t border-black">
        <div className="lg:pl-24 lg:pt-24 pt-8 lg:pb-24">
          <div>
            <p className="text-2xl font-semibold">SanFrancisco, USA</p>
            <p className="text-lg pt-5">
              2464 Royal Ln. Mesa, New Jersey 45463
            </p>
            <p className="text-lg pt-1">(316) 555-0116</p>
            <p className="text-lg pt-1">New Jersey</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Contact;
