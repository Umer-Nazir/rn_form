import React from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

const Home = () => {
  const dataTemplate = useSelector(state => state.data.dataTemplate);
  ///const dispatch = useDispatch();

  //console.log(dataTemplate);

  return (
    <View style={styles.container}>
      {dataTemplate.map(element => {
        console.log(element.title);
        <View>
          <Text style={{backgroundColor: 'red'}}>{element.title}</Text>
          {/* <TextInput></TextInput> */}
        </View>;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
