import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import R from '../../styles/index';

export default class EntityTypeIcon extends React.Component {
    
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.isSelected !== nextProps.isSelected; 
    }

    render() {
        const { onSelect, icon, text, isSelected } = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity style={[styles.iconContainer, isSelected ? styles.border : {}]} activeOpacity={0.5} onPress={() => onSelect(text.toLowerCase())}>
                    {icon}
                </TouchableOpacity>
                <Text style={styles.centerText}>{text}</Text>
            </View>
        )
    }
}

EntityTypeIcon.propTypes = {
    onSelect: PropTypes.func.isRequired,
    icon: PropTypes.node,
    text: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
    container: {
        width: R.iconContainerWidth, 
        aspectRatio: 5/6.5, 
        textAlign: 'center',
    },

    iconContainer: {
        backgroundColor: R.colors.secondary, 
        width: R.iconContainerWidth, 
        aspectRatio: 1/1, 
        justifyContent: 'center', 
        borderRadius: R.roundBorderRadius,
        marginBottom: R.paddings.s,
    },

    border: {
        borderWidth: R.sBorder * 3, 
        borderColor: R.colors.primary,
    },

    centerText: {
        textAlign: 'center',
        fontSize: R.fontSizes.ms,
    },
});
