import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const services = [
  {
    title: 'Security Systems',
    icon: 'shield-checkmark',
    description: 'Installation and maintenance of smart security cameras, alarm systems, and motion detectors.'
  },
  {
    title: 'Home Automation',
    icon: 'home',
    description: 'Full smart home integration including lighting, climate, blinds, and device control to enhance comfort and efficiency.'
  },
  {
    title: 'Access Control',
    icon: 'lock-closed',
    description: 'Keyless smart locks and intercom systems for safe and convenient access management.'
  },
  {
    title: 'Audio & TV Automation',
    icon: 'volume-high',
    description: 'Integrated home theater, multi-room audio, and TV setups with seamless network connectivity and centralized control.'
  }
];

const iconMap = {
  'shield-checkmark': Ionicons,
  'home': Ionicons,
  'lock-closed': Ionicons,
  'volume-high': Ionicons,
};

export default function Services() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Our Services</Text>
        <Text style={styles.subtitle}>
          We offer tailored solutions for residential and commercial spaces.
        </Text>
      </View>

      <View style={styles.servicesGrid}>
        {services.map((service, index) => {
          return (
            <View key={index} style={styles.serviceCard}>
              <View style={styles.iconContainer}>
                <Ionicons name={service.icon} size={40} color="#14b8a6" />
              </View>
              <Text style={styles.serviceTitle}>{service.title}</Text>
              <Text style={styles.serviceDescription}>{service.description}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    maxWidth: 300,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceCard: {
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    width: '48%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconContainer: {
    marginBottom: 16,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 8,
    textAlign: 'center',
  },
  serviceDescription: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 20,
  },
});