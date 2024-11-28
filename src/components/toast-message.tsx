"use client";
import { useToast } from "@/contexts/toast";

import Image from "next/image";
import VerifyImage from "@/assets/images/toast/verify.svg";
import XMarkImage from "@/assets/images/toast/x-mark.svg";

export default function ToastMessage() {
  const { toast, position, message } = useToast();

  return (
    <>
      <div
        className={`${
          message.length > 0 ? "scale-100" : "scale-0"
        } w-max max-w-[250px] duration-300 z-50 fixed top-[77px] py-3 h-max px-4 rounded-xl flex items-center gap-1 ${
          position === "center"
            ? "left-[50vw] -translate-x-[50%]"
            : "right-[50vw] translate-x-[50%] lg:translate-x-0 lg:right-[10%] "
        } ${toast === "success" ? "bg-[#F2F2F2]" : "bg-[#FFEAEA]"}`}
      >
        <Image
          src={VerifyImage}
          className={`${toast === "success" ? "block" : "hidden"}`}
          width={24}
          height={24}
          alt=""
        />
        <Image
          className={`${toast === "error" ? "block" : "hidden"}`}
          src={XMarkImage}
          width={24}
          height={24}
          alt=""
        />
        <p
          className={`font-normal text-sm ${
            toast === "success" ? "text-[#006633]" : "text-[#F13562]"
          }`}
        >
          {message}
        </p>
      </div>
    </>
  );
}
