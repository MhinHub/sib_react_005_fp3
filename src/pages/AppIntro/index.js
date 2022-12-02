import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Gradiasi, Intro1, Intro2, Intro3} from '../../assets';
import {colors, fonts} from '../../utils';

const slides = [
  {
    id: 1,
    image: Intro1,
    title: 'Selamat Datang \ndi Hotelio',
    desc: 'Platform untuk  pesan hotel\n hanya dengan satu klik',
  },
  {
    id: 2,
    image: Intro2,
    title: 'Hanya dalam\nGenggaman Tangan',
    desc: 'Anda bisa bermalam dimana saja\ndan kapan saja',
  },
  {
    id: 3,
    image: Intro3,
    title: 'Temukan Hotel\nIdeal Anda',
    desc: 'Layanan pelanggan 24 jam,\ndapatkan promo terbaik',
  },
];

const AppIntro = ({navigation}) => {
  const [showIntro, setShowIntro] = useState(false);

  _renderNextButton = () => {
    return (
      <View style={styles.buttonNext}>
        <Text style={styles.textNext}>Lanjut</Text>
      </View>
    );
  };

  _renderDoneButton = () => {
    return (
      <View style={styles.buttonDone}>
        <Text style={styles.textDone}>Mulai</Text>
      </View>
    );
  };

  if (!showIntro) {
    return (
      <>
        <AppIntroSlider
          data={slides}
          renderItem={({item, index}) => {
            return (
              <View key={index} style={{flex: 1, backgroundColor: '#ffffff'}}>
                <ImageBackground
                  resizeMode="cover"
                  source={item.image}
                  style={styles.image}>
                  <View style={styles.gradiasi}>
                    <Gradiasi />
                  </View>
                </ImageBackground>
                <View>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.desc}>{item.desc}</Text>
                </View>
              </View>
            );
          }}
          activeDotStyle={{
            backgroundColor: '#258FDA',
            width: 19,
          }}
          dotStyle={{backgroundColor: '#D9D9D9'}}
          bottomButton
          showPrevButton={false}
          renderDoneButton={this._renderDoneButton}
          renderNextButton={this._renderNextButton}
          onDone={() => navigation.replace('SignIn')}
        />
      </>
    );
  }
};


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default AppIntro;

const styles = StyleSheet.create({
  buttonNext: {
    width: 170,
    height: 45,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  textNext: {
    fontFamily: fonts.primary[500],
    color: colors.text.secondary,
    textAlign: 'center',
  },
  buttonDone: {
    width: 170,
    height: 45,
    backgroundColor: colors.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  textDone: {
    fontFamily: fonts.primary[500],
    color: colors.white,
    textAlign: 'center',
  },
  image: {
    width: WIDTH,
    height: HEIGHT * 0.6,
    resizeMode: 'cover',
    position: 'relative',
  },
  gradiasi: {
    bottom: 0,
    position: 'absolute',
  },
  title: {
    color: colors.primary,
    fontSize: 24,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
  desc: {
    color: colors.text.secondary,
    fontSize: 16,
    marginTop: 13,

    fontFamily: fonts.primary[500],
    textAlign: 'center',
  },
});
