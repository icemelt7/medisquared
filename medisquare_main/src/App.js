import React, {Component} from 'react';

/* eslint-disable */
class App extends Component {
    
    render() {
        return (
            <div>        
            {/* BEGIN HEADER */}
            <div className="page-header navbar navbar-fixed-top">
                {/* BEGIN HEADER INNER */}
                <div className="page-header-inner ">
                    {/* BEGIN LOGO */}
                    <div className="page-logo">
                        <a href="index.html">
                            <img src="assets/layouts/layout/img/logo.png" alt="logo" className="logo-default" /> </a>
                        <div className="menu-toggler sidebar-toggler">
                            <span></span>
                        </div>
                    </div>
                    {/* END LOGO */}
                    {/* BEGIN RESPONSIVE MENU TOGGLER */}
                    <a href="javascript:;" className="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse">
                        <span></span>
                    </a>
                    {/* END RESPONSIVE MENU TOGGLER */}
                    {/* BEGIN TOP NAVIGATION MENU */}
                    <div className="top-menu">
                        <ul className="nav navbar-nav pull-right">
                            {/* BEGIN NOTIFICATION DROPDOWN */}
                            {/* DOC: Apply "dropdown-dark" class after "dropdown-extended" to change the dropdown styte */}
                            {/* DOC: Apply "dropdown-hoverable" class after below "dropdown" and remove data-toggle="dropdown" data-hover="dropdown" data-close-others="true" attributes to enable hover dropdown mode */}
                            {/* DOC: Remove "dropdown-hoverable" and add data-toggle="dropdown" data-hover="dropdown" data-close-others="true" attributes to the below A element with dropdown-toggle class */}
                            <li className="dropdown dropdown-extended dropdown-notification" id="header_notification_bar">
                                <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                    <i className="icon-bell"></i>
                                    <span className="badge badge-default"> 7 </span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="external">
                                        <h3>
                                            <span className="bold">12 pending</span> notifications</h3>
                                        <a href="page_user_profile_1.html">view all</a>
                                    </li>
                                    <li>
                                        <ul className="dropdown-menu-list scroller" style={{height: '250px'}} data-handle-color="#637283">
                                            <li>
                                                <a href="javascript:;">
                                                    <span className="time">just now</span>
                                                    <span className="details">
                                                        <span className="label label-sm label-icon label-success">
                                                            <i className="fa fa-plus"></i>
                                                        </span> New user registered. </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span className="time">3 mins</span>
                                                    <span className="details">
                                                        <span className="label label-sm label-icon label-danger">
                                                            <i className="fa fa-bolt"></i>
                                                        </span> Server #12 overloaded. </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span className="time">10 mins</span>
                                                    <span className="details">
                                                        <span className="label label-sm label-icon label-warning">
                                                            <i className="fa fa-bell-o"></i>
                                                        </span> Server #2 not responding. </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span className="time">14 hrs</span>
                                                    <span className="details">
                                                        <span className="label label-sm label-icon label-info">
                                                            <i className="fa fa-bullhorn"></i>
                                                        </span> Application error. </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span className="time">2 days</span>
                                                    <span className="details">
                                                        <span className="label label-sm label-icon label-danger">
                                                            <i className="fa fa-bolt"></i>
                                                        </span> Database overloaded 68%. </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span className="time">3 days</span>
                                                    <span className="details">
                                                        <span className="label label-sm label-icon label-danger">
                                                            <i className="fa fa-bolt"></i>
                                                        </span> A user IP blocked. </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span className="time">4 days</span>
                                                    <span className="details">
                                                        <span className="label label-sm label-icon label-warning">
                                                            <i className="fa fa-bell-o"></i>
                                                        </span> Storage Server #4 not responding dfdfdfd. </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span className="time">5 days</span>
                                                    <span className="details">
                                                        <span className="label label-sm label-icon label-info">
                                                            <i className="fa fa-bullhorn"></i>
                                                        </span> System Error. </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span className="time">9 days</span>
                                                    <span className="details">
                                                        <span className="label label-sm label-icon label-danger">
                                                            <i className="fa fa-bolt"></i>
                                                        </span> Storage server failed. </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            {/* END NOTIFICATION DROPDOWN */}
                            {/* BEGIN INBOX DROPDOWN */}
                            {/* DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte */}
                            <li className="dropdown dropdown-extended dropdown-inbox" id="header_inbox_bar">
                                <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                    <i className="icon-envelope-open"></i>
                                    <span className="badge badge-default"> 4 </span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="external">
                                        <h3>You have
                                            <span className="bold">7 New</span> Messages</h3>
                                        <a href="app_inbox.html">view all</a>
                                    </li>
                                    <li>
                                        <ul className="dropdown-menu-list scroller" style={{height: '275px'}} data-handle-color="#637283">
                                            <li>
                                                <a href="#">
                                                    <span className="photo">
                                                        <img src="assets/layouts/layout3/img/avatar2.jpg" className="img-circle" alt="" /> </span>
                                                    <span className="subject">
                                                        <span className="from"> Lisa Wong </span>
                                                        <span className="time">Just Now </span>
                                                    </span>
                                                    <span className="message"> Vivamus sed auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="photo">
                                                        <img src="assets/layouts/layout3/img/avatar3.jpg" className="img-circle" alt="" /> </span>
                                                    <span className="subject">
                                                        <span className="from"> Richard Doe </span>
                                                        <span className="time">16 mins </span>
                                                    </span>
                                                    <span className="message"> Vivamus sed congue nibh auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="photo">
                                                        <img src="assets/layouts/layout3/img/avatar1.jpg" className="img-circle" alt="" /> </span>
                                                    <span className="subject">
                                                        <span className="from"> Bob Nilson </span>
                                                        <span className="time">2 hrs </span>
                                                    </span>
                                                    <span className="message"> Vivamus sed nibh auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="photo">
                                                        <img src="assets/layouts/layout3/img/avatar2.jpg" className="img-circle" alt="" /> </span>
                                                    <span className="subject">
                                                        <span className="from"> Lisa Wong </span>
                                                        <span className="time">40 mins </span>
                                                    </span>
                                                    <span className="message"> Vivamus sed auctor 40% nibh congue nibh... </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="photo">
                                                        <img src="assets/layouts/layout3/img/avatar3.jpg" className="img-circle" alt="" /> </span>
                                                    <span className="subject">
                                                        <span className="from"> Richard Doe </span>
                                                        <span className="time">46 mins </span>
                                                    </span>
                                                    <span className="message"> Vivamus sed congue nibh auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            {/* END INBOX DROPDOWN */}
                            {/* BEGIN TODO DROPDOWN */}
                            {/* DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte */}
                            <li className="dropdown dropdown-extended dropdown-tasks" id="header_task_bar">
                                <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                    <i className="icon-calendar"></i>
                                    <span className="badge badge-default"> 3 </span>
                                </a>
                                <ul className="dropdown-menu extended tasks">
                                    <li className="external">
                                        <h3>You have
                                            <span className="bold">12 pending</span> tasks</h3>
                                        <a href="app_todo.html">view all</a>
                                    </li>
                                    <li>
                                        <ul className="dropdown-menu-list scroller" style={{height: '275px'}} data-handle-color="#637283">
                                            <li>
                                                <a href="javascript:;">
                                                    <span className="task">
                                                        <span className="desc">New release v1.2 </span>
                                                        <span className="percent">30%</span>
                                                    </span>
                                                    <span className="progress">
                                                        <span style={{width: '40%'}} className="progress-bar progress-bar-success" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                                                            <span className="sr-only">40% Complete</span>
                                                        </span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span className="task">
                                                        <span className="desc">Application deployment</span>
                                                        <span className="percent">65%</span>
                                                    </span>
                                                    <span className="progress">
                                                        <span style={{width: '65%'}} className="progress-bar progress-bar-danger" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
                                                            <span className="sr-only">65% Complete</span>
                                                        </span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span className="task">
                                                        <span className="desc">Mobile app release</span>
                                                        <span className="percent">98%</span>
                                                    </span>
                                                    <span className="progress">
                                                        <span style={{width: '98%'}} className="progress-bar progress-bar-success" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100">
                                                            <span className="sr-only">98% Complete</span>
                                                        </span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span className="task">
                                                        <span className="desc">Database migration</span>
                                                        <span className="percent">10%</span>
                                                    </span>
                                                    <span className="progress">
                                                        <span style={{width: '10%'}} className="progress-bar progress-bar-warning" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                                            <span className="sr-only">10% Complete</span>
                                                        </span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span className="task">
                                                        <span className="desc">Web server upgrade</span>
                                                        <span className="percent">58%</span>
                                                    </span>
                                                    <span className="progress">
                                                        <span style={{width: '58%'}} className="progress-bar progress-bar-info" aria-valuenow="58" aria-valuemin="0" aria-valuemax="100">
                                                            <span className="sr-only">58% Complete</span>
                                                        </span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span className="task">
                                                        <span className="desc">Mobile development</span>
                                                        <span className="percent">85%</span>
                                                    </span>
                                                    <span className="progress">
                                                        <span style={{width: '85%'}} className="progress-bar progress-bar-success" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                                            <span className="sr-only">85% Complete</span>
                                                        </span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span className="task">
                                                        <span className="desc">New UI release</span>
                                                        <span className="percent">38%</span>
                                                    </span>
                                                    <span className="progress progress-striped">
                                                        <span style={{width: '38%'}} className="progress-bar progress-bar-important" aria-valuenow="18" aria-valuemin="0" aria-valuemax="100">
                                                            <span className="sr-only">38% Complete</span>
                                                        </span>
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            {/* END TODO DROPDOWN */}
                            {/* BEGIN USER LOGIN DROPDOWN */}
                            {/* DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte */}
                            <li className="dropdown dropdown-user">
                                <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                    <img alt="" className="img-circle" src="assets/layouts/layout/img/avatar3_small.jpg" />
                                    <span className="username username-hide-on-mobile"> Nick </span>
                                    <i className="fa fa-angle-down"></i>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-default">
                                    <li>
                                        <a href="page_user_profile_1.html">
                                            <i className="icon-user"></i> My Profile </a>
                                    </li>
                                    <li>
                                        <a href="app_calendar.html">
                                            <i className="icon-calendar"></i> My Calendar </a>
                                    </li>
                                    <li>
                                        <a href="app_inbox.html">
                                            <i className="icon-envelope-open"></i> My Inbox
                                            <span className="badge badge-danger"> 3 </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="app_todo.html">
                                            <i className="icon-rocket"></i> My Tasks
                                            <span className="badge badge-success"> 7 </span>
                                        </a>
                                    </li>
                                    <li className="divider"> </li>
                                    <li>
                                        <a href="page_user_lock_1.html">
                                            <i className="icon-lock"></i> Lock Screen </a>
                                    </li>
                                    <li>
                                        <a href="page_user_login_1.html">
                                            <i className="icon-key"></i> Log Out </a>
                                    </li>
                                </ul>
                            </li>
                            {/* END USER LOGIN DROPDOWN */}
                            {/* BEGIN QUICK SIDEBAR TOGGLER */}
                            {/* DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte */}
                            <li className="dropdown dropdown-quick-sidebar-toggler">
                                <a href="javascript:;" className="dropdown-toggle">
                                    <i className="icon-logout"></i>
                                </a>
                            </li>
                            {/* END QUICK SIDEBAR TOGGLER */}
                        </ul>
                    </div>
                    {/* END TOP NAVIGATION MENU */}
                </div>
                {/* END HEADER INNER */}
            </div>
            {/* END HEADER */}
            {/* BEGIN HEADER & CONTENT DIVIDER */}
            <div className="clearfix"> </div>
            {/* END HEADER & CONTENT DIVIDER */}
            {/* BEGIN CONTAINER */}
            <div className="page-container">
                {/* BEGIN SIDEBAR */}
                <div className="page-sidebar-wrapper">
                    {/* BEGIN SIDEBAR */}
                    {/* DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing */}
                    {/* DOC: Change data-auto-speed="200" to adjust the sub menu slide up/down speed */}
                    <div className="page-sidebar navbar-collapse collapse">
                        {/* BEGIN SIDEBAR MENU */}
                        {/* DOC: Apply "page-sidebar-menu-light" class right after "page-sidebar-menu" to enable light sidebar menu style(without borders) */}
                        {/* DOC: Apply "page-sidebar-menu-hover-submenu" class right after "page-sidebar-menu" to enable hoverable(hover vs accordion) sub menu mode */}
                        {/* DOC: Apply "page-sidebar-menu-closed" class right after "page-sidebar-menu" to collapse("page-sidebar-closed" class must be applied to the body element) the sidebar sub menu mode */}
                        {/* DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing */}
                        {/* DOC: Set data-keep-expand="true" to keep the submenues expanded */}
                        {/* DOC: Set data-auto-speed="200" to adjust the sub menu slide up/down speed */}
                        <ul className="page-sidebar-menu  page-header-fixed " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200" style={{paddingTop: '20px'}}>
                            {/* DOC: To remove the sidebar toggler from the sidebar you just need to completely remove the below "sidebar-toggler-wrapper" LI element */}
                            {/* BEGIN SIDEBAR TOGGLER BUTTON */}
                            <li className="sidebar-toggler-wrapper hide">
                                <div className="sidebar-toggler">
                                    <span></span>
                                </div>
                            </li>
                            {/* END SIDEBAR TOGGLER BUTTON */}
                            {/* DOC: To remove the search box from the sidebar you just need to completely remove the below "sidebar-search-wrapper" LI element */}
                            <li className="sidebar-search-wrapper">
                                {/* BEGIN RESPONSIVE QUICK SEARCH FORM */}
                                {/* DOC: Apply "sidebar-search-bordered" class the below search form to have bordered search box */}
                                {/* DOC: Apply "sidebar-search-bordered sidebar-search-solid" class the below search form to have bordered & solid search box */}
                                <form className="sidebar-search  sidebar-search-bordered" action="page_general_search_3.html" method="POST">
                                    <a href="javascript:;" className="remove">
                                        <i className="icon-close"></i>
                                    </a>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search..." />
                                        <span className="input-group-btn">
                                            <a href="javascript:;" className="btn submit">
                                                <i className="icon-magnifier"></i>
                                            </a>
                                        </span>
                                    </div>
                                </form>
                                {/* END RESPONSIVE QUICK SEARCH FORM */}
                            </li>
                            <li className="nav-item start ">
                                <a href="javascript:;" className="nav-link nav-toggle">
                                    <i className="icon-home"></i>
                                    <span className="title">Dashboard</span>
                                    <span className="arrow"></span>
                                </a>
                                <ul className="sub-menu">
                                    <li className="nav-item start ">
                                        <a href="index.html" className="nav-link ">
                                            <i className="icon-bar-chart"></i>
                                            <span className="title">Dashboard 1</span>
                                        </a>
                                    </li>
                                    <li className="nav-item start ">
                                        <a href="dashboard_2.html" className="nav-link ">
                                            <i className="icon-bulb"></i>
                                            <span className="title">Dashboard 2</span>
                                            <span className="badge badge-success">1</span>
                                        </a>
                                    </li>
                                    <li className="nav-item start ">
                                        <a href="dashboard_3.html" className="nav-link ">
                                            <i className="icon-graph"></i>
                                            <span className="title">Dashboard 3</span>
                                            <span className="badge badge-danger">5</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="heading">
                                <h3 className="uppercase">Features</h3>
                            </li>
                            <li className="nav-item  ">
                                <a href="javascript:;" className="nav-link nav-toggle">
                                    <i className="icon-diamond"></i>
                                    <span className="title">UI Features</span>
                                    <span className="arrow"></span>
                                </a>
                                <ul className="sub-menu">
                                    <li className="nav-item  ">
                                        <a href="ui_colors.html" className="nav-link ">
                                            <span className="title">Color Library</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="ui_metronic_grid.html" className="nav-link ">
                                            <span className="title">Metronic Grid System</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="ui_general.html" className="nav-link ">
                                            <span className="title">General Components</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="ui_buttons.html" className="nav-link ">
                                            <span className="title">Buttons</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="ui_buttons_spinner.html" className="nav-link ">
                                            <span className="title">Spinner Buttons</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="ui_confirmations.html" className="nav-link ">
                                            <span className="title">Popover Confirmations</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="ui_sweetalert.html" className="nav-link ">
                                            <span className="title">Bootstrap Sweet Alerts</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="ui_icons.html" className="nav-link ">
                                            <span className="title">Font Icons</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="ui_socicons.html" className="nav-link ">
                                            <span className="title">Social Icons</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="ui_typography.html" className="nav-link ">
                                            <span className="title">Typography</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="ui_tabs_accordions_navs.html" className="nav-link ">
                                            <span className="title">Tabs, Accordions & Navs</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="ui_timeline.html" className="nav-link ">
                                            <span className="title">Timeline 1</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="ui_timeline_2.html" className="nav-link ">
                                            <span className="title">Timeline 2</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="ui_timeline_horizontal.html" className="nav-link ">
                                            <span className="title">Horizontal Timeline</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="ui_tree.html" className="nav-link ">
                                            <span className="title">Tree View</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="javascript:;" className="nav-link nav-toggle">
                                            <span className="title">Page Progress Bar</span>
                                            <span className="arrow"></span>
                                        </a>
                                        <ul className="sub-menu">
                                            <li className="nav-item ">
                                                <a href="ui_page_progress_style_1.html" className="nav-link "> Flash </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a href="ui_page_progress_style_2.html" className="nav-link "> Big Counter </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="ui_blockui.html" className="nav-link ">
                                            <span className="title">Block UI</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="ui_bootstrap_growl.html" className="nav-link ">
                                            <span className="title">Bootstrap Growl Notifications</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="ui_notific8.html" className="nav-link ">
                                            <span className="title">Notific8 Notifications</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="ui_toastr.html" className="nav-link ">
                                            <span className="title">Toastr Notifications</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="ui_bootbox.html" className="nav-link ">
                                            <span className="title">Bootbox Dialogs</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="ui_alerts_api.html" className="nav-link ">
                                            <span className="title">Metronic Alerts API</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="ui_session_timeout.html" className="nav-link ">
                                            <span className="title">Session Timeout</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="ui_idle_timeout.html" className="nav-link ">
                                            <span className="title">User Idle Timeout</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="ui_modals.html" className="nav-link ">
                                            <span className="title">Modals</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="ui_extended_modals.html" className="nav-link ">
                                            <span className="title">Extended Modals</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="ui_tiles.html" className="nav-link ">
                                            <span className="title">Tiles</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="ui_datepaginator.html" className="nav-link ">
                                            <span className="title">Date Paginator</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="ui_nestable.html" className="nav-link ">
                                            <span className="title">Nestable List</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item  ">
                                <a href="javascript:;" className="nav-link nav-toggle">
                                    <i className="icon-puzzle"></i>
                                    <span className="title">Components</span>
                                    <span className="arrow"></span>
                                </a>
                                <ul className="sub-menu">
                                    <li className="nav-item  ">
                                        <a href="components_date_time_pickers.html" className="nav-link ">
                                            <span className="title">Date & Time Pickers</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="components_color_pickers.html" className="nav-link ">
                                            <span className="title">Color Pickers</span>
                                            <span className="badge badge-danger">2</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="components_select2.html" className="nav-link ">
                                            <span className="title">Select2 Dropdowns</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="components_bootstrap_multiselect_dropdown.html" className="nav-link ">
                                            <span className="title">Bootstrap Multiselect Dropdowns</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="components_bootstrap_select.html" className="nav-link ">
                                            <span className="title">Bootstrap Select</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="components_multi_select.html" className="nav-link ">
                                            <span className="title">Bootstrap Multiple Select</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="components_bootstrap_select_splitter.html" className="nav-link ">
                                            <span className="title">Select Splitter</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="components_clipboard.html" className="nav-link ">
                                            <span className="title">Clipboard</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="components_typeahead.html" className="nav-link ">
                                            <span className="title">Typeahead Autocomplete</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="components_bootstrap_tagsinput.html" className="nav-link ">
                                            <span className="title">Bootstrap Tagsinput</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="components_bootstrap_switch.html" className="nav-link ">
                                            <span className="title">Bootstrap Switch</span>
                                            <span className="badge badge-success">6</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="components_bootstrap_maxlength.html" className="nav-link ">
                                            <span className="title">Bootstrap Maxlength</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="components_bootstrap_fileinput.html" className="nav-link ">
                                            <span className="title">Bootstrap File Input</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="components_bootstrap_touchspin.html" className="nav-link ">
                                            <span className="title">Bootstrap Touchspin</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="components_form_tools.html" className="nav-link ">
                                            <span className="title">Form Widgets & Tools</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="components_context_menu.html" className="nav-link ">
                                            <span className="title">Context Menu</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="components_editors.html" className="nav-link ">
                                            <span className="title">Markdown & WYSIWYG Editors</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="components_code_editors.html" className="nav-link ">
                                            <span className="title">Code Editors</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="components_ion_sliders.html" className="nav-link ">
                                            <span className="title">Ion Range Sliders</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="components_noui_sliders.html" className="nav-link ">
                                            <span className="title">NoUI Range Sliders</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="components_knob_dials.html" className="nav-link ">
                                            <span className="title">Knob Circle Dials</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item  ">
                                <a href="javascript:;" className="nav-link nav-toggle">
                                    <i className="icon-settings"></i>
                                    <span className="title">Form Stuff</span>
                                    <span className="arrow"></span>
                                </a>
                                <ul className="sub-menu">
                                    <li className="nav-item  ">
                                        <a href="form_controls.html" className="nav-link ">
                                            <span className="title">Bootstrap Form
                                                <br />Controls</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="form_controls_md.html" className="nav-link ">
                                            <span className="title">Material Design
                                                <br />Form Controls</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="form_validation.html" className="nav-link ">
                                            <span className="title">Form Validation</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="form_validation_states_md.html" className="nav-link ">
                                            <span className="title">Material Design
                                                <br />Form Validation States</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="form_validation_md.html" className="nav-link ">
                                            <span className="title">Material Design
                                                <br />Form Validation</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="form_layouts.html" className="nav-link ">
                                            <span className="title">Form Layouts</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="form_repeater.html" className="nav-link ">
                                            <span className="title">Form Repeater</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="form_input_mask.html" className="nav-link ">
                                            <span className="title">Form Input Mask</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="form_editable.html" className="nav-link ">
                                            <span className="title">Form X-editable</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="form_wizard.html" className="nav-link ">
                                            <span className="title">Form Wizard</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="form_icheck.html" className="nav-link ">
                                            <span className="title">iCheck Controls</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="form_image_crop.html" className="nav-link ">
                                            <span className="title">Image Cropping</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="form_fileupload.html" className="nav-link ">
                                            <span className="title">Multiple File Upload</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="form_dropzone.html" className="nav-link ">
                                            <span className="title">Dropzone File Upload</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item  ">
                                <a href="javascript:;" className="nav-link nav-toggle">
                                    <i className="icon-bulb"></i>
                                    <span className="title">Elements</span>
                                    <span className="arrow"></span>
                                </a>
                                <ul className="sub-menu">
                                    <li className="nav-item  ">
                                        <a href="elements_steps.html" className="nav-link ">
                                            <span className="title">Steps</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="elements_lists.html" className="nav-link ">
                                            <span className="title">Lists</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="elements_ribbons.html" className="nav-link ">
                                            <span className="title">Ribbons</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="elements_overlay.html" className="nav-link ">
                                            <span className="title">Overlays</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="elements_cards.html" className="nav-link ">
                                            <span className="title">User Cards</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item  ">
                                <a href="javascript:;" className="nav-link nav-toggle">
                                    <i className="icon-briefcase"></i>
                                    <span className="title">Tables</span>
                                    <span className="arrow"></span>
                                </a>
                                <ul className="sub-menu">
                                    <li className="nav-item  ">
                                        <a href="table_static_basic.html" className="nav-link ">
                                            <span className="title">Basic Tables</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="table_static_responsive.html" className="nav-link ">
                                            <span className="title">Responsive Tables</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="table_bootstrap.html" className="nav-link ">
                                            <span className="title">Bootstrap Tables</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="javascript:;" className="nav-link nav-toggle">
                                            <span className="title">Datatables</span>
                                            <span className="arrow"></span>
                                        </a>
                                        <ul className="sub-menu">
                                            <li className="nav-item ">
                                                <a href="table_datatables_managed.html" className="nav-link "> Managed Datatables </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a href="table_datatables_buttons.html" className="nav-link "> Buttons Extension </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a href="table_datatables_colreorder.html" className="nav-link "> Colreorder Extension </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a href="table_datatables_rowreorder.html" className="nav-link "> Rowreorder Extension </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a href="table_datatables_scroller.html" className="nav-link "> Scroller Extension </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a href="table_datatables_fixedheader.html" className="nav-link "> FixedHeader Extension </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a href="table_datatables_responsive.html" className="nav-link "> Responsive Extension </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a href="table_datatables_editable.html" className="nav-link "> Editable Datatables </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a href="table_datatables_ajax.html" className="nav-link "> Ajax Datatables </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item  ">
                                <a href="?p=" className="nav-link nav-toggle">
                                    <i className="icon-wallet"></i>
                                    <span className="title">Portlets</span>
                                    <span className="arrow"></span>
                                </a>
                                <ul className="sub-menu">
                                    <li className="nav-item  ">
                                        <a href="portlet_boxed.html" className="nav-link ">
                                            <span className="title">Boxed Portlets</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="portlet_light.html" className="nav-link ">
                                            <span className="title">Light Portlets</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="portlet_solid.html" className="nav-link ">
                                            <span className="title">Solid Portlets</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="portlet_ajax.html" className="nav-link ">
                                            <span className="title">Ajax Portlets</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="portlet_draggable.html" className="nav-link ">
                                            <span className="title">Draggable Portlets</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item  ">
                                <a href="javascript:;" className="nav-link nav-toggle">
                                    <i className="icon-bar-chart"></i>
                                    <span className="title">Charts</span>
                                    <span className="arrow"></span>
                                </a>
                                <ul className="sub-menu">
                                    <li className="nav-item  ">
                                        <a href="charts_amcharts.html" className="nav-link ">
                                            <span className="title">amChart</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="charts_flotcharts.html" className="nav-link ">
                                            <span className="title">Flot Charts</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="charts_flowchart.html" className="nav-link ">
                                            <span className="title">Flow Charts</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="charts_google.html" className="nav-link ">
                                            <span className="title">Google Charts</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="charts_echarts.html" className="nav-link ">
                                            <span className="title">eCharts</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="charts_morris.html" className="nav-link ">
                                            <span className="title">Morris Charts</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="javascript:;" className="nav-link nav-toggle">
                                            <span className="title">HighCharts</span>
                                            <span className="arrow"></span>
                                        </a>
                                        <ul className="sub-menu">
                                            <li className="nav-item ">
                                                <a href="charts_highcharts.html" className="nav-link "> HighCharts </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a href="charts_highstock.html" className="nav-link "> HighStock </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a href="charts_highmaps.html" className="nav-link "> HighMaps </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item  ">
                                <a href="javascript:;" className="nav-link nav-toggle">
                                    <i className="icon-pointer"></i>
                                    <span className="title">Maps</span>
                                    <span className="arrow"></span>
                                </a>
                                <ul className="sub-menu">
                                    <li className="nav-item  ">
                                        <a href="maps_google.html" className="nav-link ">
                                            <span className="title">Google Maps</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="maps_vector.html" className="nav-link ">
                                            <span className="title">Vector Maps</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="heading">
                                <h3 className="uppercase">Layouts</h3>
                            </li>
                            <li className="nav-item  active open">
                                <a href="javascript:;" className="nav-link nav-toggle">
                                    <i className="icon-layers"></i>
                                    <span className="title">Page Layouts</span>
                                    <span className="selected"></span>
                                    <span className="arrow open"></span>
                                </a>
                                <ul className="sub-menu">
                                    <li className="nav-item  active open">
                                        <a href="layout_blank_page.html" className="nav-link ">
                                            <span className="title">Blank Page</span>
                                            <span className="selected"></span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="layout_ajax_page.html" className="nav-link ">
                                            <span className="title">Ajax Content Layout</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="layout_offcanvas_mobile_menu.html" className="nav-link ">
                                            <span className="title">Off-canvas Mobile Menu</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="layout_classic_page_head.html" className="nav-link ">
                                            <span className="title">Classic Page Head</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="layout_light_page_head.html" className="nav-link ">
                                            <span className="title">Light Page Head</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="layout_content_grey.html" className="nav-link ">
                                            <span className="title">Grey Bg Content</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="layout_search_on_header_1.html" className="nav-link ">
                                            <span className="title">Search Box On Header 1</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="layout_search_on_header_2.html" className="nav-link ">
                                            <span className="title">Search Box On Header 2</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="layout_language_bar.html" className="nav-link ">
                                            <span className="title">Header Language Bar</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="layout_footer_fixed.html" className="nav-link ">
                                            <span className="title">Fixed Footer</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="layout_boxed_page.html" className="nav-link ">
                                            <span className="title">Boxed Page</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item  ">
                                <a href="javascript:;" className="nav-link nav-toggle">
                                    <i className="icon-feed"></i>
                                    <span className="title">Sidebar Layouts</span>
                                    <span className="arrow"></span>
                                </a>
                                <ul className="sub-menu">
                                    <li className="nav-item  ">
                                        <a href="layout_sidebar_menu_light.html" className="nav-link ">
                                            <span className="title">Light Sidebar Menu</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="layout_sidebar_menu_hover.html" className="nav-link ">
                                            <span className="title">Hover Sidebar Menu</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="layout_sidebar_search_1.html" className="nav-link ">
                                            <span className="title">Sidebar Search Option 1</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="layout_sidebar_search_2.html" className="nav-link ">
                                            <span className="title">Sidebar Search Option 2</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="layout_toggler_on_sidebar.html" className="nav-link ">
                                            <span className="title">Sidebar Toggler On Sidebar</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="layout_sidebar_reversed.html" className="nav-link ">
                                            <span className="title">Reversed Sidebar Page</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="layout_sidebar_fixed.html" className="nav-link ">
                                            <span className="title">Fixed Sidebar Layout</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="layout_sidebar_closed.html" className="nav-link ">
                                            <span className="title">Closed Sidebar Layout</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item  ">
                                <a href="javascript:;" className="nav-link nav-toggle">
                                    <i className="icon-paper-plane"></i>
                                    <span className="title">Horizontal Menu</span>
                                    <span className="arrow"></span>
                                </a>
                                <ul className="sub-menu">
                                    <li className="nav-item  ">
                                        <a href="layout_mega_menu_light.html" className="nav-link ">
                                            <span className="title">Light Mega Menu</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="layout_mega_menu_dark.html" className="nav-link ">
                                            <span className="title">Dark Mega Menu</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="layout_full_width.html" className="nav-link ">
                                            <span className="title">Full Width Layout</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item  ">
                                <a href="javascript:;" className="nav-link nav-toggle">
                                    <i className=" icon-wrench"></i>
                                    <span className="title">Custom Layouts</span>
                                    <span className="arrow"></span>
                                </a>
                                <ul className="sub-menu">
                                    <li className="nav-item  ">
                                        <a href="layout_disabled_menu.html" className="nav-link ">
                                            <span className="title">Disabled Menu Links</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="layout_full_height_portlet.html" className="nav-link ">
                                            <span className="title">Full Height Portlet</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="layout_full_height_content.html" className="nav-link ">
                                            <span className="title">Full Height Content</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="heading">
                                <h3 className="uppercase">Pages</h3>
                            </li>
                            <li className="nav-item  ">
                                <a href="javascript:;" className="nav-link nav-toggle">
                                    <i className="icon-basket"></i>
                                    <span className="title">eCommerce</span>
                                    <span className="arrow"></span>
                                </a>
                                <ul className="sub-menu">
                                    <li className="nav-item  ">
                                        <a href="ecommerce_index.html" className="nav-link ">
                                            <i className="icon-home"></i>
                                            <span className="title">Dashboard</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="ecommerce_orders.html" className="nav-link ">
                                            <i className="icon-basket"></i>
                                            <span className="title">Orders</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="ecommerce_orders_view.html" className="nav-link ">
                                            <i className="icon-tag"></i>
                                            <span className="title">Order View</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="ecommerce_products.html" className="nav-link ">
                                            <i className="icon-graph"></i>
                                            <span className="title">Products</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="ecommerce_products_edit.html" className="nav-link ">
                                            <i className="icon-graph"></i>
                                            <span className="title">Product Edit</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item  ">
                                <a href="javascript:;" className="nav-link nav-toggle">
                                    <i className="icon-docs"></i>
                                    <span className="title">Apps</span>
                                    <span className="arrow"></span>
                                </a>
                                <ul className="sub-menu">
                                    <li className="nav-item  ">
                                        <a href="app_todo.html" className="nav-link ">
                                            <i className="icon-clock"></i>
                                            <span className="title">Todo 1</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="app_todo_2.html" className="nav-link ">
                                            <i className="icon-check"></i>
                                            <span className="title">Todo 2</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="app_inbox.html" className="nav-link ">
                                            <i className="icon-envelope"></i>
                                            <span className="title">Inbox</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="app_calendar.html" className="nav-link ">
                                            <i className="icon-calendar"></i>
                                            <span className="title">Calendar</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="app_ticket.html" className="nav-link ">
                                            <i className="icon-notebook"></i>
                                            <span className="title">Support</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item  ">
                                <a href="javascript:;" className="nav-link nav-toggle">
                                    <i className="icon-user"></i>
                                    <span className="title">User</span>
                                    <span className="arrow"></span>
                                </a>
                                <ul className="sub-menu">
                                    <li className="nav-item  ">
                                        <a href="page_user_profile_1.html" className="nav-link ">
                                            <i className="icon-user"></i>
                                            <span className="title">Profile 1</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="page_user_profile_1_account.html" className="nav-link ">
                                            <i className="icon-user-female"></i>
                                            <span className="title">Profile 1 Account</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="page_user_profile_1_help.html" className="nav-link ">
                                            <i className="icon-user-following"></i>
                                            <span className="title">Profile 1 Help</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="page_user_profile_2.html" className="nav-link ">
                                            <i className="icon-users"></i>
                                            <span className="title">Profile 2</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="javascript:;" className="nav-link nav-toggle">
                                            <i className="icon-notebook"></i>
                                            <span className="title">Login</span>
                                            <span className="arrow"></span>
                                        </a>
                                        <ul className="sub-menu">
                                            <li className="nav-item ">
                                                <a href="page_user_login_1.html" className="nav-link " target="_blank"> Login Page 1 </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a href="page_user_login_2.html" className="nav-link " target="_blank"> Login Page 2 </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a href="page_user_login_3.html" className="nav-link " target="_blank"> Login Page 3 </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a href="page_user_login_4.html" className="nav-link " target="_blank"> Login Page 4 </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a href="page_user_login_5.html" className="nav-link " target="_blank"> Login Page 5 </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a href="page_user_login_6.html" className="nav-link " target="_blank"> Login Page 6 </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="page_user_lock_1.html" className="nav-link " target="_blank">
                                            <i className="icon-lock"></i>
                                            <span className="title">Lock Screen 1</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="page_user_lock_2.html" className="nav-link " target="_blank">
                                            <i className="icon-lock-open"></i>
                                            <span className="title">Lock Screen 2</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item  ">
                                <a href="javascript:;" className="nav-link nav-toggle">
                                    <i className="icon-social-dribbble"></i>
                                    <span className="title">General</span>
                                    <span className="arrow"></span>
                                </a>
                                <ul className="sub-menu">
                                    <li className="nav-item  ">
                                        <a href="page_general_about.html" className="nav-link ">
                                            <i className="icon-info"></i>
                                            <span className="title">About</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="page_general_contact.html" className="nav-link ">
                                            <i className="icon-call-end"></i>
                                            <span className="title">Contact</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="javascript:;" className="nav-link nav-toggle">
                                            <i className="icon-notebook"></i>
                                            <span className="title">Portfolio</span>
                                            <span className="arrow"></span>
                                        </a>
                                        <ul className="sub-menu">
                                            <li className="nav-item ">
                                                <a href="page_general_portfolio_1.html" className="nav-link "> Portfolio 1 </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a href="page_general_portfolio_2.html" className="nav-link "> Portfolio 2 </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a href="page_general_portfolio_3.html" className="nav-link "> Portfolio 3 </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a href="page_general_portfolio_4.html" className="nav-link "> Portfolio 4 </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="javascript:;" className="nav-link nav-toggle">
                                            <i className="icon-magnifier"></i>
                                            <span className="title">Search</span>
                                            <span className="arrow"></span>
                                        </a>
                                        <ul className="sub-menu">
                                            <li className="nav-item ">
                                                <a href="page_general_search.html" className="nav-link "> Search 1 </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a href="page_general_search_2.html" className="nav-link "> Search 2 </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a href="page_general_search_3.html" className="nav-link "> Search 3 </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a href="page_general_search_4.html" className="nav-link "> Search 4 </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a href="page_general_search_5.html" className="nav-link "> Search 5 </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="page_general_pricing.html" className="nav-link ">
                                            <i className="icon-tag"></i>
                                            <span className="title">Pricing</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="page_general_faq.html" className="nav-link ">
                                            <i className="icon-wrench"></i>
                                            <span className="title">FAQ</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="page_general_blog.html" className="nav-link ">
                                            <i className="icon-pencil"></i>
                                            <span className="title">Blog</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="page_general_blog_post.html" className="nav-link ">
                                            <i className="icon-note"></i>
                                            <span className="title">Blog Post</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="page_general_invoice.html" className="nav-link ">
                                            <i className="icon-envelope"></i>
                                            <span className="title">Invoice</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="page_general_invoice_2.html" className="nav-link ">
                                            <i className="icon-envelope"></i>
                                            <span className="title">Invoice 2</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item  ">
                                <a href="javascript:;" className="nav-link nav-toggle">
                                    <i className="icon-settings"></i>
                                    <span className="title">System</span>
                                    <span className="arrow"></span>
                                </a>
                                <ul className="sub-menu">
                                    <li className="nav-item  ">
                                        <a href="page_cookie_consent_1.html" className="nav-link ">
                                            <span className="title">Cookie Consent 1</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="page_cookie_consent_2.html" className="nav-link ">
                                            <span className="title">Cookie Consent 2</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="page_system_coming_soon.html" className="nav-link " target="_blank">
                                            <span className="title">Coming Soon</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="page_system_404_1.html" className="nav-link ">
                                            <span className="title">404 Page 1</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="page_system_404_2.html" className="nav-link " target="_blank">
                                            <span className="title">404 Page 2</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="page_system_404_3.html" className="nav-link " target="_blank">
                                            <span className="title">404 Page 3</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="page_system_500_1.html" className="nav-link ">
                                            <span className="title">500 Page 1</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="page_system_500_2.html" className="nav-link " target="_blank">
                                            <span className="title">500 Page 2</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="javascript:;" className="nav-link nav-toggle">
                                    <i className="icon-folder"></i>
                                    <span className="title">Multi Level Menu</span>
                                    <span className="arrow "></span>
                                </a>
                                <ul className="sub-menu">
                                    <li className="nav-item">
                                        <a href="javascript:;" className="nav-link nav-toggle">
                                            <i className="icon-settings"></i> Item 1
                                            <span className="arrow"></span>
                                        </a>
                                        <ul className="sub-menu">
                                            <li className="nav-item">
                                                <a href="javascript:;" target="_blank" className="nav-link">
                                                    <i className="icon-user"></i> Arrow Toggle
                                                    <span className="arrow nav-toggle"></span>
                                                </a>
                                                <ul className="sub-menu">
                                                    <li className="nav-item">
                                                        <a href="#" className="nav-link">
                                                            <i className="icon-power"></i> Sample Link 1</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="#" className="nav-link">
                                                            <i className="icon-paper-plane"></i> Sample Link 1</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="#" className="nav-link">
                                                            <i className="icon-star"></i> Sample Link 1</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    <i className="icon-camera"></i> Sample Link 1</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    <i className="icon-link"></i> Sample Link 2</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    <i className="icon-pointer"></i> Sample Link 3</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="javascript:;" target="_blank" className="nav-link">
                                            <i className="icon-globe"></i> Arrow Toggle
                                            <span className="arrow nav-toggle"></span>
                                        </a>
                                        <ul className="sub-menu">
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    <i className="icon-tag"></i> Sample Link 1</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    <i className="icon-pencil"></i> Sample Link 1</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    <i className="icon-graph"></i> Sample Link 1</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="icon-bar-chart"></i> Item 3 </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        {/* END SIDEBAR MENU */}
                        {/* END SIDEBAR MENU */}
                    </div>
                    {/* END SIDEBAR */}
                </div>
                {/* END SIDEBAR */}
                {/* BEGIN CONTENT */}
                <div className="page-content-wrapper">
                    {/* BEGIN CONTENT BODY */}
                    <div className="page-content">
                        {/* BEGIN PAGE HEADER*/}
                        {/* BEGIN THEME PANEL */}
                        {/* div className="theme-panel hidden-xs hidden-sm">
                            <div className="toggler"> </div>
                            <div className="toggler-close"> </div>
                            <div className="theme-options">
                                <div className="theme-option theme-colors clearfix">
                                    <span> THEME COLOR </span>
                                    <ul>
                                        <li className="color-default current tooltips" data-style={{default}} data-container="body" data-original-title="Default"> </li>
                                        <li className="color-darkblue tooltips" data-style={{darkblue}} data-container="body" data-original-title="Dark Blue"> </li>
                                        <li className="color-blue tooltips" data-style={{blue}} data-container="body" data-original-title="Blue"> </li>
                                        <li className="color-grey tooltips" data-style={{grey}} data-container="body" data-original-title="Grey"> </li>
                                        <li className="color-light tooltips" data-style={{light}} data-container="body" data-original-title="Light"> </li>
                                        <li className="color-light2 tooltips" data-style={{light2}} data-container="body" data-html="true" data-original-title="Light 2"> </li>
                                    </ul>
                                </div>
                                <div className="theme-option">
                                    <span> Theme Style </span>
                                    <select className="layout-style-option form-control input-sm">
                                        <option value="square" selected="selected">Square corners</option>
                                        <option value="rounded">Rounded corners</option>
                                    </select>
                                </div>
                                <div className="theme-option">
                                    <span> Layout </span>
                                    <select className="layout-option form-control input-sm">
                                        <option value="fluid" selected="selected">Fluid</option>
                                        <option value="boxed">Boxed</option>
                                    </select>
                                </div>
                                <div className="theme-option">
                                    <span> Header </span>
                                    <select className="page-header-option form-control input-sm">
                                        <option value="fixed" selected="selected">Fixed</option>
                                        <option value="default">Default</option>
                                    </select>
                                </div>
                                <div className="theme-option">
                                    <span> Top Menu Dropdown</span>
                                    <select className="page-header-top-dropdown-style-option form-control input-sm">
                                        <option value="light" selected="selected">Light</option>
                                        <option value="dark">Dark</option>
                                    </select>
                                </div>
                                <div className="theme-option">
                                    <span> Sidebar Mode</span>
                                    <select className="sidebar-option form-control input-sm">
                                        <option value="fixed">Fixed</option>
                                        <option value="default" selected="selected">Default</option>
                                    </select>
                                </div>
                                <div className="theme-option">
                                    <span> Sidebar Menu </span>
                                    <select className="sidebar-menu-option form-control input-sm">
                                        <option value="accordion" selected="selected">Accordion</option>
                                        <option value="hover">Hover</option>
                                    </select>
                                </div>
                                <div className="theme-option">
                                    <span> Sidebar Style </span>
                                    <select className="sidebar-style-option form-control input-sm">
                                        <option value="default" selected="selected">Default</option>
                                        <option value="light">Light</option>
                                    </select>
                                </div>
                                <div className="theme-option">
                                    <span> Sidebar Position </span>
                                    <select className="sidebar-pos-option form-control input-sm">
                                        <option value="left" selected="selected">Left</option>
                                        <option value="right">Right</option>
                                    </select>
                                </div>
                                <div className="theme-option">
                                    <span> Footer </span>
                                    <select className="page-footer-option form-control input-sm">
                                        <option value="fixed">Fixed</option>
                                        <option value="default" selected="selected">Default</option>
                                    </select>
                                </div>
                            </div>
                        </div */}
                        {/* END THEME PANEL */}
                        {/* BEGIN PAGE BAR */}
                        <div className="page-bar">
                            <ul className="page-breadcrumb">
                                <li>
                                    <a href="index.html">Home</a>
                                    <i className="fa fa-circle"></i>
                                </li>
                                <li>
                                    <a href="#">Blank Page</a>
                                    <i className="fa fa-circle"></i>
                                </li>
                                <li>
                                    <span>Page Layouts</span>
                                </li>
                            </ul>
                            <div className="page-toolbar">
                                <div className="btn-group pull-right">
                                    <button type="button" className="btn green btn-sm btn-outline dropdown-toggle" data-toggle="dropdown"> Actions
                                        <i className="fa fa-angle-down"></i>
                                    </button>
                                    <ul className="dropdown-menu pull-right" role="menu">
                                        <li>
                                            <a href="#">
                                                <i className="icon-bell"></i> Action</a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="icon-shield"></i> Another action</a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="icon-user"></i> Something else here</a>
                                        </li>
                                        <li className="divider"> </li>
                                        <li>
                                            <a href="#">
                                                <i className="icon-bag"></i> Separated link</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* END PAGE BAR */}
                        {/* BEGIN PAGE TITLE*/}
                        <h1 className="page-title"> Blank Page Layout
                            <small>blank page layout</small>
                        </h1>
                        {/* END PAGE TITLE*/}
                        {/* END PAGE HEADER*/}
                        <div className="portlet light bordered">
                <div className="portlet-title">
                    <div className="caption">
                        <i className="icon-social-dribbble font-green"></i>
                        <span className="caption-subject font-green bold uppercase">Simple Table</span>
                    </div>
                    <div className="actions">
                        <a className="btn btn-circle btn-icon-only btn-default" href="javascript:;">
                            <i className="icon-cloud-upload"></i>
                        </a>
                        <a className="btn btn-circle btn-icon-only btn-default" href="javascript:;">
                            <i className="icon-wrench"></i>
                        </a>
                        <a className="btn btn-circle btn-icon-only btn-default" href="javascript:;">
                            <i className="icon-trash"></i>
                        </a>
                    </div>
                </div>
                <div className="portlet-body">
                    <div className="table-scrollable">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>
                                        #
                                    </th>
                                    <th>
                                        First Name
                                    </th>
                                    <th>
                                        Last Name
                                    </th>
                                    <th>
                                        Username
                                    </th>
                                    <th>
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        1
                                    </td>
                                    <td>
                                        Mark
                                    </td>
                                    <td>
                                        Otto
                                    </td>
                                    <td>
                                        makr124
                                    </td>
                                    <td>
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-default">Left</button>
                                            <button type="button" className="btn btn-default">Middle</button>
                                            <button type="button" className="btn btn-default">Right</button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        2
                                    </td>
                                    <td>
                                        Jacob
                                    </td>
                                    <td>
                                        Nilson
                                    </td>
                                    <td>
                                        jac123
                                    </td>
                                    <td>
                                        <span className="label label-sm label-info">
                                            Pending
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        3
                                    </td>
                                    <td>
                                        Larry
                                    </td>
                                    <td>
                                        Cooper
                                    </td>
                                    <td>
                                        lar
                                    </td>
                                    <td>
                                        <span className="label label-sm label-warning">
                                            Suspended
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        4
                                    </td>
                                    <td>
                                        Sandy
                                    </td>
                                    <td>
                                        Lim
                                    </td>
                                    <td>
                                        sanlim
                                    </td>
                                    <td>
                                        <span className="label label-sm label-danger">
                                            Blocked
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
                    </div>
                    {/* END CONTENT BODY */}
                </div>
                {/* END CONTENT */}
                {/* BEGIN QUICK SIDEBAR */}
                <a href="javascript:;" className="page-quick-sidebar-toggler">
                    <i className="icon-login"></i>
                </a>
                <div className="page-quick-sidebar-wrapper" data-close-on-body-click="false">
                    <div className="page-quick-sidebar">
                        <ul className="nav nav-tabs">
                            <li className="active">
                                <a href="javascript:;" data-target="#quick_sidebar_tab_1" data-toggle="tab"> Users
                                    <span className="badge badge-danger">2</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;" data-target="#quick_sidebar_tab_2" data-toggle="tab"> Alerts
                                    <span className="badge badge-success">7</span>
                                </a>
                            </li>
                            <li className="dropdown">
                                <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown"> More
                                    <i className="fa fa-angle-down"></i>
                                </a>
                                <ul className="dropdown-menu pull-right">
                                    <li>
                                        <a href="javascript:;" data-target="#quick_sidebar_tab_3" data-toggle="tab">
                                            <i className="icon-bell"></i> Alerts </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" data-target="#quick_sidebar_tab_3" data-toggle="tab">
                                            <i className="icon-info"></i> Notifications </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" data-target="#quick_sidebar_tab_3" data-toggle="tab">
                                            <i className="icon-speech"></i> Activities </a>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <a href="javascript:;" data-target="#quick_sidebar_tab_3" data-toggle="tab">
                                            <i className="icon-settings"></i> Settings </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active page-quick-sidebar-chat" id="quick_sidebar_tab_1">
                                <div className="page-quick-sidebar-chat-users" data-rail-color="#ddd" data-wrapper-className="page-quick-sidebar-list">
                                    <h3 className="list-heading">Staff</h3>
                                    <ul className="media-list list-items">
                                        <li className="media">
                                            <div className="media-status">
                                                <span className="badge badge-success">8</span>
                                            </div>
                                            <img className="media-object" src="assets/layouts/layout/img/avatar3.jpg" alt="..." />
                                            <div className="media-body">
                                                <h4 className="media-heading">Bob Nilson</h4>
                                                <div className="media-heading-sub"> Project Manager </div>
                                            </div>
                                        </li>
                                        <li className="media">
                                            <img className="media-object" src="assets/layouts/layout/img/avatar1.jpg" alt="..." />
                                            <div className="media-body">
                                                <h4 className="media-heading">Nick Larson</h4>
                                                <div className="media-heading-sub"> Art Director </div>
                                            </div>
                                        </li>
                                        <li className="media">
                                            <div className="media-status">
                                                <span className="badge badge-danger">3</span>
                                            </div>
                                            <img className="media-object" src="assets/layouts/layout/img/avatar4.jpg" alt="..." />
                                            <div className="media-body">
                                                <h4 className="media-heading">Deon Hubert</h4>
                                                <div className="media-heading-sub"> CTO </div>
                                            </div>
                                        </li>
                                        <li className="media">
                                            <img className="media-object" src="assets/layouts/layout/img/avatar2.jpg" alt="..." />
                                            <div className="media-body">
                                                <h4 className="media-heading">Ella Wong</h4>
                                                <div className="media-heading-sub"> CEO </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <h3 className="list-heading">Customers</h3>
                                    <ul className="media-list list-items">
                                        <li className="media">
                                            <div className="media-status">
                                                <span className="badge badge-warning">2</span>
                                            </div>
                                            <img className="media-object" src="assets/layouts/layout/img/avatar6.jpg" alt="..." />
                                            <div className="media-body">
                                                <h4 className="media-heading">Lara Kunis</h4>
                                                <div className="media-heading-sub"> CEO, Loop Inc </div>
                                                <div className="media-heading-small"> Last seen 03:10 AM </div>
                                            </div>
                                        </li>
                                        <li className="media">
                                            <div className="media-status">
                                                <span className="label label-sm label-success">new</span>
                                            </div>
                                            <img className="media-object" src="assets/layouts/layout/img/avatar7.jpg" alt="..." />
                                            <div className="media-body">
                                                <h4 className="media-heading">Ernie Kyllonen</h4>
                                                <div className="media-heading-sub"> Project Manager,
                                                    <br /> SmartBizz PTL </div>
                                            </div>
                                        </li>
                                        <li className="media">
                                            <img className="media-object" src="assets/layouts/layout/img/avatar8.jpg" alt="..." />
                                            <div className="media-body">
                                                <h4 className="media-heading">Lisa Stone</h4>
                                                <div className="media-heading-sub"> CTO, Keort Inc </div>
                                                <div className="media-heading-small"> Last seen 13:10 PM </div>
                                            </div>
                                        </li>
                                        <li className="media">
                                            <div className="media-status">
                                                <span className="badge badge-success">7</span>
                                            </div>
                                            <img className="media-object" src="assets/layouts/layout/img/avatar9.jpg" alt="..." />
                                            <div className="media-body">
                                                <h4 className="media-heading">Deon Portalatin</h4>
                                                <div className="media-heading-sub"> CFO, H&D LTD </div>
                                            </div>
                                        </li>
                                        <li className="media">
                                            <img className="media-object" src="assets/layouts/layout/img/avatar10.jpg" alt="..." />
                                            <div className="media-body">
                                                <h4 className="media-heading">Irina Savikova</h4>
                                                <div className="media-heading-sub"> CEO, Tizda Motors Inc </div>
                                            </div>
                                        </li>
                                        <li className="media">
                                            <div className="media-status">
                                                <span className="badge badge-danger">4</span>
                                            </div>
                                            <img className="media-object" src="assets/layouts/layout/img/avatar11.jpg" alt="..." />
                                            <div className="media-body">
                                                <h4 className="media-heading">Maria Gomez</h4>
                                                <div className="media-heading-sub"> Manager, Infomatic Inc </div>
                                                <div className="media-heading-small"> Last seen 03:10 AM </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="page-quick-sidebar-item">
                                    <div className="page-quick-sidebar-chat-user">
                                        <div className="page-quick-sidebar-nav">
                                            <a href="javascript:;" className="page-quick-sidebar-back-to-list">
                                                <i className="icon-arrow-left"></i>Back</a>
                                        </div>
                                        <div className="page-quick-sidebar-chat-user-messages">
                                            <div className="post out">
                                                <img className="avatar" alt="" src="assets/layouts/layout/img/avatar3.jpg"  />
                                                <div className="message">
                                                    <span className="arrow"></span>
                                                    <a href="javascript:;" className="name">Bob Nilson</a>
                                                    <span className="datetime">20:15</span>
                                                    <span className="body"> When could you send me the report ? </span>
                                                </div>
                                            </div>
                                            <div className="post in">
                                                <img className="avatar" alt="" src="assets/layouts/layout/img/avatar2.jpg"  />
                                                <div className="message">
                                                    <span className="arrow"></span>
                                                    <a href="javascript:;" className="name">Ella Wong</a>
                                                    <span className="datetime">20:15</span>
                                                    <span className="body"> Its almost done. I will be sending it shortly </span>
                                                </div>
                                            </div>
                                            <div className="post out">
                                                <img className="avatar" alt="" src="assets/layouts/layout/img/avatar3.jpg" />
                                                <div className="message">
                                                    <span className="arrow"></span>
                                                    <a href="javascript:;" className="name">Bob Nilson</a>
                                                    <span className="datetime">20:15</span>
                                                    <span className="body"> Alright. Thanks! :) </span>
                                                </div>
                                            </div>
                                            <div className="post in">
                                                <img className="avatar" alt="" src="assets/layouts/layout/img/avatar2.jpg" />
                                                <div className="message">
                                                    <span className="arrow"></span>
                                                    <a href="javascript:;" className="name">Ella Wong</a>
                                                    <span className="datetime">20:16</span>
                                                    <span className="body"> You are most welcome. Sorry for the delay. </span>
                                                </div>
                                            </div>
                                            <div className="post out">
                                                <img className="avatar" alt="" src="assets/layouts/layout/img/avatar3.jpg" />
                                                <div className="message">
                                                    <span className="arrow"></span>
                                                    <a href="javascript:;" className="name">Bob Nilson</a>
                                                    <span className="datetime">20:17</span>
                                                    <span className="body"> No probs. Just take your time :) </span>
                                                </div>
                                            </div>
                                            <div className="post in">
                                                <img className="avatar" alt="" src="assets/layouts/layout/img/avatar2.jpg" />
                                                <div className="message">
                                                    <span className="arrow"></span>
                                                    <a href="javascript:;" className="name">Ella Wong</a>
                                                    <span className="datetime">20:40</span>
                                                    <span className="body"> Alright. I just emailed it to you. </span>
                                                </div>
                                            </div>
                                            <div className="post out">
                                                <img className="avatar" alt="" src="assets/layouts/layout/img/avatar3.jpg" />
                                                <div className="message">
                                                    <span className="arrow"></span>
                                                    <a href="javascript:;" className="name">Bob Nilson</a>
                                                    <span className="datetime">20:17</span>
                                                    <span className="body"> Great! Thanks. Will check it right away. </span>
                                                </div>
                                            </div>
                                            <div className="post in">
                                                <img className="avatar" alt="" src="assets/layouts/layout/img/avatar2.jpg" />
                                                <div className="message">
                                                    <span className="arrow"></span>
                                                    <a href="javascript:;" className="name">Ella Wong</a>
                                                    <span className="datetime">20:40</span>
                                                    <span className="body"> Please let me know if you have any comment. </span>
                                                </div>
                                            </div>
                                            <div className="post out">
                                                <img className="avatar" alt="" src="assets/layouts/layout/img/avatar3.jpg" />
                                                <div className="message">
                                                    <span className="arrow"></span>
                                                    <a href="javascript:;" className="name">Bob Nilson</a>
                                                    <span className="datetime">20:17</span>
                                                    <span className="body"> Sure. I will check and buzz you if anything needs to be corrected. </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="page-quick-sidebar-chat-user-form">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Type a message here..." />
                                                <div className="input-group-btn">
                                                    <button type="button" className="btn green">
                                                        <i className="icon-paper-clip"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane page-quick-sidebar-alerts" id="quick_sidebar_tab_2">
                                <div className="page-quick-sidebar-alerts-list">
                                    <h3 className="list-heading">General</h3>
                                    <ul className="feeds list-items">
                                        <li>
                                            <div className="col1">
                                                <div className="cont">
                                                    <div className="cont-col1">
                                                        <div className="label label-sm label-info">
                                                            <i className="fa fa-check"></i>
                                                        </div>
                                                    </div>
                                                    <div className="cont-col2">
                                                        <div className="desc"> You have 4 pending tasks.
                                                            <span className="label label-sm label-warning "> Take action
                                                                <i className="fa fa-share"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col2">
                                                <div className="date"> Just now </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="javascript:;">
                                                <div className="col1">
                                                    <div className="cont">
                                                        <div className="cont-col1">
                                                            <div className="label label-sm label-success">
                                                                <i className="fa fa-bar-chart-o"></i>
                                                            </div>
                                                        </div>
                                                        <div className="cont-col2">
                                                            <div className="desc"> Finance Report for year 2013 has been released. </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col2">
                                                    <div className="date"> 20 mins </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="col1">
                                                <div className="cont">
                                                    <div className="cont-col1">
                                                        <div className="label label-sm label-danger">
                                                            <i className="fa fa-user"></i>
                                                        </div>
                                                    </div>
                                                    <div className="cont-col2">
                                                        <div className="desc"> You have 5 pending membership that requires a quick review. </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col2">
                                                <div className="date"> 24 mins </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col1">
                                                <div className="cont">
                                                    <div className="cont-col1">
                                                        <div className="label label-sm label-info">
                                                            <i className="fa fa-shopping-cart"></i>
                                                        </div>
                                                    </div>
                                                    <div className="cont-col2">
                                                        <div className="desc"> New order received with
                                                            <span className="label label-sm label-success"> Reference Number: DR23923 </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col2">
                                                <div className="date"> 30 mins </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col1">
                                                <div className="cont">
                                                    <div className="cont-col1">
                                                        <div className="label label-sm label-success">
                                                            <i className="fa fa-user"></i>
                                                        </div>
                                                    </div>
                                                    <div className="cont-col2">
                                                        <div className="desc"> You have 5 pending membership that requires a quick review. </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col2">
                                                <div className="date"> 24 mins </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col1">
                                                <div className="cont">
                                                    <div className="cont-col1">
                                                        <div className="label label-sm label-info">
                                                            <i className="fa fa-bell-o"></i>
                                                        </div>
                                                    </div>
                                                    <div className="cont-col2">
                                                        <div className="desc"> Web server hardware needs to be upgraded.
                                                            <span className="label label-sm label-warning"> Overdue </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col2">
                                                <div className="date"> 2 hours </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="javascript:;">
                                                <div className="col1">
                                                    <div className="cont">
                                                        <div className="cont-col1">
                                                            <div className="label label-sm label-default">
                                                                <i className="fa fa-briefcase"></i>
                                                            </div>
                                                        </div>
                                                        <div className="cont-col2">
                                                            <div className="desc"> IPO Report for year 2013 has been released. </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col2">
                                                    <div className="date"> 20 mins </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                    <h3 className="list-heading">System</h3>
                                    <ul className="feeds list-items">
                                        <li>
                                            <div className="col1">
                                                <div className="cont">
                                                    <div className="cont-col1">
                                                        <div className="label label-sm label-info">
                                                            <i className="fa fa-check"></i>
                                                        </div>
                                                    </div>
                                                    <div className="cont-col2">
                                                        <div className="desc"> You have 4 pending tasks.
                                                            <span className="label label-sm label-warning "> Take action
                                                                <i className="fa fa-share"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col2">
                                                <div className="date"> Just now </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="javascript:;">
                                                <div className="col1">
                                                    <div className="cont">
                                                        <div className="cont-col1">
                                                            <div className="label label-sm label-danger">
                                                                <i className="fa fa-bar-chart-o"></i>
                                                            </div>
                                                        </div>
                                                        <div className="cont-col2">
                                                            <div className="desc"> Finance Report for year 2013 has been released. </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col2">
                                                    <div className="date"> 20 mins </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="col1">
                                                <div className="cont">
                                                    <div className="cont-col1">
                                                        <div className="label label-sm label-default">
                                                            <i className="fa fa-user"></i>
                                                        </div>
                                                    </div>
                                                    <div className="cont-col2">
                                                        <div className="desc"> You have 5 pending membership that requires a quick review. </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col2">
                                                <div className="date"> 24 mins </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col1">
                                                <div className="cont">
                                                    <div className="cont-col1">
                                                        <div className="label label-sm label-info">
                                                            <i className="fa fa-shopping-cart"></i>
                                                        </div>
                                                    </div>
                                                    <div className="cont-col2">
                                                        <div className="desc"> New order received with
                                                            <span className="label label-sm label-success"> Reference Number: DR23923 </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col2">
                                                <div className="date"> 30 mins </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col1">
                                                <div className="cont">
                                                    <div className="cont-col1">
                                                        <div className="label label-sm label-success">
                                                            <i className="fa fa-user"></i>
                                                        </div>
                                                    </div>
                                                    <div className="cont-col2">
                                                        <div className="desc"> You have 5 pending membership that requires a quick review. </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col2">
                                                <div className="date"> 24 mins </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col1">
                                                <div className="cont">
                                                    <div className="cont-col1">
                                                        <div className="label label-sm label-warning">
                                                            <i className="fa fa-bell-o"></i>
                                                        </div>
                                                    </div>
                                                    <div className="cont-col2">
                                                        <div className="desc"> Web server hardware needs to be upgraded.
                                                            <span className="label label-sm label-default "> Overdue </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col2">
                                                <div className="date"> 2 hours </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="javascript:;">
                                                <div className="col1">
                                                    <div className="cont">
                                                        <div className="cont-col1">
                                                            <div className="label label-sm label-info">
                                                                <i className="fa fa-briefcase"></i>
                                                            </div>
                                                        </div>
                                                        <div className="cont-col2">
                                                            <div className="desc"> IPO Report for year 2013 has been released. </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col2">
                                                    <div className="date"> 20 mins </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="tab-pane page-quick-sidebar-settings" id="quick_sidebar_tab_3">
                                <div className="page-quick-sidebar-settings-list">
                                    <h3 className="list-heading">General Settings</h3>
                                    <ul className="list-items borderless">
                                        <li> Enable Notifications
                                            <input type="checkbox" className="make-switch" defaultValue="checked" data-size="small" data-on-color="success" data-on-text="ON" data-off-color="default" data-off-text="OFF" /> </li>
                                        <li> Allow Tracking
                                            <input type="checkbox" className="make-switch" data-size="small" data-on-color="info" data-on-text="ON" data-off-color="default" data-off-text="OFF" /> </li>
                                        <li> Log Errors
                                            <input type="checkbox" className="make-switch" defaultValue="checked" data-size="small" data-on-color="danger" data-on-text="ON" data-off-color="default" data-off-text="OFF" /> </li>
                                        <li> Auto Sumbit Issues
                                            <input type="checkbox" className="make-switch" data-size="small" data-on-color="warning" data-on-text="ON" data-off-color="default" data-off-text="OFF" /> </li>
                                        <li> Enable SMS Alerts
                                            <input type="checkbox" className="make-switch" defaultValue="checked" data-size="small" data-on-color="success" data-on-text="ON" data-off-color="default" data-off-text="OFF" /> </li>
                                    </ul>
                                    <h3 className="list-heading">System Settings</h3>
                                    <ul className="list-items borderless">
                                        <li> Security Level
                                            <select className="form-control input-inline input-sm input-small">
                                                <option value="1">Normal</option>
                                                <option value="2" defaultValue='selected'>Medium</option>
                                                <option value="e">High</option>
                                            </select>
                                        </li>
                                        <li> Failed Email Attempts
                                            <input className="form-control input-inline input-sm input-small" defaultValue="5" /> </li>
                                        <li> Secondary SMTP Port
                                            <input className="form-control input-inline input-sm input-small" defaultValue="3560" /> </li>
                                        <li> Notify On System Error
                                            <input type="checkbox" className="make-switch" defaultValue="checked" data-size="small" data-on-color="danger" data-on-text="ON" data-off-color="default" data-off-text="OFF" /> </li>
                                        <li> Notify On SMTP Error
                                            <input type="checkbox" className="make-switch" defaultValue="checked" data-size="small" data-on-color="warning" data-on-text="ON" data-off-color="default" data-off-text="OFF" /> </li>
                                    </ul>
                                    <div className="inner-content">
                                        <button className="btn btn-success">
                                            <i className="icon-settings"></i> Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END QUICK SIDEBAR */}
            </div>
            {/* END CONTAINER */}
            {/* BEGIN FOOTER */}
            <div className="page-footer">
                <div className="page-footer-inner"> 2016 &copy; Metronic Theme By
                    <a target="_blank" href="http://keenthemes.com">Keenthemes</a> &nbsp;|&nbsp;
                    <a href="http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes" title="Purchase Metronic just for 27$ and get lifetime updates for free" target="_blank">Purchase Metronic!</a>
                </div>
                <div className="scroll-to-top">
                    <i className="icon-arrow-up"></i>
                </div>
            </div>
            {/* END FOOTER */}
        
        {/* BEGIN QUICK NAV */}
        <nav className="quick-nav">
            <a className="quick-nav-trigger" href="#0">
                <span aria-hidden="true"></span>
            </a>
            <ul>
                <li>
                    <a href="https://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes" target="_blank" className="active">
                        <span>Purchase Metronic</span>
                        <i className="icon-basket"></i>
                    </a>
                </li>
                <li>
                    <a href="https://themeforest.net/item/metronic-responsive-admin-dashboard-template/reviews/4021469?ref=keenthemes" target="_blank">
                        <span>Customer Reviews</span>
                        <i className="icon-users"></i>
                    </a>
                </li>
                <li>
                    <a href="http://keenthemes.com/showcast/" target="_blank">
                        <span>Showcase</span>
                        <i className="icon-user"></i>
                    </a>
                </li>
                <li>
                    <a href="http://keenthemes.com/metronic-theme/changelog/" target="_blank">
                        <span>Changelog</span>
                        <i className="icon-graph"></i>
                    </a>
                </li>
            </ul>
            <span aria-hidden="true" className="quick-nav-bg"></span>
        </nav>
        <div className="quick-nav-overlay"></div>
        {/* END QUICK NAV */}
        </div>
    );
    }
}

export default App;
