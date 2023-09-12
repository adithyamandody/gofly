'use client'
'use state'
import React, { useState, useEffect } from 'react';
import Fly from './pages/Fly.jsx';
import Navbar from './pages/navbar.jsx';
import Enquire from './pages/Enquire.jsx';
import Imigration from './pages/Imigration.jsx';
import Services from './pages/Services.jsx';
import Faq from './pages/Faq.jsx';
import Test from './pages/test.jsx'
import Form from './pages/Form.jsx';
import Footer1 from './pages/Footer.jsx'

import Head from 'next/head.js';
import { Plus_Jakarta_Sans } from 'next/font/google'
 
const inter = Plus_Jakarta_Sans({ subsets: ['latin'] })

const FlyPage = () => {
  return (
    <div> 

<Head>
        <title>Home App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <section>      
            <Navbar /> 
      </section>
      <section id="home">
        <Fly/>
      </section>
      <section>
        <Enquire />
      </section>
      <section>
        <Imigration/>
      </section>
      <section>
        <Services/>
      </section>
      <section>
        <Faq/>
      </section>
      <section>
        <Test/>
      </section>
      <section>
        <Form/>
      </section>
      <section>
        <Footer1/>
      </section>


   </div>

  );
};

export default FlyPage;
