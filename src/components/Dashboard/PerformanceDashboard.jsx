export function VehiclePerformance({ vehicleData }) {
  return (
    <div className="bg-[#ffffff] rounded-[12px] col-span-6">
      <div className="p-[32px]">
        <div className="border-b-[1px] border-[#F2F4F7]">
          <h3 className="font-Inter font-[500] text-[18px] leading-[21px] pb-[10px] text-[#101828]">Vehicle Performance</h3>
        </div>
        <div className="mt-[24px] space-y-[28px]">
          {/* Render vehicle performance data */}
          {vehicleData.map((vehicle, index) => (
            <div key={index} className="flex items-center gap-[16px]">
              <p className="text-[#667085] font-Inter font-[400] text-[12px] leading-[12px]">{vehicle.name}</p>
              <div style={{ width: `${vehicle.percentage}%` }} className={` h-[24px] rounded-br-[4px] rounded-tr-[4px] bg-[#7279D5]`}></div>
              <h5 className="text-[14px] font-[600] text-[#344054]">{vehicle.percentage}%</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AreaPerformance({ areaData }) {
  return (
    <div className="bg-[#ffffff] rounded-[12px] col-span-6">
      <div className="p-[32px]">
        <div className="border-b-[1px] border-[#F2F4F7]">
          <h3 className="font-Inter font-[500] text-[18px] leading-[21px] pb-[10px] text-[#101828]">Area Performance</h3>
        </div>
        <div className="mt-[24px]">
          <div className="relative ">
            {/* Render area performance table */}
            <table className="w-full text-sm text-left border rounded-[12px] rtl:text-right">
              {/* Table headings */}
              <thead className="text-xs text-[#475467] border bg-[#ECF0F5]">
                <tr>
                  <th scope="col" className="px-6 py-3  border-r">
                    Area Name
                  </th>
                  <th scope="col" className="px-6 py-3 border-r">
                    Completion
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Render area performance data */}
                {areaData.map((area, index) => (
                  <tr key={index} className="bg-white border">
                    <th scope="row" className="px-2 py-3 border-r text-[14px] text-[#344054] whitespace-nowrap">
                      {area.name}
                    </th>
                    <td className="px-2 py-3 border-r">
                      <div className="flex items-center gap-2">
                        <div className="w-[100px] h-[6.5px] rounded-[22px] bg-[#F2F4F7]">
                          <div className={`w-[${area.completion}%] h-[6.5px] rounded-[22px] bg-[${area.color}]`}></div>
                        </div>
                        <div>
                          <p className="font-[500] text-[14px] leading-[21px] font-Inter text-[#344054]">{area.completion}%</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-2 py-3">
                      <div className={`w-[130px] h-[26px] flex items-center justify-center rounded-[6px] px-[10px] py-[2px] bg-[${area.color}] text-[14px] text-[#ffffff]`}>{area.status}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
