import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import R from '../../styles/index';
import { moderateScale } from '../../styles/scale';

export default class LocationItem extends React.Component {
    
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.isSelected !== nextProps.isSelected
    }

    render() {
        const { location, handleLocationSelection, isSelected } = this.props;
        const { countryName, countryFlag, name, id } = location;
        return (
            <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress={() => handleLocationSelection(id)}>
                <View>
                    <Text style={[styles.bolded, isSelected ? styles.selectedColor : {}]}>{name}</Text>
                    <Text style={styles.greyed}>{countryName}</Text>
                </View>
                <Image
                    style={styles.flag}
                    source={{uri: countryFlag}} 
                />
            </TouchableOpacity>
        )
    }
} 

LocationItem.propTypes = {
    location: PropTypes.shape({
        countryFlag: PropTypes.string.isRequired,
        countryName: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired, 
    }),
    handleLocationSelection: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  container: {
      paddingVertical: R.paddings.s,
      width: '100%',
      flexDirection: 'row',
  },

  flag: {
    width: moderateScale(40),
    height: moderateScale(24),
    alignSelf: 'center',
    position: 'absolute',
    right: 3,
  },

  bolded: {
    fontSize: R.fontSizes.ms,
    fontWeight: 'bold',
  },

  selectedColor: {
      color: R.colors.selected,
  },

  greyed: {
    fontSize: R.fontSizes.ms,
    color: R.colors.border,
  },
});