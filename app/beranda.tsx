import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  TouchableOpacity, 
  FlatList, 
  SafeAreaView,
  ScrollView,
  Dimensions 
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

// Define interfaces
interface StoryItem {
  id: string;
  username: string;
  image: any;
  hasStory?: boolean;
  isUser?: boolean;
}

interface PostItem {
  id: string;
  username: string;
  isVerified: boolean;
  profileImage: any;
  postImage: any;
  likes: string;
  comments: number;
  shares: string;
  timeAgo: string;
}

const { width } = Dimensions.get('window');

const stories: StoryItem[] = [
  {
    id: '1',
    username: 'Your story',
    image: require('@/assets/images/profil aku.jpg'),
    hasStory: false,
    isUser: true
  },
  {
    id: '2',
    username: '1_ran.thanx',
    image: require('@/assets/images/ran thanx profil.jpg'),
    hasStory: true
  },
  {
    id: '3',
    username: 'mayay___y',
    image: require('@/assets/images/mayayy profil.jpg'),
    hasStory: true
  },
  {
    id: '4',
    username: 'knhs2',
    image: require('@/assets/images/knhs profil.jpg'),
    hasStory: true
  }
];

const posts: PostItem[] = [
  {
    id: '1',
    username: 'yuna_1_27',
    isVerified: true,
    profileImage: require('@/assets/images/profil yuna.jpg'),
    postImage: require('@/assets/images/foto yuna.jpg'),
    likes: '40K',
    comments: 121,
    shares: '1,390',
    timeAgo: '1 day ago'
  },
  {
    id: '2',
    username: '1_ran.thanx',
    isVerified: true,
    profileImage: require('@/assets/images/ran thanx profil.jpg'),
    postImage: require('@/assets/images/post ran.jpg'),
    likes: '25.5K',
    comments: 89,
    shares: '892',
    timeAgo: '3 hours ago'
  }
];

export default function InstagramFeed() {
 const router = useRouter();
  const renderStory = ({ item }: { item: StoryItem }) => (
    <TouchableOpacity style={styles.storyContainer}>
      <View style={[styles.storyRing, !item.hasStory && styles.addStoryRing]}>
        <Image source={item.image} style={styles.storyImage} />
        {item.isUser && (
          <View style={styles.addStoryButton}>
            <Feather name="plus" size={14} color="white" />
          </View>
        )}
      </View>
      <Text style={styles.storyUsername} numberOfLines={1}>
        {item.username}
      </Text>
    </TouchableOpacity>
  );

  const renderPost = ({ item }: { item: PostItem }) => (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <View style={styles.postHeaderLeft}>
          <Image source={item.profileImage} style={styles.postProfileImage} />
          <View style={styles.postHeaderText}>
            <View style={styles.usernameContainer}>
              <Text style={styles.postUsername}>{item.username}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity>
          <Feather name="more-vertical" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <Image source={item.postImage} style={styles.postImage} />

      <View style={styles.postActions}>
        <View style={styles.postActionsLeft}>
          <TouchableOpacity style={styles.actionButton}>
            <Feather name="heart" size={24} color="red" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Feather name="message-circle" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Feather name="send" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Feather name="bookmark" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.postStats}>
        <Text style={styles.likesText}>{item.likes} likes</Text>
        <View style={styles.statsRow}>
          <Text style={styles.statsText}>{item.comments} comments</Text>
          <Text style={styles.statsText}>{item.shares} shares</Text>
        </View>
        <Text style={styles.timeAgo}>{item.timeAgo}</Text>
      </View>
    </View> 
  );
  const defaultProfileImage = require('@/assets/images/profil aku.jpg');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerTitle}>Instagram</Text>
          <Feather name="chevron-down" size={20} color="white" />
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerIcon}>
            <Feather name="heart" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}>
            <Feather name="message-circle" size={24} color="white" />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>1</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => (
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.storiesContainer}
          >
            {stories.map((story) => (
              <View key={story.id}>
                {renderStory({ item: story })}
              </View>
            ))}
          </ScrollView>
        )}
      />

      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Feather name="home" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/search')}>
          <Feather name="search" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="plus-square" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="film" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/')}>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 15,
    paddingVertical: 35,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 5,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    marginLeft: 20,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    right: -6,
    top: -6,
    backgroundColor: '#FF3250',
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  storiesContainer: {
    padding: 10,
  },
  storyContainer: {
    alignItems: 'center',
    marginRight: 15,
    width: 70,
  },
  storyRing: {
    padding: 2,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#FF3250',
    backgroundColor: 'black',
  },
  addStoryRing: {
    borderColor: '#666',
  },
  storyImage: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    borderWidth: 2,
    borderColor: 'black',
  },
  addStoryButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#0095F6',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
  },
  storyUsername: {
    color: 'white',
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },
  postContainer: {
    marginBottom: 10,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  postHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postProfileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  postHeaderText: {
    justifyContent: 'center',
  },
  usernameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postUsername: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 5,
  },
  verifiedBadge: {
    width: 15,
    height: 15,
  },
  postImage: {
    width: 500,
    height: 500,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  postActionsLeft: {
    flexDirection: 'row',
  },
  actionButton: {
    marginRight: 15,
  },
  postStats: {
    padding: 10,
  },
  likesText: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  statsRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  statsText: {
    color: 'white',
    marginRight: 10,
  },
  timeAgo: {
    color: '#666',
    fontSize: 12,
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