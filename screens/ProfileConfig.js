import React, { useState , useLayoutEffect} from 'react';
import { View, TextInput, Button, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileConfig = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const navigation = useNavigation();
  
  const saveChanges = () => {
  };
  const {
        } = useRoute();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

  return (
    <View >
        <TouchableOpacity className = "absolute"
                onPress={navigation.goBack}
                style={{  top: 80, left: 16, padding: 3, borderRadius: 10, backgroundColor:'#FFFFFF' }}>
                <Icon name="arrow-left" size={25} color="#350540" />
        </TouchableOpacity>


        <View style={styles.container}>
                <Text style={styles.label}>Name:</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
            />

            <Text style={styles.label}>Username:</Text>
            <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
            />

            <Text style={styles.label}>Geburtsdatum:</Text>
            <TextInput
                style={styles.input}
                value={dob}
                onChangeText={setDob}
            />

            <Text style={styles.label}>Handy:</Text>
            <TextInput
                style={styles.input}
                value={phone}
                onChangeText={setPhone}
            />

            <Text style={styles.label}>Email:</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={saveChanges}
                >
                <Text style={styles.buttonText}>Einstellungen speicher</Text>
            </TouchableOpacity>
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    top:120
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    borderRadius: 10,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#FB8600',
    padding: 16,
    borderRadius: 10,
    top:25,
    
  },
  buttonText: {
    color: '#350540',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default ProfileConfig;
