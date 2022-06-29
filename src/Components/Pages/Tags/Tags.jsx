import React, {useEffect} from 'react'
import '../Category/Category.css'
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
import CategoryPosts from '../Category/CategoryPosts/CategoryPosts';
import {MdArrowBackIosNew} from 'react-icons/md'
import {MdArrowForwardIos} from 'react-icons/md'

const Tags = (props) => {
  const { tagId } = useParams();
  let currentTag = allPosts.filter(c => c.tags.find(d => d === tagId.replace('-', '_')));

  let navigate = useNavigate();
  let { page } = useParams();
  (window.location.pathname === (props.basename !== undefined ? props.basename.replace(/\//g, '').replace(/^/, '/').replace(/$/, `/tag/${tagId}`) : `/category/${tagId}`)) && (page = 1);
  (window.location.pathname === (props.basename !== undefined ? props.basename.replace(/\//g, '').replace(/^/, '/').replace(/$/, `/tag/${tagId}/`) : `/category/${tagId}/`)) && (page = 1);

  let perPagePost = 9;
  let totalPage = Math.ceil(currentTag.length / perPagePost);

  const handlePageClick = (selected) => {
    if (selected >= 1 && selected <= totalPage) {
      let url = `/tag/${tagId}`
      navigate(`${url}/page/${selected}`);
    }
  }
  
  useEffect(()=> {
    window.document.body.scrollIntoView();
  }, [tagId, page]);

  return (
    <>
      <>
        <Header />

        {currentTag.length >= 1 ? <>

          <MainiLayout className="category-posts-wrapper">

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
                  <span>Tag:</span>
                  <h1> {tagId.replace(tagId[0], tagId[0].toUpperCase())}</h1>
                </div>

                {currentTag.length >= 1 && <>
                  <CategoryPosts data={currentTag.slice(perPagePost * (page - 1), (perPagePost * page))} />
                  {totalPage > 1 && <div className='cat-page-btn'>
                    <button  disabled={parseInt(page) <= 1} onClick={(e) => { handlePageClick(page - 1) }}><MdArrowBackIosNew/> Newer Posts</button>
                    <span>/</span>
                    <button disabled={parseInt(page) >= totalPage} onClick={() => { handlePageClick(parseInt(page) + 1) }}>Older Posts <MdArrowForwardIos/></button>
                  </div>}
                </>}

                {currentTag.length === 0 && <div>There is no posts to display in this category</div>}
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

export default Tags