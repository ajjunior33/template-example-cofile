import { FooterComponent } from "../components/Footer";
import { HeaderComponent } from "../components/Header";

const Home: React.FC = () => {
  return (
    <>
      <HeaderComponent />
      <main className="md:max-w-[908px] p-[24px] m-auto">
        <section className="md:grid md:grid-cols-2 flex flex-col">
          <div className="flex justify-between flex-col pb-5 pt-5">
            <div className="max-w-[300px] mt-[48px]">
              <h1 className="font-bold text-4xl text-[#202020]">
                Check Currency Exchange Rate in Real Time
              </h1>
              <p className="text-[#A3A3A3]">
                Monitor your worldwide business with this handy apps
              </p>
            </div>

            <div className="flex flex-col gap-[16px]">
              <img className="w-[170px] h-[57px]" src="/App_Store.png" />
              <img className="w-[170px] h-[57px]" src="/Google_Play.png" />
            </div>
          </div>
          <div>
            <img src="/Right.png" alt="" />
          </div>
        </section>

        <section className="mb-[96px] mt-[96px]">
          <h3 className="font-semibold text-2xl mb-2">Trusted by</h3>
          <div className="md:grid md:grid-cols-4 gap-3 flex flex-col">
            <img
              className="w-[190px] h-[66px] mb-[48px]"
              src="/paple.png"
              alt=""
            />
            <img
              className="w-[190px] h-[66px] mb-[48px]"
              src="/masbobz_works.png"
              alt=""
            />
            <img
              className="w-[190px] h-[66px] mb-[48px]"
              src="/notion.png"
              alt=""
            />
            <img
              className="w-[190px] h-[66px] mb-[48px]"
              src="/super.png"
              alt=""
            />
          </div>
        </section>
        <section className="mb-[96px] mt-[96px] md:grid md:grid-cols-2 flex flex-col gap-[48px]">
          <div className="mt-[80px]">
            <div className="max-w-[300px]">
              <h3 className="text-3xl font-semibold text-[#202020]">
                Easy to Use
              </h3>
              <p className="text-[#a3a3a3]">
                Our clean and intuitive design will help you operate the apps
                easily
              </p>
            </div>
          </div>
          <div>
            <img src="/easy_use.png" alt="" />
          </div>
        </section>

        <section className="mb-[96px] mt-[96px] md:grid md:grid-cols-2 flex flex-col">
          <div>
            <img src="/upgrade.png" alt="" />
          </div>
          <div className="mt-[80px]">
            <div className="max-w-[300px]">
              <h3 className="text-3xl font-semibold text-[#202020]">
                Upgrade When You Need
              </h3>
              <p className="text-[#a3a3a3]">
                We committed to provide the free plan forever. Once you need an
                upgrade, we will be there for you
              </p>
            </div>
          </div>
        </section>

        <section className="mb-[96px] mt-[96px] md:grid md:grid-cols-3 gap-[48px] flex flex-col">
          <div>
            <img src="/Icon_clock.png" alt="" />
            <h3 className="text-2xl font-semibold text-[#202020]">
              24 Hours Customer Service
            </h3>
            <p className="text-[#a3a3a3]">
              We respect your passion to run your business by always accompany
              you
            </p>
          </div>
          <div>
            <img src="/Icon_coins.png" alt="" />

            <h3 className="text-2xl font-semibold text-[#202020]">
              Currencies All Over The World
            </h3>
            <p className="text-[#a3a3a3]">
              Our complete and real-time currencies database will help your
              business
            </p>
          </div>
          <div>
            <img src="/Icon_arrow.png" alt="" />

            <h3 className="text-2xl font-semibold text-[#202020]">
              Upgrade Once You Ready
            </h3>
            <p className="text-[#a3a3a3]">
              No worries, we always welcome you once you ready to upgrade
            </p>
          </div>
        </section>

        <section className="mb-[96px] mt-[96px] md:grid md:grid-cols-2 gap-[48px] flex flex-col">
          <article className="flex gap-[48px]">
            <img
              src="/Profile_Picture_Ashley.png"
              className="w-[96px] h-[96px]"
              alt=""
            />
            <div>
              <p className="font-bold text-[#0570EB] text-3xl">“ ”</p>
              <p className="font-semibold text-[#202020]">
                Really happy with the product and kind services provided by
                Cofile. Will recommend it to the world!
              </p>
              <hr className="mt-4 mb-4 bg-[#DEDEDE]" />
              <p className="text-[#202020]">Ashley Rock</p>
              <p className="text-[#A3A3A3]">Founder of Paple</p>
            </div>
          </article>
          <article className="flex gap-[48px]">
            <img
              src="/Profile_Picture_Natali.png"
              className="w-[96px] h-[96px]"
              alt=""
            />
            <div>
              <p className="font-bold text-[#0570EB] text-3xl">“ ”</p>
              <p className="font-semibold text-[#202020]">
                Really happy with the product and kind services provided by
                Cofile. Will recommend it to the world!
              </p>

              <hr className="mt-4 mb-4 bg-[#DEDEDE]" />
              <p className="text-[#202020]">Ashley Rock</p>
              <p className="text-[#A3A3A3]">Founder of Paple</p>
            </div>
          </article>
        </section>

        <section className="mb-[96px] mt-[96px] md:grid md:grid-cols-2 gap-[48px] flex flex-col">
          <div>
            <img src="/Icon_ask.png" alt="" />
            <p className="font-semibold max-w-[300px] text-[28px] text-[#202020] ">
              Frequently {<br />} Asked Questions
            </p>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="border-b-[1px] border-b-[#DEDEDE] p-3">
              <p className="font-semibold text-[#202020] text-2xl">
                Is there any limitation for free plan?
              </p>
            </div>
            <div className="border-b-[1px] border-b-[#DEDEDE] p-3">
              <p className="font-semibold text-[#202020] text-2xl">
                What is the minimum specification to run the apps on Android or
                iOS?
              </p>
            </div>
            <div className="border-b-[1px] border-b-[#DEDEDE] p-3">
              <p className="font-semibold text-[#202020] text-2xl">
                Can I downgrade the plan?
              </p>
            </div>
          </div>
        </section>
        <section className="mb-[96px] mt-[96px] md:grid md:grid-cols-2 gap-[48px] flex flex-col">
          <div>
            <div className="mb-[40px]">
              <h3 className="font-semibold text-[#202020] text-[28px]">
                Get it Now
              </h3>
              <p className="text-[#a3a3a3]">
                Monitor your worldwide business with this handy apps
              </p>
            </div>

            <div className="flex flex-col gap-[16px]">
              <img className="w-[170px] h-[57px]" src="/App_Store.png" />
              <img className="w-[170px] h-[57px]" src="/Google_Play.png" />
            </div>
          </div>

          <div>
            <img src="/get_it_now.png" alt="" />
          </div>
        </section>
      </main>
      <FooterComponent />
    </>
  );
};

export { Home };
