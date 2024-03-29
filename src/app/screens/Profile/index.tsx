import React from 'react';
import { ScrollView, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Screens } from '@constants/navigation';
import { TabStackNavigationProps } from '@interfaces/navigation';

import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

type ProfileProps = TabStackNavigationProps<Screens.PROFILE>;

const Profile = ({}: ProfileProps) => {
  const { t } = useTranslation();

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <ScrollView bounces={false} contentContainerStyle={styles.screen}>
        <Text style={styles.header}>{t('PROFILE.header')}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
