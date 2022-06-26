import React from 'react'
import './Footer.css'
import FooterAobut from './FooterAbout/FooterAobut'
import FooterHeading from './FooterHeading/FooterHeading'
import { featured, allPosts } from '../../Database/SortedPosts'
import PostLayout2 from '../Layouts/PostsLayouts/PostLayout2/PostLayout2'
import CategoryLayout from '../Layouts/CategoryLayout/CategoryLayout'
import FooterSocial from './FooterSocial/FooterSocial'
import FooterCredit from './FooterCredit/FooterCredit'

const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="col">
                    <FooterHeading>
                        About Us
                    </FooterHeading>
                    <FooterAobut />
                </div>
                <div className="col">
                    <FooterHeading>
                        Featured Posts
                    </FooterHeading>
                    <PostLayout2 data={featured.slice(0, 3)} hr={true} />
                </div>
                <div className="col">
                    <FooterHeading>
                        Recents Posts
                    </FooterHeading>
                    <PostLayout2 data={allPosts.slice(0, 3)} hr={true} />
                </div>
                <div className="col">
                    <FooterHeading>
                        Categories
                    </FooterHeading>
                    <CategoryLayout />
                </div>
            </div>

            <FooterSocial />
            <hr className="m-0 p-0" style={{ color: '#2e2e2e', opacity: '1' }} />
            <FooterCredit />
        </footer>
    )
}

export default Footer