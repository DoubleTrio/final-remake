import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import R from '../../styles/index';
import { moderateScale } from '../../styles/scale';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Row from '../presentational/Row';
import { connect } from 'react-redux';
import { fetchRestaurantRequest } from '../../redux/actions';

class SearchBar extends React.Component {
  static propTypes = {
    fetchFunc: PropTypes.func.isRequired,
    updateSearch: PropTypes.func.isRequired,
    q: PropTypes.string.isRequired,
  }

  render() {
    const { updateSearch, fetchFunc, q } = this.props
    return (
      <Row>
        <TextInput style={[styles.textInput, styles.common]} value={q} onChangeText={updateSearch}/>
        <TouchableOpacity style={[styles.searchButton, styles.common]} activeOpacity={0.5} onPress={fetchFunc}>
          <FontAwesome       
            name={"search"}
            size={R.iconSize}
            color={R.colors.primary}
          />
        </TouchableOpacity>
      </Row>
    );
  }
}

const styles = StyleSheet.create({
  common: {
    height: moderateScale(40),
    borderWidth: R.sBorder,
    borderRadius: R.sBorderRadius,
  },

  textInput: {
    borderColor: R.colors.border,
    paddingHorizontal: R.paddings.s,
    paddingVertical: R.paddings.s,
    fontSize: R.fontSizes.m,
    flex: 8,
    backgroundColor: R.colors.light,
  },

  searchButton: {
    flex: 1,
    backgroundColor: R.colors.secondary,
    borderColor: R.colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    padding: R.paddings.m,
  },
})

export default SearchBar;
