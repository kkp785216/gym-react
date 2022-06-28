import React, {useEffect} from 'react'
import './Category.css'
import { Categories } from '../../../Database/Categories';
import Header from '../../Header/Header'
import MainiLayout from '../../Layouts/MainLayout/MainLayout';
import ColumnLayout from '../../Layouts/MainLayout/ColumnLayout';
import Heading from '../../Layouts/Heading/Heading';
import SocialConnect from '../../Layouts/SocialConnect/SocialConnect'
import { allPosts, featured } from '../../../Database/SortedPosts';
import PostLayout2 from '../../Layouts/PostsLayouts/PostLayout2/PostLayout2';
import FacebookFeed from '../../Layouts/FacebookFeed/FacebookFeed';
import SearchLayout from '../../Layouts/SearchLayout/SearchLayout';
import PostLayout5 from '../../Layouts/PostsLayouts/PostLayout5/PostLayout5';
import SubscribeNewsLater from '../../Layouts/SubscribeNewsLater/SubscribeNewsLater';
import CategoryLayout from '../../Layouts/CategoryLayout/CategoryLayout';
import Error from '../Error/Error';
import Footer from '../../Footer/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import CategoryPosts from './CategoryPosts/CategoryPosts';

const Category = (props) => {
  const { categoryId } = useParams();
  let validateCategory = Categories[categoryId.replace('-', '_')];
  let currentCategory = allPosts.filter(c => c.categories.find(d => d.id === categoryId.replace('-', '_')));

  let navigate = useNavigate();
  let { page } = useParams();
  (window.location.pathname === (props.basename !== undefined ? props.basename.replace(/\//g, '').replace(/^/, '/').replace(/$/, `/category/${categoryId}`) : `/category/${categoryId}`)) && (page = 1);
  (window.location.pathname === (props.basename !== undefined ? props.basename.replace(/\//g, '').replace(/^/, '/').replace(/$/, `/category/${categoryId}/`) : `/category/${categoryId}/`)) && (page = 1);

  let perPagePost = 9;
  let totalPage = Math.ceil(currentCategory.length / perPagePost);

  const handlePageClick = (selected) => {
    if (selected >= 1 && selected <= totalPage) {
      let url = `/category/${categoryId}`
      navigate(`${url}/page/${selected}`);
    }
  }
  
  useEffect(()=> {
    window.document.body.scrollIntoView();
  }, [categoryId, page]);

  return (
    <>
      <>
        <Header />

        {validateCategory !== undefined ? <>

          <MainiLayout className="category-posts">

            <ColumnLayout>
              <div>
                <Heading color="secondary">
                  Social Contact
                </Heading>
                <SocialConnect />
              </div>

              <div>
                <Heading color="secondary">
                  Featured Posts
                </Heading>
                <PostLayout2 data={featured.slice(0, 8)} date={true} hr={true} />
              </div>

              <div>
                <Heading color="secondary">
                  Facebook Feed
                </Heading>
                <FacebookFeed />
              </div>
            </ColumnLayout>

            <ColumnLayout className="middle">
              <div>
                <div className="cat-title">
                  <span>Category:</span>
                  <h1> {validateCategory.name}</h1>
                </div>

                {currentCategory.length >= 1 && <>
                  <CategoryPosts data={currentCategory.slice(perPagePost * (page - 1), (perPagePost * page))} />
                  {totalPage > 1 && <div>
                    <button disabled={parseInt(page) <= 1} onClick={(e) => { handlePageClick(page - 1) }}>Newer Posts</button>
                    <button disabled={parseInt(page) >= totalPage} onClick={() => { handlePageClick(parseInt(page) + 1) }}>Older Posts</button>
                  </div>}
                </>}

                {currentCategory.length === 0 && <div>There is no posts to display in this category</div>}
              </div>
            </ColumnLayout>

            <ColumnLayout>
              <div>
                <SearchLayout />
              </div>

              <div>
                <Heading color="secondary">
                  Recent Posts
                </Heading>
                <PostLayout5 data={allPosts.slice(0, 5)} />
              </div>

              <div>
                <Heading color="secondary">
                  SUBSCRIBE NEWSLETTER
                </Heading>
                <SubscribeNewsLater />
              </div>

              <div>
                <Heading color="secondary">
                  Categories
                </Heading>
                <CategoryLayout />
              </div>
            </ColumnLayout>

          </MainiLayout>

          <hr className='m-0 p-0' style={{ color: 'var(--border-color)', opacity: '1' }} />

        </> : <Error />}

        <Footer />
      </>
    </>
  )
}

export default Category