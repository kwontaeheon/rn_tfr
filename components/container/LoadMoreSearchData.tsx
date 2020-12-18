import * as React from 'react';
import { TouchableOpacity, Text, FlatList, StyleSheet } from 'react-native';
import { loadSearchData, SearchData } from '../../redux/searchData';
import { connect } from 'react-redux';
import { Component } from 'react';

interface Props { searchData: ReadonlyArray<SearchData>; }

class LoadMore extends Component {
    componentDidMount() {
        this.loadMoreData()
    }
    
    loadMoreData() {
        console.log('loadMoreData');
    }

    render() {
        return (
            <Text> more... </Text>
        )
    }
}

export function LoadMoreSearchData({ item }: { item: SearchData }) {
    console.log("어떻게 로드하는건지..")
    // dispatch(_loadMoreSearchData());
}

 function _loadMoreSearchData({ searchData }: Props) {
    return (<Text> 
         LoadMore!Text
        </Text>);
}

export default connect(function ({ searchData }: Props) { return { searchData }; })(_loadMoreSearchData);






// const apiMiddleware = ({ dispatch }) => next => action => {
//   next(action);

//   if (action.type !== API) return;

//   const {
//     url,
//     method,
//     data,
//     accessToken,
//     onSuccess,
//     onFailure,
//     label,
//     headers
//   } = action.payload;
//   const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data";

//   // axios default configs
//   axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || "";
//   axios.defaults.headers.common["Content-Type"] = "application/json";
//   axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

//   if (label) {
//     dispatch(apiStart(label));
//   }

//   axios
//     .request({
//       url,
//       method,
//       headers,
//       [dataOrParams]: data
//     })
//     .then(({ data }) => {
//       dispatch(onSuccess(data));
//     })
//     .catch(error => {
//       dispatch(apiError(error));
//       dispatch(onFailure(error));

//       if (error.response && error.response.status === 403) {
//         dispatch(accessDenied(window.location.pathname));
//       }
//     })
//     .finally(() => {
//       if (label) {
//         dispatch(apiEnd(label));
//       }
//     });
// };

// export default apiMiddleware;
