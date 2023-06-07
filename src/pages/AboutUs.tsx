import { FooterComponent } from "../components/Footer";
import { HeaderComponent } from "../components/Header";

const AboutUs: React.FC = () => {
  return (
    <>
      <HeaderComponent />

      <main className="md:max-w-[908px] m-auto p-[24px]">
        <section className="md:grid md:grid-cols-2 mt-[64px] mb-[64px] flex flex-col gap-[48px]">
          <div>
            <h3 className="max-w-[300px] font-semibold text-[#202020] text-4xl">
              We are a Group of Individuals With a Big Mission
            </h3>
          </div>
          <div className="flex flex-col items-center gap-6">
            <p className="text-[#A3A3A3]">
              We are a group of individuals with a big mission to help many
              businesses all over the world reach their biggest potential.
            </p>
            <p className="text-[#A3A3A3]">
              We provide them with our stable mobile apps to help them maintain
              their business. And obviously, we will continuously improve our
              products and services.
            </p>
          </div>
        </section>
      </main>

      <img src="/Breakline_Image.png" className="w-full" />
      <main className="md:max-w-[908px] p-[24px] m-auto">
        <section className="md:grid md:grid-cols-3 items-center gap-[48px] mt-[64px] mb-[64px] flex flex-col">
          <div>
            <h3 className="font-semibold text-[#202020] text-4xl">
              Our Milestones
            </h3>
          </div>
          <div>
            <img src="/Icon_Star.png" className="mb-4" alt="" />
            <h3 className="font-semibold text-[#202020] text-4xl">
              4.85 / 5.0
            </h3>
            <p className="text-[#A3A3A3] max-w-[220px]">
              Rating on Google Play & App Store
            </p>
          </div>
          <div>
            <img src="/Icon_Star.png" className="mb-4" alt="" />
            <h3 className="font-semibold text-[#202020] text-4xl">8.5k ++</h3>
            <p className="text-[#A3A3A3] max-w-[220px]">
              Downloads on Google Play & App Store
            </p>
          </div>
        </section>

        <section className="mt-[64px] mb-[64px]">
          <h3 className="font-semibold text-[#202020] text-4xl mb-8 ml-[24px] md:ml-[0px]">
            Our Super Team
          </h3>

          <main className="flex md:flex-row flex-col items-center gap-12">
            <article className="flex flex-col gap-4">
              <img src="/Profile_Picture.png" alt="" />
              <p className="font-semibold text-[#202020]">John Hughes</p>
              <p className="text-[#a3a3a3]">Sales & Marketing</p>
            </article>
            <article className="flex flex-col gap-4">
              <img src="/Profile_Picture_1.png" alt="" />
              <p className="font-semibold text-[#202020]">Michael Armstrong </p>
              <p className="text-[#a3a3a3]">Full Stack Developer</p>
            </article>
            <article className="flex flex-col gap-4">
              <img src="/Profile_Picture_2.png" alt="" />
              <p className="font-semibold text-[#202020]">Phil Schneider</p>
              <p className="text-[#a3a3a3]">Product Designer</p>
            </article>
          </main>
        </section>

        <section className="md:grid md:grid-cols-2 flex flex-col items-center mt-[64px] mb-[64px] ">
          <div className="max-w-[300px]">
            <h3 className="font-semibold text-[#202020] text-4xl mb-2">
              Fully Remote Team
            </h3>
            <p className="text-[#a3a3a3]">
              With a professional approach, we successfully build this remote
              team
            </p>
          </div>
          <div>
            <img src="/Map.png" alt="" />
          </div>
        </section>
      </main>
      <FooterComponent />
    </>
  );
};

export { AboutUs };
