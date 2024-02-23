import React from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView } from 'react-native';

import { fontSizes, spacing } from '../utils';
import { RoundedButton } from '../components';

const HistoryItem = ({ item, }) => {
  return <Text style={styles.historyItem(item.status)}>{item.subject}</Text>;
};

export const FocusHistory = ({ history, onClear }) => {
  
  return (
    <>
      <SafeAreaView style={{ flex: 0.96, width: '100%', alignItems: 'center' }}>
        {!!history.length && (
          <>
            <Text style={styles.title}>Things we've focused on</Text>
            <FlatList
              style={{ marginTop: spacing.md, width: '100%' }}
              contentContainerStyle={{ alignItems: 'center' }}
              data={history}

              renderItem={HistoryItem}
            />
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status > 1 ? 'red' : 'green',
    fontSize: fontSizes.md,
    padding: 8,
  }),
  title: {
    color: 'white',
    fontSize: fontSizes.lg,
  },

});
