import React, {useEffect} from 'react'
import '../Category/Category.css'
import './Search.css'
import Header from '../../Header/Header'
import MainiLayout from '../../Layouts/MainLayout/MainLayout';
import { useSearchParams } from 'react-router-dom'
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
  let [searchParams, setSearchParams] = useSearchParams(); 
  let query = searchParams.get("q");

  let searchResult = allPosts.filter(a=>a.title.toLowerCase().includes(query.toLowerCase()));
  console.log(searchResult)

  let navigate = useNavigate();
  let { page } = useParams();
  (window.location.pathname === (props.basename !== undefined ? props.basename.replace(/\//g, '').replace(/^/, '/').replace(/$/, `/search`) : `/search`)) && (page = 1);
  (window.location.pathname === (props.basename !== undefined ? props.basename.replace(/\//g, '').replace(/^/, '/').replace(/$/, `/search/`) : `/search/`)) && (page = 1);
  console.log(page)
  // console.log(props.basename.replace(/\//g, '').replace(/^/, '/').replace(/$/, `/search`))

  let perPagePost = 9;
  let totalPage = Math.ceil(searchResult.length / perPagePost);

  const handlePageClick = (selected) => {
    if (selected >= 1 && selected <= totalPage) {
      let url = `/search`
      navigate(`${url}/page/${selected}/?q=${query}`);
    }
  }
  
  useEffect(()=> {
    window.document.body.scrollIntoView();
  }, [query, page]);

  return (
    <>
      <>
        <Header />

        {searchResult.length >= 1 ? <>

          <MainiLayout className="category-posts-wrapper search-posts-wrapper">

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
                  <span>Serach Result For:</span>
                  <h1> "{query}"</h1>
                </div>

                {searchResult.length >= 1 && <>
                  <CategoryPosts data={searchResult.slice(perPagePost * (page - 1), (perPagePost * page))} />
                  {totalPage > 1 && <div className='cat-page-btn'>
                    <button  disabled={parseInt(page) <= 1} onClick={(e) => { handlePageClick(page - 1) }}><MdArrowBackIosNew/> Newer Posts</button>
                    <span>/</span>
                    <button disabled={parseInt(page) >= totalPage} onClick={() => { handlePageClick(parseInt(page) + 1) }}>Older Posts <MdArrowForwardIos/></button>
                  </div>}
                </>}

                {searchResult.length === 0 && <div>There is no posts to display in this category</div>}
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