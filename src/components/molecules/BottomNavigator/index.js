import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../../utils';
import {TabItem} from '../../atoms';

const ButtomNavigator = ({state, descriptors, navigation}) => {
  return (
    <>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TabItem
              key={index}
              title={label}
              active={isFocused}
              onPress={onPress}
              onLongPress={onLongPress}
            />
          );
        })}
      </View>
    </>
  );
};

export default ButtomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingVertical: 16,
    backgroundColor: colors.white,
    shadowRadius: 1,
    shadowOffset: {
      width: 0,
      height: -8,
    },
    shadowColor: '#000000',
    elevation: 22,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
});
