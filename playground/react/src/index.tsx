import React from 'react';
import ReactDOM from 'react-dom/client';
import { Color, Image, Text, Margin, Select } from '@phaunoui/reakt'
import '@phaunoui/scss/lib/Utilities.css'
import '@phaunoui/scss/lib/global.css'
import '@phaunoui/scss/lib/Margin.css'
import '@phaunoui/scss/lib/Utilities.css'
import '@phaunoui/scss/lib/Select.css'

//const url = 'https://images.unsplash.com/photo-1682688759457-52bcb4dc1578?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

const options = [{ label: "Pablo Coronel", value: "Pablo" }, { label: "Melani Fontans", value: "Melani" }]
root.render(
  <div style={{ padding: "40px" }}>
    {/*  <Color hexCode='#f00' width={'xl'} heigth={'xl'} />
    <Image
      width='full'
      heigth='lg'
      alt='palmera'
      src={url} /> */}
    <Margin>
      <Text size='xl'>HOLIWIS</Text>
      <Select options={options} label='Selecciona un nombre'
        renderOptions={({ option, getOptionRecommendedProps }) => <p  {...getOptionRecommendedProps()}>{option.label}</p>} />
      <p>this is some text</p>
    </Margin>
  </div>
);



