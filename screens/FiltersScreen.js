import React from 'react';
import { StyleSheet, Text, Animated, ActivityIndicator, TouchableOpacity } from 'react-native';
import ScreenContainer from '../components/presentational/ScreenContainer';
import DismissKeyboard from '../components/presentational/DismissKeyboard';
import PropTypes from 'prop-types';
import LocationHeader from '../components/presentational/LocationHeader';
import R from '../styles/index';
import LocationFlatList from '../components/presentational/LocationFlatList';
import PaddingWrapper from '../components/presentational/PaddingWrapper';
import SectionHeaderContainer from '../components/presentational/SectionHeaderContainer';
import SectionHeaderText from '../components/presentational/SectionHeaderText';
import SearchBar from '../components/container/SearchBar';
import { fetchLocationsRequest, updateCurrentLocation, clearLocationResults } from '../redux/actions';
import { connect } from 'react-redux';
import TopPaddingWrapper from '../components/presentational/TopPaddingWrapper';
import ConfirmButton from '../components/presentational/ConfirmButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Row from '../components/presentational/Row';
import EntityIconList from '../components/container/EntityIconList';
import ErrorText from '../components/presentational/ErrorText';

let isHidden = true

class FiltersScreen extends React.Component {
  state = {
    animatedValue: new Animated.Value(R.popUpView),
    selectedLocation: {
      id: -1
    },
    q: '',
  }

  static propTypes = {
    fetchLocationsRequest: PropTypes.func.isRequired,
    locationData: PropTypes.object.isRequired,
    setLocation: PropTypes.object.isRequired,
    updateCurrentLocation: PropTypes.func.isRequired,
  }

  static navigationOptions = {
    headerTitle: 'Filters',
  }

  updateSearch = q => {
    this.setState({ q })
  }

  fetchLocations = () => {
    if (this.state.q.length >= 3) this.props.fetchLocationsRequest(this.state.q)
  }

  updateCurrentLocation = () => {
    this.props.updateCurrentLocation(this.state.selectedLocation)
    this.openSubView()
    this.setState({q: '', selectedLocation: {id: -1}})
    this.props.clearLocationResults()
  }


  handleLocationSelection = (id) => {
    this.setState({
      selectedLocation: this.props.locationData.data
        .find(location => location.id === id)
    })
  }

  openSubView = () => {
    let toValue = R.popUpView

    if (isHidden) toValue = 0

    Animated.spring(
      this.state.animatedValue,
      {
        toValue: toValue,
        velocity: 3,
        tension: 2,
        friction: 8,
        useNativeDriver: true,
      }
    ).start()

    isHidden = !isHidden
  }

  render() {
    const { locationData, setLocation } = this.props;
    const { data, waiting, success, error } = locationData;
    const { name } = setLocation
    return (
      <DismissKeyboard>
        <ScreenContainer>
          <LocationHeader locationName={name} toggleSearch={this.openSubView}/>
          <EntityIconList />
          <Animated.View
            style={[styles.subView,
            {transform: [{translateY: this.state.animatedValue}]}]}
          >
            <ConfirmButton isActive={this.state.selectedLocation.id === -1 ? false : true} onConfirm={this.updateCurrentLocation}/>
            <SectionHeaderContainer>
              <Row>
                <SectionHeaderText text={'Search by Cities'} />
                <TouchableOpacity activeOpacity={0.5} onPress={this.openSubView} style={styles.row}>
                  <AntDesign 
                      name={'down'}
                      color={R.colors.primary}
                      size={R.iconSize}
                      style={styles.downIcon}
                  />
                </TouchableOpacity>
              </Row>
            </SectionHeaderContainer>
            <PaddingWrapper>
              <TopPaddingWrapper>
                <SearchBar q={this.state.q} updateSearch={this.updateSearch} fetchFunc={this.fetchLocations}/>
              </TopPaddingWrapper>

              {success && data.length >= 1 && (
                <LocationFlatList locations={data} handleLocationSelection={this.handleLocationSelection} currentSelection={this.state.selectedLocation.id}/>
              )}

              {waiting && (
                <TopPaddingWrapper>
                  <ActivityIndicator size="large" color={R.colors.secondary}/>
                </TopPaddingWrapper>
              )}

              {error && (
                <TopPaddingWrapper>
                  <ErrorText text={error}/>
                </TopPaddingWrapper>
              )}
              
            </PaddingWrapper>
          </Animated.View>
        </ScreenContainer>
      </DismissKeyboard>
    );
  }
}

const styles = StyleSheet.create({
  subView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: R.colors.light,
    height: R.popUpView,
    zIndex: 2,
  },

  downIcon: {
    alignSelf: 'center', 
    paddingLeft: R.paddings.m,
    color: R.colors.primary,
  },

  row: {
    flexDirection: 'row',
  },
});

mapStateToProps = state => ({
  locationData: state.locationData,
  setLocation: state.currentLocation,
})

export default connect(mapStateToProps, { fetchLocationsRequest, updateCurrentLocation, clearLocationResults })(FiltersScreen)