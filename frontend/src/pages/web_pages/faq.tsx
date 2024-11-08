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
  FaqDesigns,
  ContactFormDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FaqSection from '../../components/WebPageComponents/FaqComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

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
      question: 'What is the main purpose of ${projectName}?',
      answer:
        "${projectName} is designed to help manage children's screen time effectively, promoting a balanced approach to digital and offline activities.",
    },
    {
      question: 'How does ${projectName} personalize schedules?',
      answer:
        "Using AI, ${projectName} analyzes each child's habits and preferences to create customized study and break schedules that suit their needs.",
    },
    {
      question: "Can I track my child's progress?",
      answer:
        "Yes, ${projectName} offers a parental dashboard where you can monitor your child's screen time, achievements, and overall progress.",
    },
    {
      question: 'Is ${projectName} suitable for all ages?',
      answer:
        'Absolutely! ${projectName} is adaptable for children of all ages, with settings that can be adjusted to fit different developmental stages.',
    },
    {
      question: 'What kind of support does ${projectName} offer?',
      answer:
        'Our support team is available via email and live chat to assist with any questions or issues you may encounter while using ${projectName}.',
    },
    {
      question: 'Are there any subscription plans available?',
      answer:
        'Yes, ${projectName} offers various subscription plans to suit different needs, including Standard, Premium, and Business options.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Frequently Asked Questions - ${projectName}`}</title>
        <meta
          name='description'
          content={`Find answers to common questions about ${projectName}, including features, pricing, and support. Contact us for further assistance.`}
        />
      </Head>
      <WebSiteHeader
        projectName={'affects their school performance and social growth'}
        pages={pages}
      />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'affects their school performance and social growth'}
          image={['Person reading FAQ document']}
          mainText={`Your Questions About ${projectName} Answered`}
          subTitle={`Explore our comprehensive FAQ section to find answers to common questions about ${projectName}. Learn more about our features, pricing, and support options.`}
          design={HeroDesigns.TEXT_CENTER || ''}
          buttonText={`Explore FAQs`}
        />

        <FaqSection
          projectName={'affects their school performance and social growth'}
          design={FaqDesigns.SPLIT_LIST || ''}
          faqs={faqs}
          mainText={`Common Questions About ${projectName} `}
        />

        <ContactFormSection
          projectName={'affects their school performance and social growth'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Person sending an email']}
          mainText={`Reach Out to ${projectName} Support `}
          subTitle={`Have more questions? Contact us anytime, and the ${projectName} team will respond promptly to assist you with any inquiries or support needs.`}
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
