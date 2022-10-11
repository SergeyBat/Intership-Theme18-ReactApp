import React from 'react';
import Line from './Line';
import Tile from './Tile'
import './DisplayType.scss'
import {connect} from "react-redux";
import {changeDisplayType} from "../../redux/actions/actions";

class DisplayType extends React.Component {
  constructor(props) {
    super(props)
    this.strokeActive = '#3C4146'
    this.strokeNotActive = '#E0E0E0'
  }

  render() {
    return (
      <div className='display-type'>
        {(this.props.display === "Tile")
          ? <button className='display-type__button' data-dispaly='activity'>
            <Tile fill={this.strokeActive}/>
          </button>
          : <button className='display-type__button' data-dispaly='notActivity'
                    onClick={e => {
                      this.props.changeDisplayType('Tile')
                      e.target.dataset.dispaly = 'activity'
                    }}
          >
            <Tile fill={this.strokeNotActive}/>
          </button>
        }
        {(this.props.display === "Line")
          ? <button className='display-type__button' data-dispaly='activity'>
            <Line fill={this.strokeActive}/>
          </button>
          : <button className='display-type__button' data-dispaly='notActivity'
                    onClick={e => {
                      this.props.changeDisplayType('Line')
                      e.target.dataset.dispaly = 'activity'
                    }}>
            <Line fill={this.strokeNotActive}/>
          </button>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    display: state.displayType.display
  }
}

const mapDispatchToProps = {
  changeDisplayType
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayType)