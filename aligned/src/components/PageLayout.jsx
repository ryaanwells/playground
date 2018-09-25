import React, { Component } from 'react';
import './PageLayout.css';

class PageLayout extends Component {
    
    createClassNames(component, open){
        return component + (open ? " open" : "");
    }
    
    render() {
        const showSidebar = this.props.showSidebar;
        const pageContentClassName = this.createClassNames("pageContent", showSidebar);
        const sidebarContentClassName = this.createClassNames("sidebarContent", showSidebar);
        return (
            <div className="container" >
                <div className={pageContentClassName}>{this.props.pageContent}</div>
                { showSidebar &&
                <div className={sidebarContentClassName}>
                    <div className="close" onClick={this.props.close}>x</div>
                    <div className="content">
                        {this.props.sidebarContent}
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default PageLayout;