import React from 'react';
import logo from '../Images/logo.png';
import man_img from '../Images/man_img.png';
import compass from '../Images/compass.png';
import vector from '../Images/Vector.png';

const Deposit = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className=" h-[844px] w-[390px] bg-[#1E1E1E] ">
        <header className="flex justify-between items-center bg-[#10141B] h-[64px] w-[390px]">
            <img src={logo} alt="Logo" className="h-[40px] mx-3" />
            <img src={man_img} alt="User" className="w-[40px] h-[40px] mx-5" />
        </header>
        <main className="border border-red-500 w-[336px] h-[660px] mx-auto mt-6 bg-[#10141B] rounded-md p-4">
          <div className="border border-red-500 flex items-center mb-4">
            <p className="text-white font-small text-[20px]">Top-Up Funds</p>
            <div className="border border-red-500 bg-gradient-to-r from-[#7F34DE] via-[#0DA492] to-[#0DA492] h-[24] w-[77] mx-6 rounded-md">
              <h2 className="text-white font-semibold text-md bg-clip-text text-transparent bg-gradient-to-r from-[#7F34DE] via-[#0DA492] to-[#0DA492]">Deposit</h2>
            </div>
            <div className="bg-[#282B30] rounded-md">
              <h3 className="font-semibold text-md text-[#4C515C]">Withdraw</h3>
            </div>
          </div>
          <hr className="border-[#787777] border-opacity-90 mb-6" />
          <div className="bg-[#0A0D12] rounded-md p-4 mb-6">
            <div className="flex justify-between items-center">
              <h4 className="font-semibold text-[#BDB4F5]">Total Balance</h4>
              <h5 className="font-semibold text-[#BDB4F5]">0.00 ETH</h5>
            </div>
          </div>
          <h6 className="text-white font-medium mb-4">Deposit Amount</h6>
          <div className="bg-[#11151D] border-[#2B2B45] border-solid rounded-md p-4 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h7 className="text-[#FCFCFF] font-medium text-[18px]">0.00</h7>
              <div className="bg-[#232A37] border-[#373F4E] border-solid rounded-full p-1 flex items-center">
                <img src={compass} alt="Compass" className="h-[16px] mx-2" />
                <h8 className="text-[#FCFCFF] font-medium text-[13px]">WETH</h8>
                <img src={vector} alt="Vector" className="h-[7px] mx-2" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#AAAAAA] font-normal">$ 0.00</p>
              <p className="text-[#AAAAAA] font-normal">Balance: 0.00</p>
            </div>
          </div>
        <div className='w-[310.55] h-[47] border border-red-500 bg-[#323042]'>
            <p className='text-white h-[30] font-medium text-[13px] mx-2'>The above deposited amount will be withdrawn in WETH and you can convert it later.</p>
        </div>

        <button className="bg-gradient-to-r from-[#7F34DE] via-[#0DA492] to-[#0DA492] w-full py-2 rounded-md text-white font-medium text-[18px] mt-6">Deposit</button>
    </main>
    </div>
</div>
);
};

export default Deposit;