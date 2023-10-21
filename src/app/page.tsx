import Form from "@/components/Form";
import NavBar from "@/components/NavBar";
import ProgressBar from "@/components/ProgressBar";

export default function Home() {
  return (
    <div className="w-[calc(100vw-0px)] h-[calc(100vh-100px)] bg-gray-200">
      <NavBar />

      <div className="container mx-auto p-4 mt-20">
        <div className="bg-white rounded-lg p-5 shadow-lg">
          <ProgressBar percentage={10} />

          <div className="flex items-center bg-yellow-400  flex-row justify-between items-end px-10">
            <p className="text-center lg:text-left text-2xl sm:text-3xl font-semibold text-gray-700 leading-tight ">
              Hai scelto un importo di 3.000 €
            </p>
            <img src="primo.PNG" alt="security" />
          </div>

          <Form />
        </div>
      </div>
    </div>
  );
}
