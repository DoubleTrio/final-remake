const transfromUserData = ({ foodie_color, foodie_level, name, profile_image }) => (
  {
    foodieColor: `#${foodie_color}`,
    foodieLevel: foodie_level,
    name,
    profile: profile_image,
  }
)

const transformPhotoData = ({ photo }) => {
  const { friendly_time, id, thumb_url } = photo;
  return {
    friendlyTime: friendly_time,
    id: `${id}`,
    thumbUrl: thumb_url,
  }
}

const transformReviewData = ({ review }) => {
  const { rating, id, rating_color, review_text, review_time_friendly, user, likes } = review;
  return {
    rating: rating.toFixed(1),
    id: `${id}`,
    ratingColor: `#${rating_color}`,
    reviewText: review_text,
    reviewTime: review_time_friendly,
    user: transfromUserData(user),
    likes,
  }
}

export const transformRestaurantData = ({ restaurant }) => {
  let {
    id,
    user_rating,
    name, 
    location,
    highlights, thumb,
    all_reviews,
    phone_numbers,
    cuisines,
    timings,
    currency,
    average_cost_for_two,
    offers,
    photos,
    has_online_delivery,
    is_delivering_now,
    is_table_reservation_supported,
    price_range,
    has_table_booking,
  } = restaurant;

  if (typeof photos === 'object') {
    photos = photos.map(transformPhotoData);
  }

  else {
    photos = []
  }

  const { rating_color, aggregate_rating } = user_rating;
  const { locality, address } = location;
  return {
    id,
    locality,
    photos,
    reviews: all_reviews.reviews.map(transformReviewData),
    cardData: {
        name,
        cuisines,
        thumb,
        color: `#${rating_color}`,
        rating: parseFloat(aggregate_rating).toFixed(1),
        priceRange: price_range,
    },
    extendedData: {
        userRating: user_rating,
        phoneNumbers: phone_numbers,
        averageCostForTwo: average_cost_for_two,
        hasOnlineDelivery: has_online_delivery,
        isDeliveringNow: is_delivering_now,
        hasTableBooking: has_table_booking,
        tableReservationSupported: is_table_reservation_supported,
        highlights,
        timings,
        currency,
        offers,
        address,
    }
  };
};

