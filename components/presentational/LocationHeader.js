import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import R from '../../styles/index';
import PaddingWrapper from './PaddingWrapper';
import Dash from './Dash';

class LocationHeader extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.locationName !== nextProps.locationName;
    }

    render() {
        const { locationName, toggleSearch } = this.props;
        return (
            <View style={styles.container}>
                <PaddingWrapper>
                    <TouchableOpacity activeOpacity={0.5} onPress={toggleSearch}>
                        <Text style={styles.locationText}>{locationName}</Text>
                    </TouchableOpacity>
                    <Dash />
                </PaddingWrapper>
            </View>
        );
    }
};

LocationHeader.propTypes = {
    locationName: PropTypes.string.isRequired,
    toggleSearch: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: R.colors.light,
        width: '100%',
        height: '15%',
        paddingVertical: R.paddings.s,
        borderColor: R.colors.border,
        borderBottomWidth: R.sBorder * 2 
    },

    locationText: {
        fontSize: R.fontSizes.header,
        fontFamily: R.fonts.normalFont,
    },
});

export default LocationHeader;