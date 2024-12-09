'use client';

import React from "react";
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css'; // Ensure PrimeReact styles are loaded
import 'primeicons/primeicons.css'; // Import PrimeIcons for the send icon

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function Talk() {
  return (
    <div className="h-screen flex flex-column">
      <div className="flex flex-grow-1"></div> {/* Empty space to push content to the bottom */}
      <div className="flex flex-row justify-content-center mb-4">
        <div className="relative w-8">
          <InputText className="p-3 border-round-2xl w-full" placeholder="Type here"></InputText>
          <Button 
            className="absolute right-0 top-0 p-button-rounded p-button-text" 
            style={{ height: "100%", marginRight: "0.5rem" }}
          >
            <i className="pi pi-send"></i> {/* PrimeIcons send icon */}
          </Button>
        </div>
      </div>
    </div>
  );
}
