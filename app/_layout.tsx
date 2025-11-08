/**
 * Root layout component for the SmartOpsExpo application.
 * 
 * This component serves as the main navigation container using Expo Router's Stack navigator.
 * It defines the application's screen structure and global status bar configuration.
 * 
 * @returns {JSX.Element} A fragment containing:
 * - Stack navigator with three configured screens:
 *   - `index`: Home screen
 *   - `login`: Login screen
 *   - `profile`: Profile screen
 * - StatusBar component with automatic styling based on the color scheme
 * 
 * @remarks
 * - Uses Expo Router for file-based routing
 * - StatusBar style is set to "auto" which adapts to light/dark mode
 * - Each Stack.Screen's "name" prop corresponds to a file in the app directory
 * - The "options" prop sets the header title for each screen
 */
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="login" options={{ title: 'Login' }} />
        <Stack.Screen name="profile" options={{ title: 'Profile' }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
