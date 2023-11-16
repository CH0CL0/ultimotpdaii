import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { Camera } from 'expo-camera';
import * as FileSystem from 'expo-file-system';

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  let camera;

  const takePicture = async () => {
    if (camera) {
      const photo = await camera.takePictureAsync();
      setCapturedPhoto(photo);

      if (photo.uri) {
        savePhoto(photo.uri);
      }
    }
  };

  const savePhoto = async (photoUri) => {
    const fileName = photoUri.split('/').pop();
    const newPath = FileSystem.documentDirectory + fileName;

    try {
      await FileSystem.moveAsync({
        from: photoUri,
        to: newPath,
      });

      // Verificar si photos está inicializado
      setPhotos((prevPhotos) => (prevPhotos ? [...prevPhotos, newPath] : [newPath]));
    } catch (error) {
      console.error('Error saving photo:', error);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={cameraType} ref={(ref) => (camera = ref)}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
          }}
        >
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              alignItems: 'center',
              backgroundColor: 'transparent',
            }}
            onPress={() => {
              setCameraType(
                cameraType === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              alignItems: 'center',
              backgroundColor: 'transparent',
            }}
            onPress={takePicture}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>Take Picture</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <View style={{ flex: 1 }}>
        {capturedPhoto && (
          <Image source={{ uri: capturedPhoto.uri }} style={{ flex: 1, marginBottom: 20 }} />
        )}
        {photos.length > 0 && (
          <FlatList
            data={photos}
            keyExtractor={(item) => item}
            horizontal
            renderItem={({ item }) => (
              <Image source={{ uri: item }} style={{ width: 100, height: 100, margin: 5 }} />
            )}
          />
        )}
      </View>
    </View>
  );
}
