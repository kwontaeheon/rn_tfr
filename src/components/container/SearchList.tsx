import * as React from 'react';
import { TouchableOpacity, Text, FlatList, StyleSheet } from 'react-native';
import { SearchData } from '../../redux/searchData';

import { connect } from 'react-redux';


interface Props { searchData: Array<SearchData>; }

function SearchList({ searchData }: Props) {
    return (
        <FlatList data={searchData} renderItem={_renderItem} onScrollEndDrag={_loadMoreSearchData} style={styles.listContainer} />
    );
}

function _loadMoreSearchData() {
    
}

function _renderItem({ item }: { item: SearchData }) {
    return (
        <TouchableOpacity style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.diary}</Text>
            {/* <Text style={styles.subtitle}>{item.class}</Text> */}
        </TouchableOpacity>
    );
}

export default connect(function ({ searchData }: Props) { return { searchData }; })(SearchList);

const styles = StyleSheet.create({
    listContainer: {
        top: 20,
        flex: 1,
    },
    item: {
        height: 150,
        borderBottomWidth: 1,
        // borderTopWidth: 1,
        borderColor: '#FFFFFF',
        padding: 10
    },
    title: {
        fontSize: 15,
        
        color: '#FFFFFF',
        // fontWeight: 'bold'
    },
    subtitle: {
        left: 10,
        color: '#FFFFFF',
        fontSize: 15
    }
});
