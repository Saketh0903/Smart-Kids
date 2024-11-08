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
  AboutUsDesigns,
  FeaturesDesigns,
  TestimonialsDesigns,
  ContactFormDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import TestimonialsSection from '../../components/WebPageComponents/TestimonialsComponent';

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

  const features_points = [
    {
      name: 'AI-Driven Insights',
      description:
        "Leverage advanced AI to provide personalized recommendations for study schedules and social activities, tailored to each child's unique needs.",
      icon: 'mdiBrain',
    },
    {
      name: 'Interactive Gamification',
      description:
        'Engage children with fun, interactive challenges that promote social skills and reward positive behavior, making learning enjoyable.',
      icon: 'mdiGamepad',
    },
    {
      name: 'Comprehensive Parental Controls',
      description:
        "Empower parents with tools to monitor and manage their child's screen time, ensuring a safe and balanced digital experience.",
      icon: 'mdiShieldCheck',
    },
  ];

  const testimonials = [
    {
      text: "${projectName} has transformed how my child interacts with technology. It's a perfect blend of learning and fun!",
      company: 'TechPioneers Inc.',
      user_name: 'Anna Green, Parent',
    },
    {
      text: "As an educator, I appreciate the insights ${projectName} provides. It helps me tailor my lessons to better suit my students' needs.",
      company: 'EduLeaders Group',
      user_name: 'John Carter, Teacher',
    },
    {
      text: "The gamified approach of ${projectName} has made a noticeable difference in my child's daily routine. Highly recommend!",
      company: 'FamilyFirst Enterprises',
      user_name: 'Lisa Brown, Parent',
    },
    {
      text: "I love how ${projectName} encourages my kids to interact more with family and friends. It's fun and educational!",
      company: 'BrightFuture Corp',
      user_name: 'Mark Wilson, Parent',
    },
    {
      text: "Since using ${projectName}, my child's focus and social skills have improved tremendously. It's a game-changer for our family!",
      company: 'FutureTech Innovations',
      user_name: 'Emily Johnson, Parent',
    },
    {
      text: '${projectName} is a fantastic tool for managing screen time. My kids are happier and more balanced in their activities.',
      company: 'TechSavvy Families',
      user_name: 'Chris Wilson, Parent',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`About Us - Discover ${projectName}`}</title>
        <meta
          name='description'
          content={`Learn more about ${projectName}, our mission, values, and the innovative features that make us a leader in managing children's screen time and promoting healthy interactions.`}
        />
      </Head>
      <WebSiteHeader
        projectName={'affects their school performance and social growth'}
        pages={pages}
      />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'affects their school performance and social growth'}
          image={['Team discussing project ideas']}
          mainText={`Unveiling the Vision of ${projectName}`}
          subTitle={`Discover the mission and values that drive ${projectName} to create a balanced digital experience for children. Learn how we empower families with innovative solutions.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Explore Our Story`}
        />

        <AboutUsSection
          projectName={'affects their school performance and social growth'}
          image={['Team working collaboratively']}
          mainText={`The Heart Behind ${projectName}`}
          subTitle={`At ${projectName}, we are committed to fostering a healthy digital lifestyle for children. Our team is passionate about blending technology with education and social growth.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Meet Our Team`}
        />

        <FeaturesSection
          projectName={'affects their school performance and social growth'}
          image={['Child using app happily']}
          withBg={1}
          features={features_points}
          mainText={`Innovative Features of ${projectName}`}
          subTitle={`Explore the cutting-edge features that make ${projectName} a leader in managing children's screen time and promoting healthy interactions.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS_DIVERSITY || ''}
        />

        <TestimonialsSection
          projectName={'affects their school performance and social growth'}
          design={TestimonialsDesigns.MULTI_CARD_DISPLAY || ''}
          testimonials={testimonials}
          mainText={`Hear from Our ${projectName} Community `}
        />

        <ContactFormSection
          projectName={'affects their school performance and social growth'}
          design={ContactFormDesigns.HIGHLIGHTED || ''}
          image={['Person writing an email']}
          mainText={`Connect with ${projectName} Team `}
          subTitle={`We're here to help! Reach out to us anytime with your questions or feedback. Our team at ${projectName} is ready to assist you and will respond promptly.`}
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
