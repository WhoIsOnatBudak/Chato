'use client';

import React, { useState, useEffect } from "react";
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css'; // Ensure PrimeReact styles are loaded
import 'primeicons/primeicons.css'; // Import PrimeIcons for the account icon

import { useRouter } from "next/navigation";

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function Talk() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/user-data'); // Replace with your API endpoint
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                const data = await response.json();
                setEmail(data.email || ''); // Update the state with fetched data
                setName(data.name || '');
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []);

    const route = useRouter();
  return (
    <div className="flex align-items-center justify-content-center h-screen" style={{ fontFamily: "'Geist Mono VF', monospace" }}>
        <div className="flex flex-column border-1 border-round-lg p-8 border-blue-500 shadow-2">

            <i className=" flex text-blue-500 pi pi-user text-2xl align-items-center justify-content-center cursor-pointer p-3" title="Account"></i>

            <div className="flex align-items-center justify-content-center m-5">
                <div className="w-6 text-blue-500">
                    <div>E-mail :</div>
                </div>
                <InputText disabled className="w-6" style={{ fontFamily: "'Geist Mono VF', monospace" }} value={email}
                onChange={(e) => setEmail(e.target.value)}></InputText>
            </div>

            <div className="flex align-items-center justify-content-center m-5">
                <div className="w-6 text-blue-500">
                    <div>Name :</div>
                </div>
                <InputText disabled className="w-6" style={{ fontFamily: "'Geist Mono VF', monospace" }} value={name} 
                onChange={(e) => setName(e.target.value)}></InputText>
            </div>

            <Button className="bg-white border-0 text-blue-500 justify-content-center " style={{ fontFamily: "'Geist Mono VF', monospace" }}
            >Submit</Button>

        </div>
    </div>
  );
}
  