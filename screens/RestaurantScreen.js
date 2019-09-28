import React from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import ScreenContainer from '../components/presentational/ScreenContainer';
import DismissKeyboard from '../components/presentational/DismissKeyboard';
import PaddingWrapper from '../components/presentational/PaddingWrapper';
import { connect } from 'react-redux';
import CardSectionList from '../components/container/CardSectionList';
import R from '../styles/index';
import { fetchRestaurantRequest } from '../redux/actions';
import TopPaddingWrapper from '../components/presentational/TopPaddingWrapper';
import ErrorText from '../components/presentational/ErrorText';

class RestaurantScreen extends React.Component {

  state = {
    q: ''
  }

  static navigationOptions = {
    headerTitle: 'Restaurants',
  }

  static propTypes = {
    fetchRestaurantRequest: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
    restaurants: PropTypes.object.isRequired,
    fetchRestaurantRequest: PropTypes.func.isRequired,
    entityType: PropTypes.string.isRequired,
    currentLocation: PropTypes.object.isRequired, 
  }

  componentDidMount() {
    this.props.fetchRestaurantRequest(this.props.currentLocation.name, this.props.entityType)
  }
  
  // componentDidUpdate(prevProps) {
  //   console.log(prevProps.currentLocation.name, this.props.currentLocation.name)
  //   console.log(prevProps.entityType, this.props.entityType)
  //   if (this.props.currentLocation.name !== prevProps.currentLocation.name || this.props.entityType !== prevProps.entityType) this.props.fetchRestaurantRequest(this.props.currentLocation.name, this.props.entityType);
  // }

  updateSearch = q => {
    this.setState({ q })
  }

  

  navigateToDetailsScreen = (restaurant, id) => {
    this.props.navigation.navigate('Details', { restaurant, id });
  }
  
  render() {
    const { restaurants } = this.props;
    const { data, success, waiting, error } = restaurants;
    return (
      <DismissKeyboard>

        <ScreenContainer>
        <ScrollView>
          <PaddingWrapper>
            <TopPaddingWrapper>
            {waiting && (
                <ActivityIndicator size="large" color={R.colors.secondary}/>
            )}

            {error && (
                <ErrorText text={error}/>
            )}

            {success && data.length >= 1 && (
                <CardSectionList navigateToDetailsScreen={this.navigateToDetailsScreen} rawData={data} />
            )}
            </TopPaddingWrapper>
          </PaddingWrapper>
          </ScrollView>
        </ScreenContainer>
      </DismissKeyboard>
    );
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurantData,
  entityType: state.entityType,
  currentLocation: state.currentLocation,
})

export default connect(mapStateToProps, { fetchRestaurantRequest })(RestaurantScreen)