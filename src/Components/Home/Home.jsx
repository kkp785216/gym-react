import MainiLayout from '../Layouts/MainLayout/MainLayout'
import Header from '../Header/Header'
import Slider from '../Slider/Slider'
import ColumnLayout from '../Layouts/MainLayout/ColumnLayout'
import Heading from '../Layouts/Heading/Heading'
import { workout, muscle_building, weight_loss, allPosts } from '../../Database/SortedPosts'
import { Link } from 'react-router-dom'
import './Home.css'
import Home2 from './Home2/Home2'
import SocialConnect from '../Layouts/SocialConnect/SocialConnect'
import FacebookFeed from '../Layouts/FacebookFeed/FacebookFeed'
import PostLayout1 from '../Layouts/PostsLayouts/PostLayout1/PostLayout1'
import PostLayout2 from '../Layouts/PostsLayouts/PostLayout2/PostLayout2'
import BlogPostRow from '../Layouts/BlogPostLayout/BlogPostRow'
import BlogPostColumn from '../Layouts/BlogPostLayout/BlogPostColumn'
import PostLayout3 from '../Layouts/PostsLayouts/PostLayout3/PostLayout3'
import Pagination from './Pagination/Pagination'
import { useNavigate, useParams } from "react-router-dom";

const Home = (props) => {

  let navigate = useNavigate();
  let { page } = useParams();
  (window.location.pathname === (props.basename !==undefined ? props.basename.replace(/\//g,'').replace(/^/,'/') : "/")) && (page = 1);
  (window.location.pathname === (props.basename !==undefined ? props.basename.replace(/\//g,'').replace(/^/,'/').replace(/$/,'/') : "/")) && (page = 1);

  // define pagination rules
  let perPagePost = 12;
  let totalPage = Math.ceil(allPosts.length / perPagePost);

  const handlePageClick = ({ selected }) => {
    if (selected + 1 >= 1 && selected + 1 <= totalPage) {
      navigate(`/page/${selected + 1}`);
    }
  }

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
              Workout
            </Heading>
            <div className="row home1">
              {workout.slice(0, 9).map((element, index) => {
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
              Muscle Building
            </Heading>
            <Home2 data={muscle_building.slice(0, 6)} />
          </div>

          {/* Home - 3 */}
          <div>
            <Heading color="primary">
              {weight_loss.category}
            </Heading>
            <PostLayout1 data={weight_loss.slice(0, 8)} className="home3" date={false} />
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
            <PostLayout2 data={allPosts.slice(0, 8)} date={true} hr={true} />
          </div>
        </ColumnLayout>

      </MainiLayout>


      <div className='blog-post-wrapper'>
        <Heading color="secondary">
          Latest Update
        </Heading>
        <BlogPostRow>
          {allPosts.slice(perPagePost * (page - 1), (perPagePost * page)).map((element, index) => {
            return (
              <BlogPostColumn key={index}>
                <PostLayout3 data={element} />
              </BlogPostColumn>
            )
          })}
        </BlogPostRow>
        <Pagination pageCount={totalPage} handlePageClick={handlePageClick} page={page} />

      </div>
    </>
  )
}

export default Home