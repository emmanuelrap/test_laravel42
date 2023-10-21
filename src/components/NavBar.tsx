export default function NavBar() {
  return (
    <div className="w-[calc(100vw-50px)] h-100 absolute top-0 mx-5 m-2 flex flex-row justify-between items-end">
      <img src="icon-nav.PNG" alt="logo" />
      <a href="" className="mb-5 font-bold underline">
        <div className="flex items-center">
          <img src="secure.PNG" alt="security" /> Form Sicuro
        </div>
      </a>
    </div>
  );
}
