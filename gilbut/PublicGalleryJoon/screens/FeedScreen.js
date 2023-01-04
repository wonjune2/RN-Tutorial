import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native'
import PostCard from '../components/PostCard'
import { getOlderPosts, getPosts, PAGE_SIZE } from '../lib/posts'

function FeedScreen() {
  const [posts, setPosts] = useState(null)

  const [noMorePost, setNoMorePost] = useState(false)
  useEffect(() => {
    getPosts().then(setPosts)
  })

  useEffect(() => {
    getPosts().then(setPosts)
  }, [])

  const onLoadMore = async () => {
    if (noMorePost || !posts || posts.length < PAGE_SIZE) {
      return
    }
    const lastPost = posts[posts.length - 1]
    const olderPosts = await getOlderPosts(lastPost.id)
    if (olderPosts.length < PAGE_SIZE) {
      setNoMorePost(true)
    }
    setPosts(posts.councat(olderPosts))
  }

  return (
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.75}
      ListFooterComponent={
        !noMorePost && (
          <ActivityIndicator style={styles.spinner} size={32} color="#6200ee" />
        )
      }
    />
  )
}

const renderItem = ({ item }) => (
  <PostCard
    createAt={item.createAt}
    description={item.description}
    id={item.id}
    user={item.user}
    photoURL={item.photoURL}
  />
)

const styles = StyleSheet.create({
  container: {
    paddingBottom: 48,
  },
  spinner: {
    height: 64,
  },
})

export default FeedScreen
