import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from '../redux/reducers/counterReducer';

const Home = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View>
        <Button title="Increment value" onPress={() => dispatch(increment())} />
        <Text>{count}</Text>
        <Button title="Decrement value" onPress={() => dispatch(decrement())} />
      </View>
    </View>
  );
};

export default Home;

// const Home = () => {
//   return (
//     <View style={styles.container}>
//       <Text>Hello</Text>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// export default Home;
