'use client';

import React from "react";
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/saga-blue/theme.css';


import { InputText } from 'primereact/inputtext'; // Import InputText
import {Button} from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber'; // Import InputNumber
import { useRouter } from "next/navigation";


export default function login() {
    const route = useRouter();
  return (
    <div className="flex align-items-center justify-content-center h-screen">
        <div className="w-4 text-center border-2   p-5	border-round-lg shadow-5">
            <div className="text-blue-500 text-2xl font-bold mb-5">LOGIN</div>
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
            <div className="flex flex-column justify-content-center align-items-center">
                <Button className="w-4 justify-content-center p-1 m-2" onClick={() => {
                        route.push("/talk")
                }}>Login</Button>
                <Button className="w-4 justify-content-center p-1 m-2 bg-white border-0 text-blue-500" onClick={() => {
                        route.push("/register")
                }}>Don't you have an acount?</Button>
            </div>

        </div>
    </div>
  );
}
