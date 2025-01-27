import React from "react";

export default function SignInStepTwo() {
  return (
    <section className="w-full h-screen bg-white font-poppins">
      <div className="max-w-[90%] h-screen mx-auto flex justify-center items-center ">
        <form className="w-full flex flex-col gap-[3.125rem] px-[2.5rem] py-[2.5rem] border-[0.063rem] border-[#CBD5E1] rounded-[0.375rem]">
          <div className="flex flex-col gap-5">
            <h2 className="text-[1.563rem] font-bold ">Verify Your Account</h2>
            <h3>Enter the code we sent to your email account</h3>
          </div>
          <div className="flex flex-col gap-[2.25rem]">
            <div className="flex flex-col gap-[1rem]">
              <h3 className="text-[1.125rem] font-medium">Code</h3>
              <input
                className="w-full h-[3.125rem] pl-[1.25rem] border-[0.063rem] border-[#CBD5E1] rounded-[0.375rem] text-[1rem]"
                type="text"
                placeholder="XXXXXX"
              ></input>
            </div>
            <div className=" w-full">
              <button className=" w-full h-[3rem] bg-[#0F172A] text-white rounded-[0.375rem] font-medium text-[1.125rem]">
                Finish
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
