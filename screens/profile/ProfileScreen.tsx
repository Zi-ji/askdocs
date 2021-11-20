import * as React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View as DefaultView,
  Text as DefaultText,
  ScrollView,
  Switch,
  Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useThemeColor } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { Text, View } from '../../components/Themed';

export default function ProfileScreen() {
  const primary = useThemeColor({}, 'primary');
  const pillBackground = useThemeColor({}, 'pillBackground');
  const switchColor = useThemeColor({}, 'placeholder');

  function SwitchItem({ title }: { title: string }) {
    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    return (
      <View style={[styles.pill, { backgroundColor: pillBackground }]}>
        <Text style={styles.pillTitle}>{title}</Text>
        <Switch
          trackColor={{ false: switchColor, true: '#4AB139' }}
          thumbColor={'#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    );
  }

  return (
    <SafeAreaView edges={['top']} style={[styles.container, { backgroundColor: primary }]}>
      <DefaultView style={styles.top}>
        <DefaultView style={styles.topBar}>
          <TouchableOpacity
            style={{ backgroundColor: primary, width: 50 }}
            onPress={() => {
              alert('Not implemented yet');
            }}
          >
            <DefaultText style={{ color: Colors['dark'].text, fontWeight: '500', fontSize: 16 }}>
              Edit
            </DefaultText>
          </TouchableOpacity>
        </DefaultView>
        <Image
          source={{
            uri: 'https://placeimg.com/50/50/people'
          }}
          style={{ height: 100, width: 100, borderRadius: 50 }}
        />
        <Text style={{ color: Colors['dark'].text, fontWeight: 'bold', fontSize: 18 }}>
          Sam Burger
        </Text>
      </DefaultView>
      <View style={styles.bottom}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
          <Text style={styles.lable}>General</Text>
          <SwitchItem title="Notifications" />
          <Text style={styles.lable}>Privacy</Text>
          <SwitchItem title="Auto-delete resolved queries" />
          <SwitchItem title="Always hide my name" />
          <SwitchItem title="Always hide my photo" />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  topBar: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end'
  },
  top: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 4
  },
  bottom: {
    flex: 6,
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40
  },
  scrollView: {
    paddingLeft: 30,
    paddingRight: 30
  },
  lable: {
    marginTop: 35,
    marginLeft: 10,
    fontWeight: '500',
    fontSize: 16
  },
  pill: {
    width: '100%',
    borderRadius: 30,
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20
  },
  pillTitle: {
    fontWeight: '500',
    fontSize: 18
  }
});
