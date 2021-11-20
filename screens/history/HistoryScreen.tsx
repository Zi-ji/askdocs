import * as React from 'react';
import {
  StyleSheet,
  Pressable,
  View as DefaultView,
  Text as DefaultText,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import Collapsible from 'react-native-collapsible';

import { useThemeColor } from '../../components/Themed';
import Colors from '../../constants/Colors';
import Pill from '../../components/Pill';
import { Text, View } from '../../components/Themed';

export default function ProfileScreen() {
  const primary = useThemeColor({}, 'primary');
  const pillBackground = useThemeColor({}, 'pillBackground');
  const [isQueriesCollapsed, setIsQueriesCollapsed] = React.useState(true);
  const [isTreatmentCollapsed, setIsTreatmentCollapsed] = React.useState(true);
  const [isNotesCollapsed, setIsNotesCollapsed] = React.useState(true);
  const iconColor = useThemeColor({}, 'text');

  return (
    <SafeAreaView edges={['top']} style={[styles.container, { backgroundColor: primary }]}>
      <DefaultView style={styles.top}>
        <Text style={[styles.title, { color: Colors['dark'].text }]}>Medical History</Text>
      </DefaultView>

      <View style={styles.bottom}>
        <Pressable
          style={styles.pressable}
          onPress={() => {
            setIsQueriesCollapsed(false);
            setIsTreatmentCollapsed(true);
            setIsNotesCollapsed(true);
          }}
        >
          <Text style={styles.title}>Resolved Queries</Text>
          <TouchableOpacity>
            <AntDesign name="ellipsis1" size={24} color={iconColor} />
          </TouchableOpacity>
        </Pressable>
        <Collapsible style={styles.collapsedView} collapsed={isQueriesCollapsed}>
          <Pill title="Chest Pain" time="12:00pm" notes="okay thanks" subTitle="Dr.Harold" />
          <Pill title="Headache" time="13:00pm" notes="Have you tried" subTitle="Dr.Golf" />
        </Collapsible>

        <Pressable
          style={[styles.pressable, styles.pressableBorder, { borderColor: pillBackground }]}
          onPress={() => {
            setIsQueriesCollapsed(true);
            setIsTreatmentCollapsed(false);
            setIsNotesCollapsed(true);
          }}
        >
          <Text style={styles.title}>Treatments</Text>
          <TouchableOpacity>
            <AntDesign name="ellipsis1" size={24} color={iconColor} />
          </TouchableOpacity>
        </Pressable>
        <Collapsible style={styles.collapsedView} collapsed={isTreatmentCollapsed}>
          <View style={styles.collapsedView}>
            <Pill title="Headache" time="13:00pm" notes="Have you tried" subTitle="Dr.Golf" />
          </View>
        </Collapsible>

        <Pressable
          style={[styles.pressable, styles.pressableBorder, { borderColor: pillBackground }]}
          onPress={() => {
            setIsQueriesCollapsed(true);
            setIsTreatmentCollapsed(true);
            setIsNotesCollapsed(false);
          }}
        >
          <Text style={styles.title}>Notes</Text>
          <TouchableOpacity>
            <AntDesign name="ellipsis1" size={24} color={iconColor} />
          </TouchableOpacity>
        </Pressable>
        <Collapsible style={styles.collapsedView} collapsed={isNotesCollapsed}>
          <View style={styles.collapsedView}>
            <Pill title="Headache" time="13:00pm" notes="Have you tried" subTitle="Dr.Golf" />
          </View>
        </Collapsible>
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
    flex: 0.75,
    marginTop: 20,
    width: '100%'
  },
  title: {
    marginLeft: 30,
    fontWeight: 'bold',
    fontSize: 20
  },
  bottom: {
    flex: 9,
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40
  },
  pressableBorder: {
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40
  },
  pressable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 30,
    height: 80
  },
  collapsedView: {
    flex: 1
  }
});
