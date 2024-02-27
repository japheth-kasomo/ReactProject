function FleetUtilizationSection({ title, description, selectOptions, chartComponent }) {
  return (
    <div className="bg-[#ffffff] rounded-[12px] p-[32px]">
      <div className="border-b-[1px] border-[#F2F4F7] mb-[10px]">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-Inter font-[500] text-[18px] leading-[21px] text-[#101828]">{title}</h3>
            <p className="font-Inter font-[400] tracking-tight text-[14px] leading-[19px] text-[#667085]">{description}</p>
          </div>
          <div className="px-[12px] py-[6px] border-[1px] border-[#E4E7EC] rounded-[8px]">
            <select name="" id="" className="outline-none font-[500] text-[12px] text-[#101828] font-Inter leading-[18px]">
              {selectOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="mt-[30px]">
        {/* Render respective chart component */}
        {chartComponent}
      </div>
    </div>
  );
}

export default FleetUtilizationSection;
