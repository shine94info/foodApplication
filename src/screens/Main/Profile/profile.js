import { View, Text, Image, Pressable } from 'react-native';
import React, { useMemo, useState } from 'react';
import imagePath from '../../../constants/imagePath';
import Icon from 'react-native-vector-icons/AntDesign';
import { styles } from './styles';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import ButtonComp from '../../../components/ButtonComp';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, setUser } from '../../../redux/auth/authSlice';
import { startMapper } from 'react-native-reanimated/lib/typescript/reanimated2/mappers';

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);

  console.log('userData:::::::::', userData);

  const [selectedId, setSelectedId] = useState();

  const radioButtons = useMemo(
    () => [
      {
        id: '1',
        label: 'Card',
        labelStyle: { color: 'black' },
        color: '#FA4A0C',
        borderColor: '#FA4A0C',
      },

      {
        id: '3',
        label: 'Paypal',
        labelStyle: { color: 'black' },
        selected: false,
      },
      {
        id: '2',
        label: 'Bank account',
        labelStyle: { color: 'black' },
        selected: false,
      },
    ],
    [],
  );
  return (
    <View style={styles.maincontainer}>
      <View style={styles.headingcontainer}>
        <Pressable
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Icon name="left" size={24} color={'#000000'} />
        </Pressable>
        <Text style={styles.headingtext}>My profile</Text>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          padding: 30,
        }}>
        <View>
          <Text style={styles.informationtext}>Information</Text>
          <View style={styles.informationview}>
            <Image
              source={imagePath.Profileicon}
              style={styles.informationimage}
            />

            <View style={{ flex: 1 }}>
              <Text style={styles.personname}>{userData.email}</Text>
              <Text style={styles.personinfo}>{userData.password}</Text>
              <Text style={styles.personinfo}>
                No 15 uti strret off ovie place road effurun delta state
              </Text>
            </View>
          </View>
          <Text style={styles.paymenttext}>Payment Methods</Text>

          <RadioGroup
            radioButtons={radioButtons}
            onPress={setSelectedId}
            selectedId={selectedId}
            containerStyle={styles.paymentview}
          />
        </View>
        <ButtonComp
          btnText={'Update'}
          btnStyle={styles.loginbtn}
          btntextstyle={styles.btntxt}
        />
      </View>
    </View>
  );
};
export default Profile;
