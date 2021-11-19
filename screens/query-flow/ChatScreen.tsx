import * as React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  Actions,
  Bubble,
  Composer,
  GiftedChat,
  IMessage,
  InputToolbar,
  MessageText,
  Send
} from 'react-native-gifted-chat';

import { View, Text } from '../../components/Themed';
import { useThemeColor } from '../../components/Themed';
import { QueryFlowScreenProps } from '../../types';

import { MaterialIcons } from '@expo/vector-icons';
import ActionButton from '../../components/ActionButton';
import { PressableScale } from 'react-native-pressable-scale';
import { StatusBar } from 'expo-status-bar';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';

export default function ChatScreen({ navigation }: QueryFlowScreenProps<'Chat'>) {
  const colorScheme = useColorScheme();

  const iconColor = useThemeColor({}, 'text');
  const background = useThemeColor({}, 'secondary');
  const chatBackground = useThemeColor({}, 'inputBackground');
  const cardBackground = useThemeColor({}, 'cardBackground');
  const cardElevated = useThemeColor({}, 'cardElevated');

  const [messages, setMessages] = React.useState<IMessage[]>([]);

  React.useEffect(() => {
    setMessages([
      {
        _id: 2,
        text: 'When did you first start having this issue?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: require('../../assets/images/harold.png')
        }
      },
      {
        _id: 1,
        text: 'Hey there!',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: require('../../assets/images/harold.png')
        }
      }
    ]);
  }, []);

  const onSend = React.useCallback((messages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
  }, []);

  return (
    <>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1
        }}
        renderInputToolbar={(props) => (
          <InputToolbar
            {...props}
            containerStyle={{
              padding: 10,
              borderRadius: 25,
              marginHorizontal: 10,
              backgroundColor: chatBackground,
              borderTopColor: chatBackground
            }}
          />
        )}
        minInputToolbarHeight={80}
        renderSend={(props) => (
          <Send
            {...props}
            containerStyle={{
              height: 50,
              width: 50,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <MaterialIcons name="send" size={20} color={iconColor} />
          </Send>
        )}
        renderComposer={(props) => <Composer {...props} textInputStyle={{ color: iconColor }} />}
        alwaysShowSend={true}
        listViewProps={{
          style: {
            backgroundColor: background,
            borderTopWidth: 0,
            borderBottomWidth: 0
          }
        }}
        renderBubble={(props) => (
          <Bubble
            {...props}
            wrapperStyle={{
              left: {
                backgroundColor: chatBackground
              },
              right: {}
            }}
          />
        )}
        renderMessageText={(props) => (
          <MessageText
            {...props}
            textStyle={{
              left: {
                color: iconColor
              },
              right: {
                color: iconColor
              }
            }}
          />
        )}
        renderActions={(props) => (
          <Actions
            {...props}
            onPressActionButton={() => {}}
            containerStyle={{ marginBottom: 18, marginRight: 10, marginLeft: 5 }}
            icon={() => (
              <View
                style={{
                  width: 35,
                  height: 35,
                  backgroundColor: '#3F8EFC',
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <MaterialIcons name="add" size={20} color="#fff" />
              </View>
            )}
          />
        )}
      />

      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30
  },
  button: {
    width: '60%'
  },
  buttonMargin: {
    marginTop: 20
  }
});
