import React, { Component, PropTypes } from 'react'

class PostList extends Component {
  static propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object)
  }

  getPostHash = post => `${post.title}${post.permalink}${post.author}`

  render = () => (
    this.props.posts.length ? (
      <div>
        {this.props.posts.map(post => (
          <div key={this.getPostHash(post)}>
            <h3>{post.title} <em>({post.ups} upvotes)</em></h3>
            <em>By <strong>{post.author}</strong></em>
            <div>
              <a target="_blank" rel="noopener noreferrer" href={`https://reddit.com${post.permalink}}`}>See the full story</a>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div>No posts found</div>
    )
  )
}

export default PostList
