import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../../stores/hooks';
import LayoutGuest from '../../layouts/Guest';
import WebSiteHeader from '../../components/WebPageComponents/Header';
import WebSiteFooter from '../../components/WebPageComponents/Footer';
import {
  HeroDesigns,
  ContactFormDesigns,
  FaqDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

import FaqSection from '../../components/WebPageComponents/FaqComponent';

export default function WebSite() {
  const cardsStyle = useAppSelector((state) => state.style.cardsStyle);
  const bgColor = useAppSelector((state) => state.style.bgLayoutColor);
  const projectName = 'affects their school performance and social growth';

  useEffect(() => {
    const darkElement = document.querySelector('body .dark');
    if (darkElement) {
      darkElement.classList.remove('dark');
    }
  }, []);
  const pages = [
    {
      href: '/home',
      label: 'home',
    },

    {
      href: '/about',
      label: 'about',
    },

    {
      href: '/services',
      label: 'services',
    },

    {
      href: '/contact',
      label: 'contact',
    },

    {
      href: '/faq',
      label: 'FAQ',
    },
  ];

  const faqs = [
    {
      question: 'How does ${projectName} manage screen time?',
      answer:
        '${projectName} uses AI to create personalized schedules that balance study and leisure time, ensuring a productive and enjoyable experience for children.',
    },
    {
      question: 'What age group is ${projectName} suitable for?',
      answer:
        '${projectName} is designed for children of all ages, with customizable settings to fit different age groups and developmental needs.',
    },
    {
      question: "Can parents monitor their child's progress?",
      answer:
        'Yes, ${projectName} provides a comprehensive parental dashboard that allows parents to monitor screen time, view reports, and adjust settings as needed.',
    },
    {
      question: 'Is there a free trial available?',
      answer:
        'Yes, ${projectName} offers a free trial period for new users to explore the features and see how it can benefit their family.',
    },
    {
      question: 'How does ${projectName} encourage social interactions?',
      answer:
        '${projectName} includes gamified tasks that promote face-to-face interactions, helping children develop communication and teamwork skills.',
    },
    {
      question: 'What support options are available?',
      answer:
        'Our support team is available via email and live chat to assist with any questions or issues you may have while using ${projectName}.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Contact Us - ${projectName}`}</title>
        <meta
          name='description'
          content={`Get in touch with the ${projectName} team for any inquiries or support. Find answers to common questions in our FAQ section.`}
        />
      </Head>
      <WebSiteHeader
        projectName={'affects their school performance and social growth'}
        pages={pages}
      />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'affects their school performance and social growth'}
          image={['Customer support representative']}
          mainText={`Connect with ${projectName} Today`}
          subTitle={`We're here to assist you with any questions or support you need. Reach out to the ${projectName} team and let us help you make the most of our services.`}
          design={HeroDesigns.TEXT_CENTER || ''}
          buttonText={`Contact Us`}
        />

        <FaqSection
          projectName={'affects their school performance and social growth'}
          design={FaqDesigns.ACCORDION || ''}
          faqs={faqs}
          mainText={`Frequently Asked Questions About ${projectName} `}
        />

        <ContactFormSection
          projectName={'affects their school performance and social growth'}
          design={ContactFormDesigns.HIGHLIGHTED_DIVERSITY || ''}
          image={['Person filling contact form']}
          mainText={`Get in Touch with ${projectName} `}
          subTitle={`We're available to answer your questions and provide support. Contact us anytime, and the ${projectName} team will respond promptly.`}
        />
      </main>
      <WebSiteFooter
        projectName={'affects their school performance and social growth'}
        pages={pages}
      />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
