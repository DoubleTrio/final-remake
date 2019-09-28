import React from 'react';
import { ActivityIndicator, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRestaurantRequest } from '../redux/actions';
import R from '../styles/index';
import CardSectionList from '../components/presentational/CardSectionList';
import ScreenContainer from '../components/presentational/ScreenContainer';
import DismissKeyboard from '../components/presentational/DismissKeyboard';
import PaddingWrapper from '../components/presentational/PaddingWrapper';
import TopPaddingWrapper from '../components/presentational/TopPaddingWrapper';
import ErrorText from '../components/presentational/ErrorText';

class RestaurantScreen extends React.Component {

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
  
  componentDidUpdate(prevProps) {
    if (this.props.currentLocation.name !== prevProps.currentLocation.name 
      || this.props.entityType !== prevProps.entityType
      && this.props.currentLocation.name !== 'None'
    ) this.props.fetchRestaurantRequest(this.props.currentLocation.name, this.props.entityType);
  }

  navigateToDetailsScreen = (restaurant, id) => {
    this.props.navigation.navigate('Details', { restaurant, id });
  }
  
  render() {
    const { restaurants, currentLocation } = this.props;
    const { name } = currentLocation;
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
};

const mapStateToProps = state => ({
  restaurants: state.restaurantData,
  entityType: state.entityType,
  currentLocation: state.currentLocation,
});

export default connect(mapStateToProps, { fetchRestaurantRequest })(RestaurantScreen);