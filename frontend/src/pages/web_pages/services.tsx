import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../../stores/hooks';
import LayoutGuest from '../../layouts/Guest';
import WebSiteHeader from '../../components/WebPageComponents/Header';
import WebSiteFooter from '../../components/WebPageComponents/Footer';
import {
  PricingDesigns,
  HeroDesigns,
  FeaturesDesigns,
  ContactFormDesigns,
  TestimonialsDesigns,
} from '../../components/WebPageComponents/designs';

import PricingSection from '../../components/WebPageComponents/PricingComponent';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

import TestimonialsSection from '../../components/WebPageComponents/TestimonialsComponent';

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

  const pricing_features = {
    standard: {
      features: [
        'Personalized Schedules',
        'Basic Parental Controls',
        'Limited Social Skill Tasks',
      ],
      limited_features: ['Limited AI Insights', 'Basic Reporting'],
    },
    premium: {
      features: [
        'Advanced Time Management',
        'Enhanced Parental Controls',
        'Full Social Skill Tasks',
      ],
      also_included: [
        'Comprehensive AI Insights',
        'Detailed Reporting',
        'Priority Support',
      ],
    },
    business: {
      features: [
        'Customizable Solutions',
        'Enterprise-Level Controls',
        'Full Suite of Features',
        'Dedicated Account Manager',
      ],
    },
  };

  const description = {
    standard:
      'Ideal for individuals or small families looking to manage screen time with basic features and controls.',
    premium:
      'Perfect for small startups or agencies seeking advanced features and insights to enhance productivity and engagement.',
    business:
      'Designed for enterprises requiring comprehensive solutions, full feature access, and dedicated support for large-scale management.',
  };

  const features_points = [
    {
      name: 'Smart Time Management',
      description:
        'Utilize AI to create personalized schedules that balance study and leisure time, ensuring a productive and enjoyable experience for children.',
      icon: 'mdiClockOutline',
    },
    {
      name: 'Social Skill Development',
      description:
        'Engage children with gamified tasks that encourage face-to-face interactions, enhancing communication and teamwork skills.',
      icon: 'mdiAccountGroup',
    },
    {
      name: 'Parental Control Dashboard',
      description:
        "Empower parents with comprehensive tools to monitor and manage their child's screen time, providing insights and control over digital activities.",
      icon: 'mdiViewDashboard',
    },
  ];

  const testimonials = [
    {
      text: "${projectName} has been a lifesaver for managing my kids' screen time. The features are intuitive and effective!",
      company: 'FamilyTech Solutions',
      user_name: 'Jessica Adams, Parent',
    },
    {
      text: "Our agency uses ${projectName} to help clients balance digital and offline activities. It's a fantastic tool!",
      company: 'Digital Harmony Agency',
      user_name: 'Michael Thompson, Director',
    },
    {
      text: 'The AI insights from ${projectName} have transformed how we approach screen time in our school. Highly recommend!',
      company: 'EduInnovate School',
      user_name: 'Sarah Lee, Principal',
    },
    {
      text: "I love how ${projectName} encourages my children to engage more with family and friends. It's both fun and educational.",
      company: 'Happy Families Inc.',
      user_name: 'David Brown, Parent',
    },
    {
      text: "As a business, we appreciate the comprehensive features of ${projectName}. It helps us manage our team's productivity effectively.",
      company: 'Enterprise Solutions Group',
      user_name: 'Emily White, HR Manager',
    },
    {
      text: '${projectName} is a game-changer for our family. The personalized schedules and parental controls are exactly what we needed.',
      company: 'TechSavvy Families',
      user_name: 'Chris Wilson, Parent',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Our Services - ${projectName}`}</title>
        <meta
          name='description'
          content={`Explore the innovative services offered by ${projectName}, designed to manage children's screen time and promote healthy interactions. Discover our features, pricing, and customer testimonials.`}
        />
      </Head>
      <WebSiteHeader
        projectName={'affects their school performance and social growth'}
        pages={pages}
      />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'affects their school performance and social growth'}
          image={['Child exploring digital world']}
          mainText={`Discover ${projectName} Services Today`}
          subTitle={`Explore how ${projectName} transforms screen time into a balanced and enriching experience for children. Learn about our innovative features and services designed to promote healthy interactions.`}
          design={HeroDesigns.IMAGE_LEFT || ''}
          buttonText={`See Our Services`}
        />

        <PricingSection
          projectName={'affects their school performance and social growth'}
          withBg={0}
          features={pricing_features}
          description={description}
        />

        <FeaturesSection
          projectName={'affects their school performance and social growth'}
          image={['Child using app features']}
          withBg={0}
          features={features_points}
          mainText={`Explore ${projectName} Core Features`}
          subTitle={`Discover the powerful features of ${projectName} that help manage screen time and promote healthy interactions for children.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <TestimonialsSection
          projectName={'affects their school performance and social growth'}
          design={TestimonialsDesigns.HORIZONTAL_CAROUSEL_DIVERSITY || ''}
          testimonials={testimonials}
          mainText={`What Our Clients Say About ${projectName} `}
        />

        <ContactFormSection
          projectName={'affects their school performance and social growth'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Person typing on keyboard']}
          mainText={`Reach Out to ${projectName} Support `}
          subTitle={`Have questions or need assistance? Contact us anytime, and our team at ${projectName} will respond promptly to help you.`}
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
