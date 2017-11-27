import React from 'react';
import { Tooltip } from 'reactstrap';
import pagePath from "../../pagePath"
import { Link } from "react-router"

class TitleWithTooltip extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            tooltipOpen: false
        };
    }

    toggle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }

    render() {
        return (
            <h6 key={"header-" + this.props.id} className="item-title" id={'Tooltip-' + this.props.id}>
                <Link to={pagePath.SingleCourse + this.props.url}>
                    {this.props.title}
                </Link>
            </h6>,
            <Tooltip key={"tooltip-" + this.props.id} placement={this.props.placement} isOpen={this.state.tooltipOpen} target={'Tooltip-' + this.props.id} toggle={this.toggle}>
                {this.props.title}
            </Tooltip>
        )
    }
}

export default TitleWithTooltip;