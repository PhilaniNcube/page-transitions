/* eslint-disable @next/next/no-img-element */
const Index = () => (
  <div className="bg-gray-200 overflow-y-hidden">
    <div className="2xl:mx-auto 2xl:container flex justify-center items-center px-4 md:px-6 xl:px-20 py-12">
      <div className="flex justify-center items-center">
        <div
          tabIndex="0"
          aria-label="card"
          className="focus:outline-none flex sm:flex-row flex-col justify-center items-center"
        >
          <div className="lg:w-2/5 w-full">
            <img
              tabIndex="0"
              className="focus:outline-none w-full"
              role="img"
              src="https://cdn.tuk.dev/assets/templates/prodify/solution.png"
              alt="pineapple"
              srcSet=""
            />
          </div>
          <div className="lg:w-2/5 xl:w-2/5  w-full lg:pl-0 sm:pl-4">
            <div className="lg:pl-8 py-2 text-color">
              <h1
                tabIndex="0"
                className="lg:w-full 2xl:w-9/12 focus:outline-none text-2xl md:text-3xl lg:text-4xl text-gray-900 leading-6 md:leading-snug f-f-l font-extrabold"
              >
                Gather data to offer a bespoke solution
              </h1>
              <h2
                tabIndex="0"
                className="focus:outline-none lg:text-lg text-sm md:text-base leading-5 md:leading-6 lg:leading-7 text-gray-900 f-f-r py-4 lg:py-6"
              >
                Here at Globex we take special care of what your organization
                needs instead of selling you a mass market tool that takes a one
                size fits all approach. I personally review each and every
                client business and oversee the team that tailores a solution
              </h2>
              <div className="flex xl:mt-14 items-center">
                <div className="flex items-center justify-center rounded-full lg:w-16 lg:h-16 w-10 h-10">
                  <img
                    tabIndex="0"
                    className="focus:outline-none"
                    src="https://cdn.tuk.dev/assets/templates/prodify/profile.png"
                    alt="girl avatar"
                  />
                </div>
                <div className="pl-3">
                  <h3
                    tabIndex="0"
                    className="focus:outline-none f-f-l text-lg lg:text-3xl"
                  >
                    Rachel Dawson
                  </h3>
                  <h4
                    tabIndex="0"
                    className="focus:outline-none f-f-r text-lg lg:pt-2"
                  >
                    CEO, Globex Workspaces
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Index;
