import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export interface ImageItem {
  uri: string;
  id: number;
}
export default function useCamera() {
  const [images, setImages] = useState<{
    incrementalId: number;
    imageArr: ImageItem[];
  }>({
    incrementalId: 0,
    imageArr: []
  });

  function addImage(uri: string) {
    setImages((prev) => ({
      incrementalId: prev.incrementalId + 1,
      imageArr: [
        ...prev.imageArr,
        {
          id: prev.incrementalId,
          uri
        }
      ]
    }));
  }

  const pickImageFromLib = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('We need camera roll permissions to select photos!');
        return;
      }
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.cancelled) {
      const uri = result.uri;
      addImage(uri);
    }
  };

  const takeImageFromCam = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        alert('We need camera permissions to take photos!');
        return;
      }
    }
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.cancelled) {
      const uri = result.uri;
      addImage(uri);
    }
  };

  function removeImage(id: number) {
    setImages((prev) => ({
      incrementalId: prev.incrementalId,
      imageArr: prev.imageArr.filter((item) => item.id !== id)
    }));
  }

  return { images, pickImageFromLib, takeImageFromCam, removeImage };
}
