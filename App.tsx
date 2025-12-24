import React, { useState, useCallback } from 'react';
import { ServiceCategory, Service, BookingDetails, Quote, Language } from './types';
import { SERVICE_CATEGORIES } from './constants';
import { getTranslations } from './localization';
import Header from './components/Header';
import CategoryGrid from './components/CategoryGrid';
import ServiceList from './components/ServiceList';
import ServiceDetailsForm from './components/ServiceDetailsForm';
import CustomRequestForm from './components/CustomRequestForm';
import AwaitingQuoteView from './components/AwaitingQuoteView';
import QuoteView from './components/QuoteView';
import BookingConfirmedView from './components/BookingConfirmedView';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';

type View = 'categories' | 'services' | 'details' | 'awaitingQuote' | 'quote' | 'confirmed' | 'profile' | 'customRequest';
type NavigationDirection = 'forward' | 'backward' | 'fade';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('categories');
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);
  const [quote, setQuote] = useState<Quote | null>(null);
  const [language, setLanguage] = useState<Language>('en');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const [animationClass, setAnimationClass] = useState('animate-fade-in');
  const [contentKey, setContentKey] = useState(0);

  const t = getTranslations(language);

  const handleNavigate = useCallback((targetView: View, direction: NavigationDirection) => {
    const exitAnimation = 
      direction === 'forward' ? 'animate-slide-out-left' :
      direction === 'backward' ? 'animate-slide-out-right' :
      'animate-fade-out';
      
    const enterAnimation = 
      direction === 'forward' ? 'animate-slide-in-right' :
      direction === 'backward' ? 'animate-slide-in-left' :
      'animate-fade-in';

    setAnimationClass(exitAnimation);

    setTimeout(() => {
      if (targetView === 'categories') {
        setSelectedCategory(null);
        setSelectedService(null);
        setBookingDetails(null);
        setQuote(null);
      } else if (targetView === 'services') {
         setSelectedService(null);
      }
      
      setCurrentView(targetView);
      setAnimationClass(enterAnimation);
      setContentKey(prevKey => prevKey + 1);
    }, 300);

  }, []);

  const handleSelectCategory = useCallback((category: ServiceCategory) => {
    setSelectedCategory(category);
    handleNavigate('services', 'forward');
  }, [handleNavigate]);

  const handleBackToCategories = useCallback(() => {
    handleNavigate('categories', 'backward');
  }, [handleNavigate]);
  
  const handleSelectService = useCallback((service: Service) => {
    setSelectedService(service);
    handleNavigate('details', 'forward');
  }, [handleNavigate]);

  const handleBackToServices = useCallback(() => {
    handleNavigate('services', 'backward');
  }, [handleNavigate]);

  const handleSubmitDetails = useCallback((details: BookingDetails) => {
    setBookingDetails(details);
    handleNavigate('awaitingQuote', 'fade');
  }, [handleNavigate]);

  const handleQuoteReady = useCallback(() => {
    const calculatedPrice = 100 + (Math.random() * 250);
    const newQuote: Quote = {
        price: parseFloat(calculatedPrice.toFixed(2)),
        timeframe: `${Math.floor(Math.random() * 2) + 1}-${Math.floor(Math.random() * 4) + 3} hours`
    }
    setQuote(newQuote);
    
    setAnimationClass('animate-fade-out');
    setTimeout(() => {
        setCurrentView('quote');
        setAnimationClass('animate-fade-in');
        setContentKey(prevKey => prevKey + 1);
    }, 300);
  }, []);
  
  const handleConfirmPayment = useCallback(() => {
    handleNavigate('confirmed', 'fade');
  }, [handleNavigate]);

  const handleReset = useCallback(() => {
    handleNavigate('categories', 'fade');
  }, [handleNavigate]);

  const handleShowProfile = useCallback(() => {
    handleNavigate('profile', 'forward');
  }, [handleNavigate]);

  const onProfileBack = useCallback(() => {
      handleNavigate('categories', 'backward');
  }, [handleNavigate]);

  const handleLogin = useCallback(() => {
    setIsLoggedIn(true);
    handleNavigate('categories', 'backward');
  }, [handleNavigate]);

  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  const handleCustomRequest = useCallback(() => {
    setSelectedService(null); // Ensure no service is selected
    handleNavigate('customRequest', 'forward');
  }, [handleNavigate]);


  const renderContent = () => {
    switch (currentView) {
      case 'services':
        return selectedCategory && <ServiceList category={selectedCategory} onBack={handleBackToCategories} onSelectService={handleSelectService} t={t} />;
      case 'details':
        return selectedService && <ServiceDetailsForm service={selectedService} onBack={handleBackToServices} onSubmit={handleSubmitDetails} t={t} />;
      case 'customRequest':
        return <CustomRequestForm onBack={handleBackToCategories} onSubmit={handleSubmitDetails} t={t.customRequestForm} />;
      case 'awaitingQuote':
          return <AwaitingQuoteView onQuoteReady={handleQuoteReady} t={t.awaitingQuote} />;
      case 'quote':
          const serviceForQuote = selectedService || { id: 'custom', name: '', description: '' };
          return bookingDetails && quote && <QuoteView service={serviceForQuote} details={bookingDetails} quote={quote} onConfirm={handleConfirmPayment} t={t} />;
      case 'confirmed':
          return <BookingConfirmedView onFinish={handleReset} t={t.confirmed} />;
      case 'profile':
          return <UserProfile onBack={onProfileBack} t={t.profile} isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />;
      case 'categories':
      default:
        return (
          <CategoryGrid categories={SERVICE_CATEGORIES} onSelectCategory={handleSelectCategory} t={t.categories} />
        )
    }
  };

  return (
    <div className={`min-h-screen bg-white text-gray-800 flex flex-col ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <Header onShowProfile={handleShowProfile} language={language} setLanguage={setLanguage} t={t.header} />
      <main className="flex-grow w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-8 relative overflow-hidden">
          <div key={contentKey} className={animationClass}>
              {renderContent()}
          </div>
      </main>
      {currentView === 'categories' && <Footer onCustomRequest={handleCustomRequest} t={t.footer} />}
    </div>
  );
};

export default App;
