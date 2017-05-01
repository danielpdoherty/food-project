import React, { Component } from 'react';


class SearchBar extends Component {

  constructor(props){
    super(props)

    this.state = {
      input: ''
    }
  }



  initMap() {
   var google, countries, countryRestrict, onPlaceChanged, setAutocompleteCountry;
   var map = new google.maps.Map(document.getElementById('map'), {
      zoom: countries['us'].zoom,
      center: countries['us'].center,
      mapTypeControl: false,
      panControl: false,
      zoomControl: false,
      streetViewControl: false
    });

    var infoWindow = new google.maps.InfoWindow({
      content: document.getElementById('info-content')
    });

    var autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */ (
            document.getElementById('autocomplete')), {
          types: ['(regions)'],
          componentRestrictions: countryRestrict
        });
    var places = new google.maps.places.PlacesService(map);

    autocomplete.addListener('place_changed', onPlaceChanged);


    document.getElementById('country').addEventListener(
        'change', setAutocompleteCountry);
  }


  onPlaceChanged() {
    var autocomplete, map, search;
    var place = autocomplete.getPlace();
    if (place.geometry) {
      map.panTo(place.geometry.location);
      map.setZoom(15);
      search();
    } else {
      document.getElementById('autocomplete').placeholder = 'Enter a city';
    }
  }


  search() {
    var map, places,search,google,clearResults, clearMarkers, MARKER_PATH,markers,showInfoWindow,dropMarker,addResult;
    var search = {
      bounds: map.getBounds(),
      types: ['restaurant']
    };

    places.nearbySearch(search, function(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        clearResults();
        clearMarkers();

        for (var i = 0; i < results.length; i++) {
          var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
          var markerIcon = MARKER_PATH + markerLetter + '.png';

          markers[i] = new google.maps.Marker({
            position: results[i].geometry.location,
            animation: google.maps.Animation.DROP,
            icon: markerIcon
          });

          markers[i].placeResult = results[i];
          google.maps.event.addListener(markers[i], 'click', showInfoWindow);
          setTimeout(dropMarker(i), i * 100);
          addResult(results[i], i);
        }
      }
    });
  }

  clearMarkers() {
    var markers;
    for (var i = 0; i < markers.length; i++) {
      if (markers[i]) {
        markers[i].setMap(null);
      }
    }
    markers = [];
  }


  setAutocompleteCountry() {
    var autocomplete, map,countries, clearResults, clearMarkers;
    var country = document.getElementById('country').value;
    if (country === 'all') {
      autocomplete.setComponentRestrictions({'country': []});
      map.setCenter({lat: 15, lng: 0});
      map.setZoom(2);
    } else {
      autocomplete.setComponentRestrictions({'country': country});
      map.setCenter(countries[country].center);
      map.setZoom(countries[country].zoom);
    }
    clearResults();
    clearMarkers();
  }

  dropMarker(i) {
    var markers, map;
    return function() {
      markers[i].setMap(map);
    };
  }

  addResult(result, i) {
    var MARKER_PATH, google, markers;
    var results = document.getElementById('results');
    var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
    var markerIcon = MARKER_PATH + markerLetter + '.png';

    var tr = document.createElement('tr');
    tr.style.backgroundColor = (i % 2 === 0 ? '#F0F0F0' : '#FFFFFF');
    tr.onclick = function() {
      google.maps.event.trigger(markers[i], 'click');
    };

    var iconTd = document.createElement('td');
    var nameTd = document.createElement('td');
    var icon = document.createElement('img');
    icon.src = markerIcon;
    icon.setAttribute('class', 'placeIcon');
    icon.setAttribute('className', 'placeIcon');
    var name = document.createTextNode(result.name);
    iconTd.appendChild(icon);
    nameTd.appendChild(name);
    tr.appendChild(iconTd);
    tr.appendChild(nameTd);
    results.appendChild(tr);
  }

  clearResults() {
    var results = document.getElementById('results');
    while (results.childNodes[0]) {
      results.removeChild(results.childNodes[0]);
    }
  }


  showInfoWindow() {
    var places, google, infoWindow, map, buildIWContent;
    var marker = this;
    places.getDetails({placeId: marker.placeResult.place_id},
        function(place, status) {
          if (status !== google.maps.places.PlacesServiceStatus.OK) {
            return;
          }
          infoWindow.open(map, marker);
          buildIWContent(place);
        });
  }


  buildIWContent(place) {
    document.getElementById('iw-icon').innerHTML = '<img class="hotelIcon" ' +
        'src="' + place.icon + '"/>';
    document.getElementById('iw-url').innerHTML = '<b><a href="' + place.url +
        '">' + place.name + '</a></b>';
    document.getElementById('iw-address').textContent = place.vicinity;

    if (place.formatted_phone_number) {
      document.getElementById('iw-phone-row').style.display = '';
      document.getElementById('iw-phone').textContent =
          place.formatted_phone_number;
    } else {
      document.getElementById('iw-phone-row').style.display = 'none';
    }


    if (place.rating) {
      var ratingHtml = '';
      for (var i = 0; i < 5; i++) {
        if (place.rating < (i + 0.5)) {
          ratingHtml += '&#10025;';
        } else {
          ratingHtml += '&#10029;';
        }
      document.getElementById('iw-rating-row').style.display = '';
      document.getElementById('iw-rating').innerHTML = ratingHtml;
      }
    } else {
      document.getElementById('iw-rating-row').style.display = 'none';
    }


    if (place.website) {
      var hostnameRegexp;
      var fullUrl = place.website;
      var website = hostnameRegexp.exec(place.website);
      if (website === null) {
        website = 'http://' + place.website + '/';
        fullUrl = website;
      }
      document.getElementById('iw-website-row').style.display = '';
      document.getElementById('iw-website').textContent = website;
    } else {
      document.getElementById('iw-website-row').style.display = 'none';
    }
  }

  render(){
      return(
        <div className="search-bar">
          <div id="findhotels">
            Find restaurants in:
          </div>

          <div id="locationField">
            <input value={this.state.input} onChange={initMap()}  id="autocomplete" placeholder="Enter a city" type="text" />
          </div>

          <div id="controls">
            <select value={this.state.value} onChange={initMap()} id="country">
              <option value="all">All</option>
              <option value="au">Australia</option>
              <option value="br">Brazil</option>
              <option value="ca">Canada</option>
              <option value="fr">France</option>
              <option value="de">Germany</option>
              <option value="mx">Mexico</option>
              <option value="nz">New Zealand</option>
              <option value="it">Italy</option>
              <option value="za">South Africa</option>
              <option value="es">Spain</option>
              <option value="pt">Portugal</option>
              <option value="us" selected>U.S.A.</option>
              <option value="uk">United Kingdom</option>
            </select>
          </div>
        </div>
    )
    }
  }

export default SearchBar;
