import React from "react";
import Profile from '../../assets/images/profileimg.jpg'

function Header() {
    return (
        <>
            {/* header-starts */}
            <div class="header sticky-header">

                {/* notification menu start */}
                <div class="menu-right">
                    <div class="navbar user-panel-top">
                        <div class="search-box">
                            <form action="#search-results.html" method="get">
                                <input class="search-input" placeholder="Search Here..." type="search" id="search" />
                                <button class="search-submit" value=""><span class="fa fa-search"></span></button>
                            </form>
                        </div>
                        <div class="profile_details">
                            <ul>
                                <li class="dropdown profile_details_drop">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" id="dropdownMenu3" aria-haspopup="true"
                                        aria-expanded="false">
                                        <div class="profile_img">
                                            <img src={Profile} class="rounded-circle" alt="" />
                                            <div class="user-active">
                                                <span></span>
                                            </div>
                                        </div>
                                    </a>
                                    <ul class="dropdown-menu drp-mnu" aria-labelledby="dropdownMenu3">
                                        <li class="user-info">
                                            <h5 class="user-name">John Deo</h5>
                                            <span class="status ml-2">Available</span>
                                        </li>
                                        <li> <a href="#"><i class="lnr lnr-user"></i>My Profile</a> </li>
                                        <li> <a href="#"><i class="lnr lnr-users"></i>1k Followers</a> </li>
                                        <li> <a href="#"><i class="lnr lnr-cog"></i>Setting</a> </li>
                                        <li> <a href="#"><i class="lnr lnr-heart"></i>100 Likes</a> </li>
                                        <li class="logout"> <a href="#sign-up.html"><i class="fa fa-power-off"></i> Logout</a> </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/*notification menu end */}

            {/* //header-ends */}
        </>
    );
}

export default Header;