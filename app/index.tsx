import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';


const PlaceholderImage = { uri: 'https://i.pinimg.com/236x/20/e6/d6/20e6d604cc0a68b71014de82784726fe.jpg' };
const highlightImage1 = {uri: 'https://i.pinimg.com/564x/1c/95/88/1c9588959a32ff23c1f514a46a96e726.jpg' };
const highlightImage2 ={uri: 'https://i.pinimg.com/236x/8b/4d/a0/8b4da055aeaf1575695080325fc8839c.jpg' };


interface ProfileStats {
  posts: number;
  followers: number;
  following: number;
}

export default function Index() {
  const router = useRouter();
  const stats: ProfileStats = {
    posts: 0,
    followers: 303,
    following: 265
  };

  const renderStatsItem = (label: string, value: number) => (
    <View style={styles.statsItem}>
      <Text style={styles.statsValue}>{value}</Text>
      <Text style={styles.statsLabel}>{label}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.username}>elroyan._</Text>
          <Feather name="chevron-down" size={20} color="white" />
        </View>
        <View style={styles.headerRight}>
          <View style={styles.notificationBadge}>
            <Text style={styles.badgeText}>9+</Text>
          </View>
          <TouchableOpacity style={styles.headerIcon}>
            <Feather name="plus-square" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}>
            <Feather name="menu" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.profileImageContainer}>
        <Image 
  source={PlaceholderImage} 
  style={styles.profileImage} 
  contentFit="cover"
  transition={1000}
/>

          <TouchableOpacity style={styles.addButton}>
            <Feather name="plus" size={20} color="white" />
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          {renderStatsItem('posts', stats.posts)}
          {renderStatsItem('followers', stats.followers)}
          {renderStatsItem('following', stats.following)}
        </View>
      </View>

      {/* Bio Section */}
      <View style={styles.bioSection}>
        <Text style={styles.bioName}>el.</Text>
        <View style={styles.threadHandle}>
        <Feather name="at-sign" size={20} color="gray" />
          <Text style={styles.handleText}>elroyan._</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.buttonText}>Edit profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.buttonText}>Share profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addPersonButton}>
          <Feather name="user-plus" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Highlights */}
      <View style={styles.highlightsSection}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.highlightItem}>
          <Image 
  source={highlightImage1} 
  style={styles.profileImage} 
  contentFit="cover"
  transition={1000}
/>
            <Text style={styles.highlightText}>an..</Text>
          </View>
          <View style={styles.highlightItem}>
          <Image 
  source={highlightImage2} 
  style={styles.profileImage} 
  contentFit="cover"
  transition={1000}
/>
            <Text style={styles.highlightText}>°C</Text>
          </View>
          <TouchableOpacity style={styles.addHighlightButton}>
            <Feather name="plus" size={24} color="white" />
            <Text style={styles.highlightText}>New</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => router.push('/beranda')} style={styles.bottomNavItem}>
          <Feather name="home" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/search')} style={styles.bottomNavItem}>
          <Feather name="search" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem}>
          <Feather name="plus-square" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem}>
          <Feather name="film" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem}>
        <Image 
  source={{ uri: 'https://i.pinimg.com/236x/20/e6/d6/20e6d604cc0a68b71014de82784726fe.jpg' }} 
  style={styles.bottomNavProfile} 
  contentFit="cover"
  transition={1000}
/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 45,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 5,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    marginLeft: 20,
  },
  notificationBadge: {
    position: 'absolute',
    right: -5,
    top: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 2,
    minWidth: 20,
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
  },
  profileSection: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#262626'
  },
  addButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#0095f6',
    borderRadius: 12,
    padding: 4,
  },
  statsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 20,
  },
  statsItem: {
    alignItems: 'center',
  },
  statsValue: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  statsLabel: {
    color: 'white',
    fontSize: 14,
  },
  bioSection: {
    paddingHorizontal: 15,
    marginTop: 15,
  },
  bioName: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  threadHandle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  handleText: {
    color: 'gray',
    marginLeft: 5,
  },
  actionButtons: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginTop: 15,
    gap: 8,
  },
  editButton: {
    flex: 1,
    backgroundColor: '#262626',
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  shareButton: {
    flex: 1,
    backgroundColor: '#262626',
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  addPersonButton: {
    backgroundColor: '#262626',
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    width: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
  },
  highlightsSection: {
    marginTop: 20,
    paddingLeft: 15,
  },
  highlightItem: {
    alignItems: 'center',
    marginRight: 15,
  },
  highlightImage: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    borderWidth: 1,
    borderColor: '#262626',
  },
  highlightText: {
    color: 'white',
    fontSize: 12,
    marginTop: 4,
  },
  addHighlightButton: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    borderWidth: 1,
    borderColor: '#262626',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderTopColor: '#262626',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000000',
  },
  bottomNavItem: {
    padding: 10,
  },
  bottomNavProfile: {
    width: 30,
    height: 30,
    borderRadius: 12,
  },
});