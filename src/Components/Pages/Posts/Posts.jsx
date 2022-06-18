import React from 'react'
import Header from '../../Header/Header'
import FacebookFeed from '../../Layouts/FacebookFeed/FacebookFeed'
import Heading from '../../Layouts/Heading/Heading'
import ColumnLayout from '../../Layouts/MainLayout/ColumnLayout'
import MainiLayout from '../../Layouts/MainLayout/MainLayout'
import SocialConnect from '../../Layouts/SocialConnect/SocialConnect'
import { weight_loss } from '../../../Database/Posts'
import PostLayout2 from '../../Layouts/PostsLayouts/PostLayout2/PostLayout2'

const Posts = () => {
  return (
    <>
      <Header />

      <MainiLayout className="hello">

        <ColumnLayout>
          <div>
            <Heading color="secondary">
              Social Contact
            </Heading>
            <SocialConnect />
          </div>

          <div>
            <Heading color="secondary">
              Featured Posts(Edit)
            </Heading>
            <PostLayout2 data={weight_loss.data.slice(0, 8)} date={true} hr={true} />
          </div>

          <div>
            <Heading color="secondary">
              Facebook Feed
            </Heading>
            <FacebookFeed />
          </div>
        </ColumnLayout>

        <ColumnLayout className="middle">
          {/* Description Content */}
          <div>
            <p>Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla onsequat massa quis enim. Donec pede justo fringilla vel aliquet nec vulputate eget. Lorem ispum dolore siamet ipsum dolor.</p>
            <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumquer nihil impedit quo minus id quod maxime placeat facere.<br />
              <span id="more-87" /></p>
            <p style={{ textAlign: 'center', fontSize: '18px' }}><strong>BE THE CHANGE YOU WANT TO SEE IN THE WORLD</strong></p>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.&nbsp;Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur&nbsp;reprehenderit qui in ea voluptate velit esse quam nihil.</p>
            <blockquote><p><span className="s1">You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.</span></p></blockquote>
            <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.&nbsp;Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
            <h4>Demo Magazine Article Title</h4>
            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.&nbsp;Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
            <p>Rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer cidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
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
    </>
  )
}

export default Posts