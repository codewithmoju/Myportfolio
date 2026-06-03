
import { profile } from "@/data/portfolio";

// Simple utility to update document title dynamically
export const updatePageTitle = (title: string): void => {
  document.title = `${title} | ${profile.name} - ${profile.role}`;
};

// Track custom events for Google Analytics
export const trackEvent = (category: string, action: string, label?: string, value?: number): void => {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    const gtag = (window as any).gtag;
    gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

// Log page views for single page application
export const logPageView = (path: string): void => {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    const gtag = (window as any).gtag;
    gtag('config', 'G-MEASUREMENT-ID', {
      page_path: path
    });
  }
  
  // You can log to console during development
  console.log(`Page view logged: ${path}`);
};

// Track user interactions with content
export const trackUserInteraction = (elementId: string, interactionType: string): void => {
  trackEvent('User Interaction', interactionType, elementId);
};

// Track time spent on page
export const trackTimeOnPage = (): (() => void) => {
  const startTime = new Date().getTime();
  
  return () => {
    const endTime = new Date().getTime();
    const timeSpent = (endTime - startTime) / 1000; // Convert to seconds
    trackEvent('Engagement', 'Time on Page', undefined, timeSpent);
  };
};

// Track outbound links
export const trackOutboundLink = (url: string): void => {
  trackEvent('Outbound Link', 'Click', url);
  
  // You can log to console during development
  console.log(`Outbound link clicked: ${url}`);
};

// Track downloads
export const trackDownload = (fileName: string): void => {
  trackEvent('Download', 'Click', fileName);
};
