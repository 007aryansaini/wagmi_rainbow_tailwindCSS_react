import { useContractRead } from "wagmi";

import ABI from "./abi.json";

function CurrentValue() {
  const { data, isSuccess } = useContractRead({
    address: "0x23E336C3D4c5a0BE3a0fE5acC1cb4Dd84cc3a7c4",
    abi: ABI,
    functionName: "storedData",
    watch: true,
  });

  if (isSuccess) {
    return (
      <>
        <div className="text-xl md:text-3xl lg:text-4xl xl:text-6xl font-extrabold text-cyan-900">
          Current Value : <span> </span>
          {data.toString()}
        </div>
      </>
    );
  } else {
    return <>Failed in loading current value...</>;
  }
}

export default CurrentValue;
