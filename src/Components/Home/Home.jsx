import MainiLayout from '../Layouts/MainLayout/MainLayout'
import Header from '../Header/Header'
import Slider from '../Slider/Slider'
import ColumnLayout from '../Layouts/MainLayout/ColumnLayout'
import Heading from '../Layouts/Heading/Heading'
import { workout, muscle_building, weight_loss, allPosts } from '../../Database/SortedPosts'
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
import CategoryLayout from '../Layouts/CategoryLayout/CategoryLayout'
import PostLayout4 from '../Layouts/PostsLayouts/PostLayout4/PostLayout4'
import SubscribeNewsLater from '../Layouts/SubscribeNewsLater/SubscribeNewsLater'

const Home = (props) => {

  let navigate = useNavigate();
  let { page } = useParams();
  (window.location.pathname === (props.basename !== undefined ? props.basename.replace(/\//g, '').replace(/^/, '/') : "/")) && (page = 1);
  (window.location.pathname === (props.basename !== undefined ? props.basename.replace(/\//g, '').replace(/^/, '/').replace(/$/, '/') : "/")) && (page = 1);

  // define pagination rules
  let perPagePost = 12;
  let totalPage = Math.ceil(allPosts.length / perPagePost);

  const handlePageClick = ({ selected }) => {
    if (selected + 1 >= 1 && selected + 1 <= totalPage) {
      navigate(`/page/${selected + 1}`);
      document.querySelector('.blog-post-wrapper').scrollIntoView();
    }
  }

  return (
    <>
      <Header />

      <Slider />

      <MainiLayout>

        <ColumnLayout>
          <div>
            <Heading color="secondary">
              Facebook Feed
            </Heading>
            <FacebookFeed />
          </div>

          <div>
            <Heading color="secondary">
              SUBSCRIBE NEWSLETTER
            </Heading>
            <SubscribeNewsLater />
          </div>
        </ColumnLayout>

        <ColumnLayout className="middle">

          {/* Home - 1 */}
          <div>
            <Heading color="primary">
              Workout
            </Heading>
            <PostLayout4 data={workout.slice(0, 9)} />
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
              Weight Loss
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

          <div>
            <Heading color="secondary">
              Categories
            </Heading>
            <CategoryLayout />
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