"use client";
import Accordion from "@/components/Accordion";
import CheckboxCustom from "@/components/Checkbox";
import CustomRangeSlider from "@/components/RangeSlider";
import { propertyAmenities } from "@/public/data/addpropertyAmenities";
import {
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState, useCallback } from 'react'
import React, { useRef } from "react";
import "@uploadthing/react/styles.css";
import { useRouter } from 'next/navigation'
import { useSession } from "next-auth/react"
import { toast } from 'react-toastify'
import { UploadButton } from "src/utils/uploadthing";
import { CldUploadWidget } from 'next-cloudinary';

import { CldUploadButton } from 'next-cloudinary';
import styles from '@/styles/Home.module.css';
import UploadWidget from '@/components/UploadWidget';




interface ErrorType {
  statusText:string;
  // Add other properties based on your API response
}

type FormInputs = {
  phoneNumber: string;
};

export default function Page() {
  const Router = useRouter()
  const [insurance, setInsurnace] = useState<{
    secure_url: string;
      event: string;
  }[]>([])
  const [identity, setIdentity] = useState<{
    secure_url: string;
    event: string;
  }[]>([])
  const [picture, setProfilePicture] = useState<{
    secure_url: string;
      url: string;
  }[]>([])

  const { data: session } = useSession();
 

  


  const data = useRef<FormInputs>({
    phoneNumber: "",
  });


  //const handleOnClick = useRef();

  const Register = async (event:any) => {
    event.preventDefault();
    if ([picture, insurance, identity].every(arr => arr.length === 0)) {
      //Toast
    }
    console.log('files',picture, insurance, identity,)
    console.log(session?.user?.id)
    const res = await fetch(`https://blesstours.onrender.com/api/v1/users/verify/${session?.user?.id}`, {
      method: "POST",
      body: JSON.stringify({  
        
        picture:picture,
        insurance:insurance,
        identity:identity,
        phone: data.current.phoneNumber

      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("onboarding")
    const response = await res.json();
    console.log(response)
    alert(response.status);
    
    //console.log({ response });
    setTimeout(() => {
      Router.push("/user/personal-info");
    }, 2000); // Adjust the delay time as needed
    
   
  }


  const handleProfileUploads = useCallback(async ( result: any) => {
    
    console.log("result",result);
    setProfilePicture(result?.info?.secure_url)
  }, []);
  
  const handleIdentityUploads = useCallback(async (result: any) => {
    
    console.log(result.info.secure_url);
    setIdentity(result.info.secure_url)
  }, []);
  
  const handleInsuranceUploads = useCallback(async (result: any) => {
    
    console.log(result.info.secure_url);
    setInsurnace(result.info.secure_url)
  }, []);
  

  return (
    <div className="py-[30px] lg:py-[60px] bg-[var(--bg-2)] px-3">
      <div className="container">
        <div className="w-full xl:w-[93.33%] xxl:w-[86.66%] mx-auto">
          {/* Item 1 */}
          <div className="bg-white p-4 sm:p-6 md:p-10 mb-5 sm:mb-8 md:mb-12 rounded-2xl">
            <Accordion
              buttonContent={(open) => (
                <div className="rounded-2xl flex justify-between items-center">
                  <h3 className="h3">Onboarding </h3>
                  <ChevronDownIcon
                    className={`w-5 h-5 sm:w-6 sm:h-6 duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </div>
              )}
              initialOpen={true}>
              <div className="pt-4">
                <div className="border-t pt-4">
                  
                  <form onSubmit={Register}>
                    <p className="mt-6 mb-4 text-xl font-medium">Phone Number:</p>
                    <input
                      type="text"
                      required
                      onChange={(e) => (data.current.phoneNumber = e.target.value)}
                      className="w-full border p-2 focus:outline-none rounded-md text-base"
                      placeholder="Enter your phone number"
                    />
                  
                      <div className="pt-10 property-card__body">
                      <div className="flex flex-wrap justify-between items-center">
                        
                        <p className="mt-6 mb-4 text-xl font-medium">Profile Picture :</p>
                        <CldUploadWidget options={{ maxFiles: 1 }} uploadPreset="Bless-Tours" onUpload={handleProfileUploads} >
                          {({ open }) => {
                            function handleOnClick(e:any) {
                              e.preventDefault();
                              open();
                            }
                            return (
                              
                              <button className="link inline-block py-3 px-6 rounded bg-primary text-white :bg-primary-400 hover:text-white font-semibold" onClick={handleOnClick}>
                                Choose File
                              </button>
                            )
                          }}
                        </CldUploadWidget>
                      
                      </div>
                    </div>
                      
                      <div className="pt-10 property-card__body">
                      <div className="flex flex-wrap justify-between items-center">
                        
                        <p className="mt-6 mb-4 text-xl font-medium">Identity Document :</p>
                        <CldUploadWidget options={{ maxFiles: 1 }} uploadPreset="Bless-Tours" onUpload={handleIdentityUploads} >
                          {({ open }) => {
                            function handleOnClick3(e:any) {
                              e.preventDefault();
                              open();
                            }
                            return (
                              
                              <button className="link inline-block py-3 px-6 rounded bg-primary text-white :bg-primary-400 hover:text-white font-semibold" onClick={handleOnClick3}>
                                Choose File
                              </button>
                            )
                          }}
                        </CldUploadWidget>
                      
                      </div>
                    </div>
                      
                    
                    <div className="pt-10 property-card__body">
                      <div className="flex flex-wrap justify-between items-center">
                        
                        <p className="mt-6 mb-4 text-xl font-medium">Insurance Document:</p>
                        <CldUploadWidget options={{ maxFiles: 1 }} uploadPreset="Bless-Tours" onUpload={handleInsuranceUploads} >
                          {({ open }) => {
                            function handleOnClick(e:any) {
                              e.preventDefault();
                              open();
                            }
                            return (
                              
                              <button className="link inline-block py-3 px-6 rounded bg-primary text-white :bg-primary-400 hover:text-white font-semibold" onClick={handleOnClick}>
                                Choose File
                              </button>
                            )
                          }}
                        </CldUploadWidget>
                      
                      </div>
                    </div>

                  <div className="mt-8 pt-10">
                  

                  <button type="submit" className="btn-primary font-semibold">
                    <span className="inline-block"> Save </span>
                  </button>
               
              </div>
              </form>
                  
                </div>
              </div>
            </Accordion>
          </div>
          {/* Item 2 */}
          

          
        </div>
      </div>
    </div>
  );
};


