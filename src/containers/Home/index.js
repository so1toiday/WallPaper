import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { getDataHome, getDataMore } from '@redux/Home';
import { connect } from 'react-redux';
import { ItemListHome } from '@components';
import { useNavigation } from '@react-navigation/native';
const Home = (props) => {
  const navigation = useNavigation();
  const [page, setPage] = useState(1);
  useEffect(() => {
    props.getData(page);
  }, []);

  const loadMore=async () => {
    await setPage(page+1);
    console.log("page "+page);
    props.getDataMore(page);

  }

  return props.loading ? (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="blue" />
    </View>
  ) :
    (
      <View style={styles.container}>
        <FlatList
          style={styles.flatList}
          data={props.data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item,index) => index.toString()}
          renderItem={({ item, index }) => (
            <ItemListHome imageUri={item.urls.small} onPress={() => {
              navigation.navigate("ListHozi", { index: index });
            }} />
          )}
          numColumns={2}
          onEndReached={()=>{
            loadMore();
          }}
          onEndReachedThreshold={0.1}
        />
        {props.loadingMore && <ActivityIndicator color="blue" size="large" />}
      </View>
    )

};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {
    flex: 1
  }
});

const mapStateToProps = state => ({
  loading: state.home.loading,
  data: state.home.data,
  loadingMore: state.home.loadingMore
});
const mapDispatchToProps = dispatch => ({
  getData: (page) => {
    dispatch(getDataHome(page));
  },
  getDataMore: (page) => {
    dispatch(getDataMore(page));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);


