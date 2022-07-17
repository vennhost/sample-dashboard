import logo from "./logo.svg";
import "./App.css";
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import Chart from "./components/Chart";

function App() {
  return (
    <div className="h-screen w-full">
      <div className="flex flex-row justify-start items-start w-full">
        <div className="w-1/6 bg-sky-600 h-screen flex flex-col justify-start items-start pl-5">
          <div className="py-10">
            <img
              src="https://res.cloudinary.com/vtu-tech-solutions/image/upload/v1658062774/isedowo/Group_1_ymquhp.svg"
              height="28.8px"
              width="98px"
              alt="logo"
            />
          </div>
          <SideMenu />
        </div>
        <div className="w-5/6 px-5 bg-gray-100 h-screen">
          <div className="w-full my-5">
            <Header />
          </div>
          <div>
            <h1 className="font-bold text-2xl">Patient Dashboard</h1>
          </div>
          <div className="flex flex-row justify-start items-start my-5 w-full">
            <div className="w-2/3 ">
            <div className="rounded-md bg-white mr-5 px-5 py-5">
              <div>
                <span className="font-bold mr-10">Financing Summary</span>
                <span className=" text-gray-500">Application ID: 2789498474676</span>
              </div>
              <div className="flex flex-row justify-start items-start my-5">
                <div className="flex flex-col justify-center items-center mr-10 w-1/3">
                  <div className="rounded-md bg-orange-100 text-center text-orange-400 px-5 py-2 w-2/3 h-16 font-bold flex flex-col justify-center items-center text-2xl">
                    25,000
                  </div>
                  <p className="w-2/3 text-center">Loan Amount</p>
                </div>
                <div className="flex flex-col justify-center items-center mr-10 w-1/3">
                  <div className="rounded-md bg-green-100 text-center text-green-400 px-5 py-2 w-2/3 h-16 font-bold flex flex-col justify-center items-center text-2xl">
                    25,000
                  </div>
                  <p className="w-2/3 text-center">Already repaid</p>
                </div>
                <div className="flex flex-col justify-center items-center w-1/3">
                  <div className="rounded-md bg-red-100 text-center text-red-400 px-5 py-2 w-2/3 h-16 font-bold flex flex-col justify-center items-center text-2xl">
                    25,000
                  </div>
                  <p className="w-2/3 text-center">Remaining to be repaid</p>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white mr-5 pl-5 py-5 my-5">
              <div>
                <h2 className="font-bold">Financing Tracker</h2>
              </div>
              <div className="flex flex-row justify-start items-start">
              <div className="w-1/2 h-full flex flex-col justify-center items-center">
                <Chart />
                <div>
                  <ul className="flex flex-row justify-start items-center">
                    <li className="mr-2">Days</li>
                    <li className="mr-2">Hours</li>
                    <li className="mr-2">Days</li>
                    <li className="mr-2">Hours</li>
                  </ul>
                  <p className="font-bold text-3xl">25:06:21:23</p>
                </div>
              </div>
              <div className="w-1/2 flex flex-col justify-center items-center">
                <div className="rounded-md bg-gray-300 my-2 py-2 px-1 text-center w-32">
                  <h3 className="text-sky-600">Collected Date</h3>
                  <p>23/05/2022</p>
                </div>
                <div className="rounded-md bg-gray-300 my-2 py-2 px-1 text-center w-32">
                  <h3 className="text-sky-600">Collected Date</h3>
                  <p>23/05/2022</p>
                </div>
                <div className="rounded-md bg-gray-300 my-2 py-2 px-1 text-center w-32">
                  <h3 className="text-sky-600">Financing Period</h3>
                  <p>10 Months</p>
                </div>
              </div>
              </div>
            </div>
            </div>
            <div className="w-1/3 rounded-md bg-white px-5 py-10">
              <div>
                <h2 className="font-bold">Finacing History</h2>
              </div>
              <div className="w-full my-10">
                <div className="bg-gray-300 px-5 py-2 rounded-md flex flex-row justify-between items-center my-2">
                  <span>ID: 6533766</span>
                  <span>22/10/2022</span>
                </div>
                <div className="bg-gray-300 px-5 py-2 rounded-md flex flex-row justify-between items-center my-2">
                  <span>ID: 6533766</span>
                  <span>22/10/2022</span>
                </div>
                <div className="bg-gray-300 px-5 py-2 rounded-md flex flex-row justify-between items-center my-2">
                  <span>ID: 6533766</span>
                  <span>22/10/2022</span>
                </div>
                <div className="bg-gray-300 px-5 py-2 rounded-md flex flex-row justify-between items-center my-2">
                  <span>ID: 6533766</span>
                  <span>22/10/2022</span>
                </div>
                <div className="bg-gray-300 px-5 py-2 rounded-md flex flex-row justify-between items-center my-2">
                  <span>ID: 6533766</span>
                  <span>22/10/2022</span>
                </div>
                <div className="bg-gray-300 px-5 py-2 rounded-md flex flex-row justify-between items-center my-2">
                  <span>ID: 6533766</span>
                  <span>22/10/2022</span>
                </div>
                <div className="bg-gray-300 px-5 py-2 rounded-md flex flex-row justify-between items-center my-2">
                  <span>ID: 6533766</span>
                  <span>22/10/2022</span>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center text-white">
                <div className="px-5 py-2 bg-green-600 rounded-md">
                  <span>See all history</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
