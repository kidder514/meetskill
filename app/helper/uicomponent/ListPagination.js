import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import string from "../../String"

export default class Example extends React.Component {
    constructor(props){
        super(props);
        this.renderItems = this.renderItems.bind(this);
    }

    renderItems(startWith){
        var PaginationItems = [];
        for (let i = 0; i < 7; i++){
            PaginationItems.push(
                <PaginationItem key={startWith + i} active={((startWith + i) == this.props.currentPage)}>
                    <PaginationLink href={"?p=" + (startWith + i)}>
                        {startWith + i}
                    </PaginationLink>
                </PaginationItem>
            );
        }

        return PaginationItems;
    }

    render() {
        const { currentPage, totalPages} = this.props;
        var startWith;
        if (currentPage <= (totalPages - 3 ) && currentPage >= 4 ){
            startWith = currentPage - 3;
        } else{ 
            if (currentPage <= 4){
                startWith = 1;
            }
            if (currentPage >= (totalPages - 3)){
                startWith = totalPages - 6;
            }
        }

        return ([
            <div key="total-page" className="total-page clearfix">
                {currentPage + " " + string.Of + " " + totalPages + " "+ string.PagesInTotal}
            </div>,
            <Pagination key="pagination" className="clearfix">
                <PaginationItem disabled={(currentPage == 1)}>
                    <PaginationLink previous href={(currentPage != 1) ? "?p=" + (currentPage - 1) : "#"} />
                </PaginationItem>
                {this.renderItems(startWith)}
                <PaginationItem disabled={(currentPage == totalPages)}>
                    <PaginationLink next href={(currentPage != totalPages) ? "?p=" + (currentPage + 1) : "#"} />
                </PaginationItem>
            </Pagination>
        ]);
    }
}