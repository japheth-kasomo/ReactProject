import HomeTrip from "../Chart/homepage/HomeTrip";
import Homebarhorizon from "../Chart/homepage/Homebarhorizon";

export function BarChartSection() {
  return (
    <div className="col-span-7 bg-[#ffffff] rounded-[12px]">
      <div className="p-[32px]">
        <div className="border-b-[1px] border-[#F2F4F7]">
          <div className="mb-[10px]">
            <h3 className="font-Inter font-[500] text-[18px] leading-[21px] text-[#101828]">Bar Chart</h3>
            <p className="font-Inter font-[400] text-[14px] leading-[19px] text-[#667085]">Please refer instructions on how to get these values</p>
          </div>
        </div>
        <div className="mt-[30px]">
          <Homebarhorizon />
        </div>
      </div>
    </div>
  );
}

export function TripInfoSection() {
  return (
    <div className="col-span-5 p-[16px] flex flex-col bg-[#ffffff] rounded-[12px]">
      <div className="border-b-[1px] border-[#F2F4F7]">
        <div className="flex items-center justify-between mb-[10px]">
          <div className="">
            <h3 className="font-Inter font-[500] text-[18px] leading-[21px] text-[#101828]">Total: 900 Trips</h3>
            <p className="font-Inter font-normal text-[12px] text-[#667085] leading-[16px]">Please refer instructions on how to get these</p>
          </div>

          <select name="" id="" className="outline-none rounded-[8px] border-[1px] p-[4px] border-[#E4E7EC] text-[#101828] text-[12px] font-Inter leading-[18px]">
            <option value="">January</option>
            <option value="">February</option>
            <option value="">March</option>
            <option value="">April</option>
            <option value="">May</option>
            <option value="">June</option>
            <option value="">July</option>
            <option value="">August</option>
            <option value="">September</option>
            <option value="">October</option>
            <option value="">November</option>
            <option value="">December</option>
          </select>
        </div>
      </div>
      <div className=" ">
        <HomeTrip />
      </div>
    </div>
  );
}
