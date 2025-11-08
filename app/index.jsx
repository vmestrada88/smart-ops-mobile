import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Services from '../components/Services';
import ContactModal from '../components/ContactModal';

/**
 * HomeScreen Component
 * 
 * Main home screen component for the SmartOps application.
 * Displays information about intelligent security and low-voltage solutions.
 * 
 * @component
 * @returns {JSX.Element} Home screen with hero section, services, and contact modal
 * 
 * @description
 * This component renders:
 * - Hero section with logo, title, and company description
 * - Button to open contact modal
 * - Services component
 * - Contact modal controlled by state
 * 
 * @example
 * // Basic usage
 * <HomeScreen />
 * 
 * @state {boolean} modalOpen - Controls the visibility of the contact modal
 * 
 * @requires useState - React Hook for managing modal state
 * @requires ScrollView - React Native component for vertical scrolling
 * @requires View - React Native container component
 * @requires Image - React Native component for displaying images
 * @requires Text - React Native component for displaying text
 * @requires TouchableOpacity - React Native component for touchable buttons
 * @requires Services - Custom component that displays services
 * @requires ContactModal - Custom modal component for contact form
 */
export default function HomeScreen() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.heroSection}>
        <Image
          source={require('../assets/images/logo.jpg')}
          style={styles.logo}
        />
        <Text style={styles.title}>Smart Solution for Living</Text>
        <Text style={styles.description}>
          We provide reliable, intelligent low-voltage and smart security solutions for modern homes and businesses.
        </Text>
        <TouchableOpacity
          style={styles.contactButton}
          onPress={() => setModalOpen(true)}
        >
          <Text style={styles.contactButtonText}>Contact Us</Text>
        </TouchableOpacity>
      </View>

      <Services />

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 18,
    color: '#6b7280',
    textAlign: 'center',
    maxWidth: 350,
    lineHeight: 24,
    marginBottom: 32,
  },
  contactButton: {
    backgroundColor: '#14b8a6',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contactButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});