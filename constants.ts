import { ServiceCategory } from './types';
import { 
    HouseholdIcon, 
    PersonalIcon, 
    EventIcon, 
    TransportationIcon, 
    EducationalIcon, 
    ProfessionalIcon, 
    HealthIcon, 
    TechnologyIcon, 
    CreativeIcon 
} from './components/icons';

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'household',
    name: ['Household', 'Services'],
    icon: HouseholdIcon,
    services: [
      { id: 'h1', name: 'House Cleaning', description: 'Let us make your home sparkle, from top to bottom.' },
      { id: 'h2', name: 'Laundry and Dry Cleaning', description: 'Fresh, clean clothes delivered right to your door.' },
      { id: 'h3', name: 'Gardening and Landscaping', description: 'Transform your outdoor space into a beautiful oasis.' },
      { id: 'h4', name: 'Handyman Services', description: 'No job is too small for our skilled handy-people.' },
      { id: 'h5', name: 'Pest Control', description: 'Quick and effective solutions for a pest-free home.' },
      { id: 'h6', name: 'Interior Design', description: 'Let\'s create a space that truly feels like you.' },
    ],
  },
  {
    id: 'personal',
    name: ['Personal', 'Services'],
    icon: PersonalIcon,
    services: [
      { id: 'p1', name: 'Personal Training', description: 'Achieve your fitness goals with a dedicated expert.' },
      { id: 'p2', name: 'Massage Therapy', description: 'Relax, unwind, and rejuvenate your body and mind.' },
      { id: 'p3', name: 'Personal Shopping', description: 'Your style, curated and delivered by a fashion pro.' },
      { id: 'p4', name: 'Beauty and Spa Services', description: 'Indulge in some well-deserved pampering.' },
      { id: 'p5', name: 'Pet Grooming', description: 'Happy pets, happy life! Professional grooming for your furry friend.' },
    ],
  },
  {
    id: 'event',
    name: ['Event', 'Services'],
    icon: EventIcon,
    services: [
        { id: 'e1', name: 'Event Planning', description: 'From start to finish, we\'ll make your event unforgettable.' },
        { id: 'e2', name: 'Catering', description: 'Delicious food that will be the talk of the party.' },
        { id: 'e3', name: 'Photography and Videography', description: 'Capturing your precious moments beautifully.' },
        { id: 'e4', name: 'DJ and Music Services', description: 'Setting the perfect vibe for any occasion.' },
        { id: 'e5', name: 'Venue Decoration', description: 'Transforming any space into your dream venue.' },
    ],
  },
  {
    id: 'transportation',
    name: ['Transportation', 'Services'],
    icon: TransportationIcon,
    services: [
        { id: 't1', name: 'Car Wash and Detailing', description: 'Get your car looking brand new, inside and out.' },
        { id: 't2', name: 'Ride-Sharing and Carpooling', description: 'Convenient and eco-friendly rides when you need them.' },
        { id: 't3', name: 'Moving and Packing Services', description: 'A smooth, stress-free move handled by professionals.' },
        { id: 't4', name: 'Bike Repair and Maintenance', description: 'Get your bike back on the road in top condition.' },
    ],
  },
  {
    id: 'educational',
    name: ['Educational', 'Services'],
    icon: EducationalIcon,
    services: [
        { id: 'ed1', name: 'Tutoring and Homework Help', description: 'Friendly support to help students succeed.' },
        { id: 'ed2', name: 'Language Lessons', description: 'Unlock a new world by learning a new language.' },
        { id: 'ed3', name: 'Music Lessons', description: 'Discover your inner musician with expert guidance.' },
        { id: 'ed4', name: 'Art and Craft Classes', description: 'Unleash your creativity in a fun, inspiring class.' },
    ],
  },
  {
    id: 'professional',
    name: ['Professional', 'Services'],
    icon: ProfessionalIcon,
    services: [
        { id: 'pr1', name: 'Legal Consultation', description: 'Clear, expert legal advice you can trust.' },
        { id: 'pr2', name: 'Accounting and Bookkeeping', description: 'Let us handle the numbers so you can focus on your business.' },
        { id: 'pr3', name: 'Business Consulting', description: 'Strategic insights to help your business grow.' },
        { id: 'pr4', name: 'Graphic Design and Branding', description: 'Create a stunning brand identity that stands out.' },
    ],
  },
  {
    id: 'health',
    name: ['Health and', 'Wellness'],
    icon: HealthIcon,
    services: [
        { id: 'hw1', name: 'Nutrition and Diet Counseling', description: 'A personalized plan for a healthier, happier you.' },
        { id: 'hw2', name: 'Yoga and Meditation Classes', description: 'Find your balance and inner peace with our classes.' },
        { id: 'hw3', name: 'Home Nursing Care', description: 'Compassionate and professional care at home.' },
        { id: 'hw4', name: 'Therapist and Counseling Services', description: 'Confidential support for your mental well-being.' },
    ],
  },
  {
    id: 'technology',
    name: ['Technology', 'Services'],
    icon: TechnologyIcon,
    services: [
        { id: 'tech1', name: 'IT Support and Repair', description: 'Fast and reliable solutions for your tech troubles.' },
        { id: 'tech2', name: 'Web Development and Design', description: 'Building the beautiful, functional website of your dreams.' },
        { id: 'tech3', name: 'Digital Marketing', description: 'Grow your online presence and reach more customers.' },
        { id: 'tech4', name: 'App Development', description: 'Bring your brilliant app idea to life with our team.' },
    ],
  },
  {
    id: 'creative',
    name: ['Creative', 'Services'],
    icon: CreativeIcon,
    services: [
        { id: 'c1', name: 'Custom Cake Making', description: 'Delicious, custom-designed cakes for any celebration.' },
        { id: 'c2', name: 'Tailoring and Alterations', description: 'Perfectly fitted clothes, just for you.' },
        { id: 'c3', name: 'Interior Decorating', description: 'Refresh your space with a professional creative touch.' },
        { id: 'c4', name: 'Art Commissions', description: 'Own a unique piece of art created just for you.' },
    ],
  },
];