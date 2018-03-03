import React from 'react';
import {Link} from 'react-router-dom';

const Main = (props) => {

  return (
    <div>
        <header>
          {/* Full Size Menu Location */}
          <div className="navbar-fixed">
            <nav>
              <div className="nav-wrapper">
                <div className="container center">
                  <Link to="/index" className="brand-logo center" /><img className="brand-logo" src="./assets/images/logos/jiclogo.png" width height="50px" />
                </div>
              </div>
            </nav>
          </div>
          {/* End of where full size menu would go */}
        </header>
        <main>
          {/* Your content here */}
          <div>
            {/* Main Card */}
            <div className="col s12 s7">
              <div className="card horizontal">
                <div className="card-image">
                  <img src="./assets/images/profile/you.JPG" />
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <h5 className="your-name">JoEllen D. Giani</h5>
                    <div className="row">
                      <div className="col s6">
                        <p>DOB: 12/7/80</p>
                        <p>Height: 5' 9"</p>
                        <p>Hair: Brown</p>
                      </div>
                      <div className="col s6">
                        <p>AGE: 36</p>
                        <p>Weight: 150 lbs</p>
                        <p>Eye: Brown</p>
                      </div>
                    </div>
                  </div>
                  <div className="card-action">
                    <p className="black-text text-darken-4">YOU<Link to="/profile" /><i className="material-icons right">more_horiz</i></p>
                  </div>
                </div>
              </div>
            </div>
            {/* End  */}
            {/* Main Card */}
            {/* <div class="col s12 m7">
            <div class="card horizontal">
              <div class="card-image">
                <img src="./assets/images/profile/sopuse.JPG">
              </div>
              <div class="card-stacked">
                <div class="card-content">
                    <h5 class="your-spouse">Salvatore J. Giani</h5>
                    <div class="row">
                            <div class="col s6">
                                <p>DOB: 6/21/79</p>
                            </div>
                            <div class="col s6">
                                <p>AGE: 38</p>
                            </div>
                        </div>
                    </div>
                <div class="card-action">
                        <span><i class="material-icons right">more_horiz</i></span>
                        <p class="black-text text-darken-4">YOUR HUSBAND</p>                </div>
              </div>
            </div>
          </div> */}
            {/* End  */}
            {/* Main Card */}
            {/* <div class="col s12 m7">
            <div class="card horizontal">
              <div class="card-image">
                <img src="./assets/images/profile/kid1son1.JPG">
              </div>
              <div class="card-stacked">
                <div class="card-content">
                    <h5 class="your-sons-name">Salvatore R. Giani</h5>
                    <div class="row">
                            <div class="col s6">
                                <p>DOB: 8/21/06</p>
                            </div>
                            <div class="col s6">
                                <p>AGE: 11</p>
                            </div>
                        </div>
                    </div>
                <div class="card-action">
                        <span><i class="material-icons right">more_horiz</i></span>
                        <p class="black-text text-darken-4">YOUR SON</p>
                </div>
              </div>
            </div>
          </div> */}
            {/* End  */}
            {/* Main Card */}
            {/* <div class="col s12 m7">
            <div class="card horizontal">
              <div class="card-image">
                <img src="./assets/images/profile/kid2son2.JPG">
              </div>
              <div class="card-stacked">
                <div class="card-content">
                    <h5 class="your-sons-name">Nicholas A.M. Giani</h5>
                    <div class="row">
                            <div class="col s6">
                                <p>DOB: 5/15/09</p>
                            </div>
                            <div class="col s6">
                                <p>AGE: 8</p>
                            </div>
                        </div>
                    </div>
                <div class="card-action">
                        <span><i class="material-icons right">more_horiz</i></span>
                        <p class="black-text text-darken-4">YOUR SON</p>                </div>
              </div>
            </div>
          </div> */}
            {/* End  */}
            {/* Main Card */}
            {/* <div class="col s12 m7">
            <div class="card horizontal">
              <div class="card-image">
                <img src="./assets/images/profile/kid3daughter1.JPG">
              </div>
              <div class="card-stacked">
                <div class="card-content">
                    <h5 class="your-daughters-name">Brooklyn S. Giani</h5>
                    <div class="row">
                            <div class="col s6">
                                <p>DOB: 11/12/12</p>
                            </div>
                            <div class="col s6">
                                <p>AGE: 5</p>
                            </div>
                        </div>
                    </div>
                <div class="card-action">
                        <span><i class="material-icons right">more_horiz</i></span>
                        <p class="black-text text-darken-4">YOUR DAUGHTER</p>                </div>
              </div>
            </div>
          </div> */}
            {/* End  */}
            {/* Main Card */}
            {/* <div class="col s12 m7">
            <div class="card horizontal">
              <div class="card-image">
                <img src="./assets/images/profile/kid4daughter2.JPG">
              </div>
              <div class="card-stacked">
                <div class="card-content">
                    <h5 class="your-daughters-name">Angelina B. Giani</h5>
                    <div class="row">
                            <div class="col s6">
                                <p>DOB: 4/11/16</p>
                            </div>
                            <div class="col s6">
                                <p>AGE: 1</p>
                            </div>
                        </div>
                    </div>
                <div class="card-action">
                        <span><i class="material-icons right">more_horiz</i></span>
                        <p class="black-text text-darken-4">YOUR DAUGHTER</p>
                </div>
              </div>
            </div>
          </div> */}
            {/* End  */}
            <div className="fixed-action-btn toolbar ">
              <Link className="btn-floating pulse btn-large red" to="" />
                <i className="large material-icons">menu</i>
              
              <ul>
                <li className="waves-effect waves-light"><Link to="/main" /><i className="material-icons">home</i></li>
                <li className="waves-effect waves-light"><Link to="/addother" /><i className="material-icons">add</i></li>
                <li className="waves-effect waves-light"><Link to="/resources" /><i className="material-icons">format_list_bulleted</i></li>
                <li className="waves-effect waves-light"><Link to="/tour" /><i className="material-icons">play_arrow</i></li>
              </ul>
            </div>
          </div>
        </main>
        {/* Footer */}
        <footer className="page-footer white">
          <div className="footer-copyright">
            <div className="container grey-text" align="center">
              © 2018 Copyright Redpoint Media LLC
              {/* <Link class="grey-text right" to="#!">More Links */}
            </div>
          </div>
        </footer>
        {/* jQuery CDN */}
        {/* Materialize JS CDN */}
        {/* Local JS files */}
      </div>
  );
};

export default Main;