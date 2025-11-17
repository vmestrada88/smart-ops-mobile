import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ContactModal({ isOpen, onClose }) {
  const handlePhonePress = () => {
    Linking.openURL('tel:7868244191');
  };

  const handleEmailPress = () => {
    Linking.openURL('mailto:sales@smartsolutionfl.com');
  };

  return (
    <Modal
      visible={isOpen}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={onClose}
          >
            <Ionicons name="close" size={24} color="#6b7280" />
          </TouchableOpacity>

          <Text style={styles.title}>Contact Us</Text>
          <Text style={styles.description}>
            We'd love to hear from you. Reach us via:
          </Text>

          <View style={styles.contactOptions}>
            <TouchableOpacity
              style={styles.contactItem}
              onPress={handlePhonePress}
            >
              <Ionicons name="call" size={20} color="#14b8a6" />
              <Text style={styles.contactText}>(786) 824-4191</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.contactItem}
              onPress={handleEmailPress}
            >
              <Ionicons name="mail" size={20} color="#14b8a6" />
              <Text style={styles.contactText}>sales@smartsolutionfl.com</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 24,
    width: '90%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    padding: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 8,
    marginTop: 8,
  },
  description: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 24,
  },
  contactOptions: {
    gap: 16,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#f9fafb',
    borderRadius: 8,
  },
  contactText: {
    fontSize: 16,
    color: '#1f2937',
    textAlign: 'center',
  },
});