import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import Card from './src';
import { useState, useEffect } from 'react';

export default function App() {

  let [movies, setMovies] = useState([]);

  const url = 'https://api.otaviolube.com/api/filmes?populate=*';

  useEffect(() => {
    fetch(url)
      .then(data => data.json())
      .then(objeto => {
        console.log(objeto)
        setMovies(objeto.data)
      })
  }, []);
  
  return (
    <View style={styles.body}>
      {movies.length > 0 ? 
      movies.map(movie => (
        <Card info={movie} />
      )) : 
      <Text>Carregando...</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: "wrap",
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 50,
    backgroundColor: "#282828",
  },
});
