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
  TouchableOpacity
} from 'react-native';

import { useThemeColor } from '../../components/Themed';
import SmallButton from '../../components/SmallButton';
import NextButton from '../../components/NextButton';
import StyledTextInput from '../../components/StyledTextInput';
import useCamera, { ImageItem } from '../../hooks/useCamera';
import { QueryFlowScreenProps } from '../../types';

export default function NewQueryScreen({ navigation }: QueryFlowScreenProps<'NewQuery'>) {
  const [input, setInput] = React.useState<string>('');
  const background = useThemeColor({}, 'background');
  const inputBackground = useThemeColor({}, 'inputBackground');

  const { images, pickImageFromLib, takeImageFromCam, removeImage } = useCamera();

  const renderItem = ({ item }: ListRenderItemInfo<ImageItem>) => {
    return (
      <TouchableOpacity onPress={() => removeImage(item.id)}>
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
          <SmallButton
            onPress={() => takeImageFromCam()}
            iconName="camera-alt"
            style={styles.smallBtn}
          />
          <SmallButton
            onPress={() => pickImageFromLib()}
            iconName="photo-library"
            style={styles.smallBtn}
          />
          <SmallButton onPress={() => {}} iconName="history" style={styles.smallBtn} />
          <NextButton
            text="Next"
            onPress={() => navigation.navigate('Analyse')}
            style={{ width: 100 }}
          />
        </DefaultView>
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
    flex: 15
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
    marginRight: 30
  }
});
