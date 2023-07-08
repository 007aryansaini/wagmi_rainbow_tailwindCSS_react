import { useContractWrite } from "wagmi";
import ABI from "./abi.json";
import { useState } from "react";
const SetVal = () => {
  const [amount, setAmount] = useState("");

  const handleChange = (event) => {
    const newAmount = event.target.value;
    setAmount(newAmount);
  };
  const { write } = useContractWrite({
    address: "0x23E336C3D4c5a0BE3a0fE5acC1cb4Dd84cc3a7c4",
    abi: ABI,
    functionName: "set",
  });

  const onSet = (e) => {
    e.preventDefault();

    write({ args: [amount] });

    setAmount("");
  };
  return (
    <div>
      <form>
        <input
          className="p-1 w-44 md:p-2 md:w-48   rounded-xl bg-teal-50"
          type="number"
          placeholder="Enter a number to ser"
          value={amount}
          onChange={handleChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl ml-4 mt-4"
          onClick={onSet}
        >
          Set Value
        </button>
      </form>
    </div>
  );
};

export default SetVal;
