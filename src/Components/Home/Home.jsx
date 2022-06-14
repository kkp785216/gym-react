import React from 'react'
import MainiLayout from '../Layouts/MainLayout/MainLayout'
import Header from '../Header/Header'
import Slider from '../Slider/Slider'
import ColumnLayout from '../Layouts/MainLayout/ColumnLayout'
import Heading from '../Layouts/Heading/Heading'
import { workout, muscle_building, weight_loss } from '../Navbar/NavbarData'
import { Link } from 'react-router-dom'
import './Home.css'
import Home2 from './Home2/Home2'
import SocialConnect from '../Layouts/SocialConnect/SocialConnect'
import FacebookFeed from '../Layouts/FacebookFeed/FacebookFeed'
import PostLayout1 from '../Layouts/PostsLayouts/PostLayout1/PostLayout1'
import PostLayout2 from '../Layouts/PostsLayouts/PostLayout2/PostLayout2'
import BlogPostRow from '../Layouts/BlogPostLayout/BlogPostRow'
import BlogPostColumn from '../Layouts/BlogPostLayout/BlogPostColumn'

const Home = () => {
  return (
    <>
      <Header />

      <Slider />

      <MainiLayout className="hello">

        <ColumnLayout>
          <div>
            <Heading color="secondary">
              Facebook Feed
            </Heading>
            <FacebookFeed />
          </div>
        </ColumnLayout>

        <ColumnLayout className="middle">

          {/* Home - 1 */}
          <div>
            <Heading color="primary">
              {workout.category}
            </Heading>
            <div className="row home1">
              {workout.data.slice(0, 9).map((element, index) => {
                return (
                  <div className="col col-4" key={index}>
                    <Link to={element.url}><img src={element.image} alt="" /></Link>
                    <h3><Link to={element.url}>{element.title}</Link></h3>
                    <span>{element.date}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Home - 2 */}
          <div>
            <Heading color="primary">
              {muscle_building.category}
            </Heading>
            <Home2 data={muscle_building.data.slice(0, 6)} />
          </div>

          {/* Home - 3 */}
          <div>
            <Heading color="primary">
              {weight_loss.category}
            </Heading>
            <PostLayout1 data={weight_loss.data.slice(0, 8)} className="home3" date={false} />
          </div>

        </ColumnLayout>

        <ColumnLayout>
          <div>
            <Heading color="secondary">
              Social Contact
            </Heading>
            <SocialConnect />
          </div>

          <div>
            <Heading color="secondary">
              Recent Post
            </Heading>
            <PostLayout2 data={weight_loss.data.slice(0, 8)} date={true} hr={true} />
          </div>
        </ColumnLayout>

      </MainiLayout>


      <div className='blog-post-wrapper'>
        <Heading color="secondary">
          Latest Fitness Update
        </Heading>
        <BlogPostRow>
          <BlogPostColumn>
            Hello
          </BlogPostColumn>
        </BlogPostRow>
      </div>
    </>
  )
}

export default Home