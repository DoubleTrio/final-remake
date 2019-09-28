import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import R from '../../styles/index';
import EntityTypeIcon from '../presentational/EntityTypeIcon';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TopPaddingWrapper from '../presentational/TopPaddingWrapper';
import { connect } from 'react-redux';
import { updateEntityType } from '../../redux/actions';

const styles = StyleSheet.create({
    container: {
        height: R.iconContainerWidth * 1.3 * 2.5, 
        width: '100%', 
        backgroundColor: R.colors.light, 
        borderColor: R.colors.border, 
        borderBottomWidth: R.sBorder * 2, 
        borderTopWidth: R.sBorder * 2,
        alignItems: 'center',
        flexDirection: 'row',
    },
    icon: {
        fontSize: R.iconSize,
        alignSelf: 'center',
        color: R.colors.light,
    },

    row: {
        justifyContent: 'space-around',
        marginVertical: R.paddings.s,
    },
});

const iconList = [
    {
        icon: <FontAwesome5 name={'city'} style={styles.icon}/>,
        text: 'City',
    },
    {
        icon: <FontAwesome5 name={'subway'} style={styles.icon}/>,
        text: 'Metro',
    },
    {
        icon: <FontAwesome5 name={'landmark'} style={styles.icon}/>,
        text: 'Landmark',
    },
    {
        icon: <FontAwesome name={'group'} style={styles.icon}/>,
        text: 'Group',
    },
    {
        icon: <MaterialIcons name={'landscape'} style={styles.icon}/>,
        text: 'Zone',
    },
    {
        icon: <MaterialIcons name={'collections'} style={styles.icon}/>,
        text: 'Subzone',
    },
];

class EntityIconList extends React.Component {

    static propTypes = {
        updateEntityType: PropTypes.func.isRequired,
        entityType: PropTypes.string.isRequired,
    }

    updateEntityType = t => {
        this.props.updateEntityType(t)
    }

    render() {
        const { entityType } = this.props
        return (
            <TopPaddingWrapper>
                <View style={styles.container}>
                    <FlatList
                        data={iconList}
                        renderItem={({ item }) => <EntityTypeIcon isSelected={item.text.toLowerCase() === entityType} icon={item.icon} text={item.text} onSelect={this.updateEntityType} />}
                        keyExtractor={item => item.text}
                        numColumns={3}
                        columnWrapperStyle={styles.row}
                        extraData={entityType}
                    />
                </View>
            </TopPaddingWrapper>
        );
    }
};

const mapStateToProps = state => ({
    entityType: state.entityType,
});

export default connect(mapStateToProps, { updateEntityType })(EntityIconList);
