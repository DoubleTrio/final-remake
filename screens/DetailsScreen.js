import React from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReviewsList from '../components/presentational/ReviewsList';
import RestaurantDetails from '../components/presentational/RestaurantDetails';
import PaddingWrapper from '../components/presentational/PaddingWrapper';
import GalleryList from '../components/presentational/GalleryList';
import ScreenContainer from '../components/presentational/ScreenContainer';

class DetailsScreen extends React.Component {
  
  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('restaurant')
  })

  static propTypes = {
    navigation: PropTypes.object.isRequired,
    restaurantData: PropTypes.object.isRequired,
  }

  render() {
    const { restaurantData, navigation } = this.props;
    const selectedId = navigation.getParam('id');
    const restuarantById = restaurantData.data.find(restuarant => restuarant.id === selectedId);
    const { cardData, extendedData, photos, reviews } = restuarantById;
    return (
      <ScrollView>
        <ScreenContainer>
          <PaddingWrapper>
            {photos.length >= 1 && (
              <GalleryList photos={photos}/>
            )}
            <RestaurantDetails cardData={cardData} extendedData={extendedData} needsMargin={reviews.length <= 0}/>
            {reviews.length >= 1 && (
              <ReviewsList reviews={reviews}/>
            )}
          </PaddingWrapper>
        </ScreenContainer>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  restaurantData: state.restaurantData,
});

export default connect(mapStateToProps)(DetailsScreen)