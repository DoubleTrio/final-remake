import React from 'react';
import { ScrollView } from 'react-native';
import ScreenContainer from '../components/presentational/ScreenContainer';
import PropTypes from 'prop-types';
import PaddingWrapper from '../components/presentational/PaddingWrapper';
import GalleryList from '../components/presentational/GalleryList';
import { connect } from 'react-redux';
import ReviewsList from '../components/presentational/ReviewsList';

class DetailsScreen extends React.Component {
  
  static navigationOptions = ({navigation}) => ({
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
    const { cardData, extendedData } = restuarantById;
    let { photos, reviews } = extendedData;
    return (
      <ScrollView>
        <ScreenContainer>
          <PaddingWrapper>
            {photos.length >= 1 && (
              <GalleryList photos={photos}/>
            )}
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