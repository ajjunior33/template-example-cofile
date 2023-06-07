const FooterComponent: React.FC = () => {
  return (
    <footer className="bg-[#F5F5F5]  mt-[96px] pt-[96px] pb-[96px] p-[24px]">
      <main className="max-w-[1080px] m-auto">
        <header className="flex md:flex-row flex-col justify-between md:items-center items-start gap-[24px]">
          <img src="/Logo.svg" />
          <div className="flex items-center gap-[16px]">
            <img src="/Instagram.png" />
            <img src="/Twitter.png" />
            <img src="/Dribbble.png" />
            <img src="/Medium.png" />
          </div>
        </header>
        <nav>
          <ul className="flex items-center gap-4 mt-10 mb-10">
            <li className="text-[20px]">Home</li>
            <li className="text-[20px]">About us</li>
            <li className="text-[20px]">Pricing</li>
          </ul>
        </nav>

        <p>Create by Meraki Consultoria</p>
      </main>
    </footer>
  );
};
export { FooterComponent };
