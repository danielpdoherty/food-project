import React, { Component } from 'react';

class MapDetail extends Component {
  render(){
    if(this.props.selectedVideo == null){
      return(<div>Loading ... </div>)
    }
    const url = 'https://www.youtube.com/embed/' + this.props.selectedVideo.id.videoId;
    return(
      <div className="videoDetail col-md-8">
        <div id="map"></div>
        <div style="display: none">
          <div id="info-content">
            <table>
              <tr id="iw-url-row" className="iw_table_row">
                <td id="iw-icon" className="iw_table_icon"></td>
                <td id="iw-url"></td>
              </tr>
              <tr id="iw-address-row" className="iw_table_row">
                <td className="iw_attribute_name">Address:</td>
                <td id="iw-address"></td>
              </tr>
              <tr id="iw-phone-row" className="iw_table_row">
                <td className="iw_attribute_name">Telephone:</td>
                <td id="iw-phone"></td>
              </tr>
              <tr id="iw-rating-row" className="iw_table_row">
                <td className="iw_attribute_name">Rating:</td>
                <td id="iw-rating"></td>
              </tr>
              <tr id="iw-website-row" className="iw_table_row">
                <td className="iw_attribute_name">Website:</td>
                <td id="iw-website"></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default MapDetail;
