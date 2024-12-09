'use client';

import React from "react";
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import styles from "../page.module.css";



import { InputText } from 'primereact/inputtext'; // Import InputText
import {Button} from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber'; // Import InputNumber
import { useRouter } from "next/navigation";


export default function login() {
    const route = useRouter();
  return (
    <div className="flex align-items-center justify-content-center h-screen" style={{ fontFamily: "'Geist Mono VF', monospace" }}>
        <div className="w-4 text-center   p-5	border-round-lg shadow-5">
            <div className="text-blue-500 text-2xl font-bold mb-5">Login</div>
            <div className="flex align-items-center justify-content-center m-5">
                <div className="w-6 text-blue-500">
                    <div >Name :</div>
                </div>
                <InputText className="w-6" style={{ fontFamily: "'Geist Mono VF', monospace" }}></InputText>
            </div>
            <div className="flex align-items-center justify-content-center m-5">
                <div className="w-6 text-blue-500">
                    <div>Password :</div>
                </div>
                <InputText className="w-6" style={{ fontFamily: "'Geist Mono VF', monospace" }}></InputText>
            </div>
            <div className="flex flex-column justify-content-center align-items-center">
                <Button className="w-4 justify-content-center p-1 m-2" onClick={() => {
                        route.push("/talk")
                }} style={{ fontFamily: "'Geist Mono VF', monospace" }}>Login</Button>
                <Button className="w-4 justify-content-center p-1 m-2 bg-white border-0 text-blue-500" onClick={() => {
                        route.push("/register")
                }} style={{ fontFamily: "'Geist Mono VF', monospace" }}>Don't you have an acount?</Button>
            </div>

        </div>
    </div>
  );
}
