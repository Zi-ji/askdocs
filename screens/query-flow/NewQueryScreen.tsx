import * as React from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  View as DefaultView,
  Keyboard,
  Platform,
  Image,
  FlatList,
  ListRenderItemInfo,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput
} from 'react-native';

import { useThemeColor } from '../../components/Themed';
import SmallButton from '../../components/SmallButton';
import NextButton from '../../components/NextButton';
import StyledTextInput from '../../components/StyledTextInput';
import useCamera, { ImageItem } from '../../hooks/useCamera';
import { QueryFlowScreenProps } from '../../types';
import { MaterialIcons } from '@expo/vector-icons';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { StatusBar } from 'expo-status-bar';
import useColorScheme from '../../hooks/useColorScheme';

export default function NewQueryScreen({ navigation, route }: QueryFlowScreenProps<'NewQuery'>) {
  const [input, setInput] = React.useState<string>('');
  const background = useThemeColor({}, 'background');
  const inputBackground = useThemeColor({}, 'inputBackground');
  const { showActionSheetWithOptions } = useActionSheet();
  const colorScheme = useColorScheme();

  const { images, pickImageFromLib, takeImageFromCam, removeImage } = useCamera();

  React.useEffect(() => {
    if (route.params?.active) {
      switch (route.params?.active) {
        case 'camera':
          takeImageFromCam();
          break;
        case 'library':
          pickImageFromLib();
          break;
        default:
          break;
      }
    }
  }, []);

  const renderItem = ({ item }: ListRenderItemInfo<ImageItem>) => {
    return (
      <TouchableOpacity
        onPress={() => {
          showActionSheetWithOptions(
            {
              options: ['Remove', 'Cancel'],
              cancelButtonIndex: 1,
              destructiveButtonIndex: 0,
              title: 'Do you want to remove this image?'
            },
            (index) => {
              if (index === 0) {
                removeImage(item.id);
              }
            }
          );
        }}
      >
        <DefaultView
          style={{
            position: 'absolute',
            right: 5,
            top: 0,
            width: 20,
            height: 20,
            backgroundColor: 'red',
            borderRadius: 20,
            zIndex: 10,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <MaterialIcons name="remove" size={18} color="#fff" />
        </DefaultView>
        <Image
          source={{ uri: item.uri }}
          style={{ width: 70, height: 70, marginRight: 10, borderRadius: 10, marginLeft: 10 }}
        />
      </TouchableOpacity>
    );
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={155}
        style={[styles.container, { backgroundColor: background }]}
      >
        <StyledTextInput
          autoFocus={true}
          value={input}
          placeholder="I feel..."
          multiline={true}
          onChangeText={(text) => setInput(text)}
          style={styles.input}
        />
        {images.imageArr.length !== 0 && (
          <DefaultView style={[styles.imageContainer, { backgroundColor: inputBackground }]}>
            <FlatList
              horizontal
              scrollEnabled
              data={images.imageArr}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
              onStartShouldSetResponder={() => true}
              showsHorizontalScrollIndicator={false}
            />
          </DefaultView>
        )}
        <DefaultView style={styles.bottomRow}>
          <DefaultView
            style={{
              flexDirection: 'row'
            }}
          >
            <SmallButton
              onPress={() => takeImageFromCam()}
              iconName="camera-alt"
              style={styles.smallBtn}
              white
            />
            <SmallButton
              onPress={() => pickImageFromLib()}
              iconName="photo-library"
              style={styles.smallBtn}
              white
            />
            <SmallButton
              onPress={() => {
                alert('Not implemented yet!');
              }}
              iconName="history"
              style={styles.smallBtn}
              white
            />
          </DefaultView>
          <NextButton
            text="Next"
            onPress={() => navigation.navigate('Analyse')}
            style={{ width: 120 }}
            white
            primary
          />
        </DefaultView>
        <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 0
  },
  input: {
    flex: 80,
    marginBottom: 30
  },
  bottomRow: {
    flexDirection: 'row',
    flex: 15,
    justifyContent: 'space-between'
  },
  imageContainer: {
    flexDirection: 'row',
    height: 100,
    width: '100%',
    marginBottom: 20,
    borderRadius: 20,
    alignItems: 'center'
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 20,
    marginLeft: 80,
    borderRadius: 10
  },
  smallBtn: {
    marginRight: 20
  }
});
