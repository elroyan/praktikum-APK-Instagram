import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    
    <Stack> 
      <Stack.Screen name="index" 
      options={{
        headerShown : false,
      }}/>
       <Stack.Screen name="beranda" 
      options={{
        headerShown : false,
      }}/>
      <Stack.Screen name="search" 
      options={{
        headerShown : false,
      }}/>
    </Stack>
    
  );
}
