import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBand } from '../actions/bands'
import BandInput from '../components/BandInput'
import Band from '../components/Band'


class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band, id) => <Band key={id} name={band.name} />)

  render() {
    return(
      <div className="container">
        <BandInput addBand={this.props.addBand} />
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bands: state.bands
});

export default connect(mapStateToProps, { addBand })(BandsContainer);
