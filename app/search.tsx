import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  TouchableOpacity, 
  FlatList, 
  SafeAreaView,
  TextInput,
  Dimensions,
  Modal
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface SearchItem {
  id: string;
  image: any;
  isVideo?: boolean;
  isReels?: boolean;
  isMultiple?: boolean;
  username?: string;
  location?: string;
  likes?: number;
  comments?: number;
  caption?: string;
  timestamp?: string;
}

const { width, height } = Dimensions.get('window');
const numColumns = 3;
const tileSize = width / numColumns;

const searchItems: SearchItem[] = [
  {
    id: '1',
    image: require('@/assets/images/post 1.jpg'),
    isMultiple: true,
    username: 'aneunbn',
    location: 'London Primrose Hill',
    likes: 120,
    comments: 15,
    caption: 'A beautiful day in London! 🌞',
    timestamp: '2 hours ago',
  },
  {
    id: '2',
    image: require('@/assets/images/post 2.jpg'),
    username: 'monday_zune',
    likes: 89,
    comments: 7,
    caption: 'Exploring the world 🌍✨',
    timestamp: '5 hours ago',
  },
  {
    id: '3',
    image: require('@/assets/images/post 3.jpg'),
    username: 'monday_zune',
    likes: 105,
    comments: 23,
    caption: 'Adventure awaits! 🏞️',
    timestamp: '1 day ago',
  },
  {
    id: '4',
    image: require('@/assets/images/post 4.jpg'),
    username: 'cutecats_e',
    likes: 56,
    comments: 3,
    caption: 'My cute cats 🐱',
    timestamp: '12 hours ago',
  },
  {
    id: '5',
    image: require('@/assets/images/post 5.jpg'),
    isReels: true,
    username: 'cutecats_e',
    likes: 200,
    comments: 50,
    caption: 'Reels with my lovely pet! 🐾',
    timestamp: '1 hour ago',
  },
  {
    id: '6',
    image: require('@/assets/images/post 6.jpg'),
    isMultiple: true,
    username: 'xinsooo',
    likes: 60,
    comments: 8,
    caption: 'Feeling great today!',
    timestamp: '2 days ago',
  },
  {
    id: '7',
    image: require('@/assets/images/post 7.jpg'),
    isMultiple: true,
    username: 'katarinabluu',
    likes: 85,
    comments: 12,
    caption: 'Sunset vibes 🌅',
    timestamp: '4 hours ago',
  },
  {
    id: '8',
    image: require('@/assets/images/post 8.jpg'),
    username: 'seon_uoo',
    likes: 145,
    comments: 35,
    caption: 'Weekend getaway 🏖️',
    timestamp: '6 hours ago',
  },
  {
    id: '9',
    image: require('@/assets/images/post 9.jpg'),
    username: 'stolenncuteworld',
    likes: 33,
    comments: 5,
    caption: 'Cute things everywhere 💕',
    timestamp: '3 days ago',
  },
  {
    id: '10',
    image: require('@/assets/images/post 10.jpg'),
    username: 'mayay____y',
    location: 'South Korea',
    likes: 210,
    comments: 25,
    caption: 'Korean vibes 🇰🇷',
    timestamp: '1 day ago',
  },
  {
    id: '11',
    image: require('@/assets/images/post 11.jpg'),
    username: 'mkp_portrait',
    location: 'Tokyo, Japan',
    likes: 300,
    comments: 45,
    caption: 'City lights of Tokyo ✨',
    timestamp: '10 hours ago',
  },
  {
    id: '12',
    image: require('@/assets/images/post 12.jpg'),
    isMultiple: true,
    username: 'katarinabluu',
    location: 'South Korea',
    likes: 180,
    comments: 28,
    caption: 'Multiple moments captured! 📸',
    timestamp: '2 days ago',
  }
];

export default function SearchScreen() {
  const router = useRouter();
  const defaultProfileImage = require('@/assets/images/profil aku.jpg');
  const [selectedPost, setSelectedPost] = useState<SearchItem | null>(null);
  const [liked, setLiked] = useState<{ [key: string]: boolean }>({});
  const [saved, setSaved] = useState<{ [key: string]: boolean }>({});

  const handleLike = (postId: string) => {
    setLiked(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const handleSave = (postId: string) => {
    setSaved(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const renderSearchItem = ({ item }: { item: SearchItem }) => (
    <TouchableOpacity 
      style={styles.searchItem}
      onPress={() => setSelectedPost(item)}
      activeOpacity={0.9}
    >
      <Image source={item.image} style={styles.searchImage} />
      {item.isMultiple && (
        <View style={styles.multipleIcon}>
          <Feather name="layers" size={16} color="white" />
        </View>
      )}
      {item.isReels && (
        <View style={styles.reelsIcon}>
          <Feather name="film" size={16} color="white" />
        </View>
      )}
    </TouchableOpacity>
  );

  const renderModal = () => {
    if (!selectedPost) return null;

    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={selectedPost !== null}
        onRequestClose={() => setSelectedPost(null)}
      >
        <SafeAreaView style={styles.modalContainer}>
          {/* Modal Header */}
          <View style={styles.modalHeader}>
            <TouchableOpacity 
              onPress={() => setSelectedPost(null)}
              style={styles.modalBackButton}
            >
              <Feather name="arrow-left" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Post</Text>
          </View>

          {/* Post Content */}
          <View style={styles.postContainer}>
            {/* User Info */}
            <View style={styles.userInfo}>
              <Image 
                source={selectedPost.image} // Change profile image to the clicked post's image
                style={styles.userAvatar}
              />
              <View style={styles.userTextInfo}>
                <Text style={styles.username}>{selectedPost.username}</Text>
                {selectedPost.location && (
                  <Text style={styles.location}>{selectedPost.location}</Text>
                )}
              </View>
              <TouchableOpacity style={styles.moreButton}>
                <Feather name="more-vertical" size={20} color="white" />
              </TouchableOpacity>
            </View>

            {/* Post Image */}
            <Image 
              source={selectedPost.image}
              style={styles.modalImage}
              resizeMode="contain"
            />

            {/* Post Actions */}
            <View style={styles.postActions}>
              <View style={styles.leftActions}>
                <TouchableOpacity 
                  style={styles.actionButton}
                  onPress={() => handleLike(selectedPost.id)}
                >
                  <Feather 
                    name={liked[selectedPost.id] ? "heart" : "heart"} 
                    size={24} 
                    color={liked[selectedPost.id] ? "#FF3B30" : "white"} 
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <Feather name="message-circle" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <Feather name="send" size={24} color="white" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity 
                style={styles.actionButton}
                onPress={() => handleSave(selectedPost.id)}
              >
                <Feather 
                  name={saved[selectedPost.id] ? "bookmark" : "bookmark"} 
                  size={24} 
                  color={saved[selectedPost.id] ? "#FFD700" : "white"} 
                />
              </TouchableOpacity>
            </View>

            {/* Like Count */}
            <View style={styles.likeSection}>
              <Text style={styles.likeCount}>
                {selectedPost.likes} {selectedPost.likes === 1 ? 'like' : 'likes'}
              </Text>
            </View>

            {/* Caption */}
            <View style={styles.captionSection}>
              <Text style={styles.captionText}>
                <Text style={styles.username}>{selectedPost.username}</Text>
                {' '}{selectedPost.caption}
              </Text>
            </View>

            {/* Comments Section */}
            <View style={styles.commentsSection}>
              <Text style={styles.viewComments}>
                {selectedPost.comments} comments
              </Text>
            </View>

            {/* Timestamp */}
            <Text style={styles.timestamp}>
              {selectedPost.timestamp}
            </Text>
          </View>
        </SafeAreaView>
      </Modal>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Header */}
      <View style={styles.searchHeader}>
        <View style={styles.searchBar}>
          <Feather name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#666"
          />
        </View>
      </View>

      {/* Search Grid */}
      <FlatList
        data={searchItems}
        renderItem={renderSearchItem}
        keyExtractor={item => item.id}
        numColumns={3}
        showsVerticalScrollIndicator={false}
      />

      {/* Post Modal */}
      {renderModal()}

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => router.push('/beranda')} >
          <Feather name="home" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="search" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="plus-square" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="film" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/')} >
          <Image 
            source={defaultProfileImage}
            style={styles.bottomNavProfile} 
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  searchHeader: {
    padding: 10,
    paddingTop: 35,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#262626',
    borderRadius: 10,
    padding: 8,
    marginBottom: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: 'white',
    fontSize: 16,
  },
  searchItem: {
    width: tileSize,
    height: tileSize,
    position: 'relative',
  },
  searchImage: {
    width: tileSize - 1,
    height: tileSize - 1,
    margin: 0.5,
  },
  multipleIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 4,
    padding: 4,
  },
  reelsIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 4,
    padding: 4,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 0.2,
    borderBottomColor: '#333',
  },
  modalBackButton: {
    padding: 10,
  },
  modalTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  postContainer: {
    flex: 1,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  userAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  userTextInfo: {
    flex: 1,
  },
  username: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  location: {
    color: 'white',
    fontSize: 12,
    marginTop: 2,
  },
  moreButton: {
    padding: 5,
  },
  modalImage: {
    width: width,
    height: width,
    backgroundColor: '#1a1a1a',
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  leftActions: {
    flexDirection: 'row',
  },
  actionButton: {
    marginRight: 15,
  },
  likeSection: {
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  likeCount: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  captionSection: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  captionText: {
    color: 'white',
    fontSize: 14,
  },
  commentsSection: {
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  viewComments: {
    color: '#666',
    fontSize: 14,
  },
  timestamp: {
    color: '#666',
    fontSize: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 0.2,
    borderTopColor: '#333',
    backgroundColor: 'black',
  },
  bottomNavProfile: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
});
