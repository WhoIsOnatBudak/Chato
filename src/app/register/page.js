'use client';

import React, { useState } from "react";
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/saga-blue/theme.css';


import { InputText } from 'primereact/inputtext'; // Import InputText
import {Button} from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber'; // Import InputNumber
import { useRouter } from "next/navigation";

import { Checkbox } from "primereact/checkbox";
import { SelectButton } from 'primereact/selectbutton';
        


export default function register() {
    const route = useRouter();
    const [checked, setChecked] = useState(true);
  return (
    <div className="flex align-items-center justify-content-center h-screen">
        <div className="w-4 text-center border-2   p-5	border-round-lg shadow-5">

            <div className="text-blue-500 text-2xl font-bold mb-5">Register</div>

            <div className="flex align-items-center justify-content-center m-5">
                <div className="w-6">
                    <div>E-mail :</div>
                </div>
                <InputText className="w-6"></InputText>
            </div>

            <div className="flex align-items-center justify-content-center m-5">
                <div className="w-6">
                    <div>Name :</div>
                </div>
                <InputText className="w-6"></InputText>
            </div>

            <div className="flex align-items-center justify-content-center m-5">
                <div className="w-6">
                    <div>Password :</div>
                </div>
                <InputText className="w-6"></InputText>
            </div>

            <div className="flex align-items-center justify-content-center m-5">
                
                <div className="card flex justify-content-center m-2">
                    <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                </div>
                <div className="w-6 text-gray-400">
                    <div>I accept every advertise and spam mail</div>
                </div>
            </div>

            
        

            <div className="flex flex-column justify-content-center align-items-center">
                <Button className="w-4 justify-content-center p-1 m-2" onClick={() => {
                        route.push("/")
                }}>Register</Button>
                <Button className="w-4 justify-content-center p-1 m-2 bg-white border-0 text-blue-500" onClick={() => {
                        route.push("/login")
                }}>Do you have an acount?</Button>
            </div>

        </div>
    </div>
  );
}
