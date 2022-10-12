import { React, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  const runTimer = () => {
    setSeconds(currentSeconds => currentSeconds + 1);
  }

  useEffect(() => {
    console.log(seconds);
  })

  const startTimer = () => {
      interval = setInterval(() => {
        runTimer();
      }, 1000)
  }

  const stopTimer = () => {
    clearInterval(interval);
    setSeconds(0);
  }

  return (
    <View style={styles.container}>
      <Text>{seconds}</Text>
      <Button
        title="Go"
        onPress={startTimer}
      />
      <Button
        title="Stop"
        onPress={stopTimer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Timer; 