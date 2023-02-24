import { PressableStateCallbackType, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { gray } from '@constants/colors';
import fonts from '@config/fonts';

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#3C3E43'
  },
  container: {
    backgroundColor: '#3C3E43',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonTab: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    marginTop: 4,
    ...fonts.smallBoldText
  }
});

export const getTabButtonStyle = ({
  pressed
}: PressableStateCallbackType): StyleProp<ViewStyle> => {
  const touchStyle = pressed ? { backgroundColor: gray } : {};
  return [styles.buttonTab, touchStyle];
};

export default styles;
