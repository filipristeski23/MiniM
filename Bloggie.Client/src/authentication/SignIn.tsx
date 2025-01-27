import React from "react";

export default function SignIn() {
  return (
    <section className="w-full h-screen bg-white font-poppins">
      <div className="max-w-[90%] h-screen mx-auto flex justify-center items-center ">
        <form className="w-full flex flex-col gap-[3.125rem] px-[2.5rem] py-[2.5rem] border-[0.063rem] border-[#CBD5E1] rounded-[0.375rem]">
          <h2 className="text-[1.563rem] font-bold ">
            Enter Your Name and Username
          </h2>
          <div className="flex flex-col gap-[2.25rem]">
            <div className="flex flex-col gap-[1rem]">
              <h3 className="text-[1.125rem] font-medium">Name</h3>
              <input
                className="w-full h-[3.125rem] pl-[1.25rem] border-[0.063rem] border-[#CBD5E1] rounded-[0.375rem] text-[1rem]"
                type="text"
                placeholder="Filip Risteski"
              ></input>
            </div>
            <div className="flex flex-col gap-[1rem]">
              <h3 className="text-[1.125rem] font-medium">Username</h3>
              <input
                className="w-full pl-[1.25rem] h-[3.125rem] border-[0.063rem] border-[#CBD5E1] rounded-[0.375rem] text-[1rem]"
                type="username"
                placeholder="filipristeski30"
              ></input>
            </div>
            <div className=" w-full">
              <button className=" w-full h-[3rem] bg-[#0F172A] text-white rounded-[0.375rem] font-medium text-[1.125rem]">
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
