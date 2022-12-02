import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';
import {
  Card,
  Gap,
  MiniCard,
  PickBooking,
  Title,
  TourCard,
} from '../../components';
import Swiper from 'react-native-swiper';
import {Slider1, Slider2, Slider3} from '../../assets';
import {
  Wisata1,
  Wisata2,
  Wisata3,
  Hotel1,
  Hotel2,
  Hotel3,
} from '../../assets/Dummy';
import {useSelector} from 'react-redux';

const HeaderHome = () => {
  const {name} = useSelector(state => state.user.user);

  return (
    <View style={styles.containerHeader}>
      <View>
        <Text style={styles.textHello}>Hi, {name}</Text>
        <Gap height={7} />
        <Text style={styles.textGreeting}>
          Selamat menginap dengan nyaman {'\n'}di Hotelio{' '}
        </Text>
      </View>
      <View style={styles.image}>
        <Image />
      </View>
    </View>
  );
};

const Beranda = ({navigation}) => {
  return (
    <ScrollView style={styles.page}>
      <HeaderHome />
      <Gap height={20} />
      <Swiper style={styles.wrapper} showsButtons loop={false} autoplay>
        <Image source={Slider1} style={styles.imageSlider} />
        <Image source={Slider2} style={styles.imageSlider} />
        <Image source={Slider3} style={styles.imageSlider} />
      </Swiper>
      <View style={styles.containerPickBooking}>
        <PickBooking onPress={() => navigation.navigate('Search')} />
      </View>
      <Gap height={30} />
      <Title title="Kota Populer" />
      <Gap height={15} />
      <View style={styles.cityPopular}>
        <ScrollView
          style={styles.city}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {/*  Looping API */}
          <MiniCard title="Jakarta" />
          <Gap width={12} />
          <MiniCard title="Surabaya" />
          <Gap width={12} />
          <MiniCard title="Bali" />
          <Gap width={12} />
          <MiniCard title="Medan" />
          <Gap width={12} />
          <MiniCard title="Bandung" />
          <Gap width={12} />
          <MiniCard title="Semarang" />
        </ScrollView>
      </View>
      <Gap height={30} />
      <Title title="Wisata Trending" />
      <Gap height={15} />
      <View style={styles.tourTrending}>
        <ScrollView
          style={styles.tour}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {/*  Looping API Wisata Populer */}
          <TourCard title="Candi Borobudor" img={Wisata1} />
          <Gap width={15} />
          <TourCard title="Nusa Penida" img={Wisata2} />
          <Gap width={15} />
          <TourCard title="Danau Toba" img={Wisata3} />
        </ScrollView>
      </View>
      <Gap height={30} />
      <Title title="Rekomendasi Hotel" />
      <Gap height={15} />
      <View style={styles.hotel}>
        {/*  Looping API Hotel */}
        <Card
          img={Hotel1}
          title="Star Horel"
          location="Tebet, Jakarta Utara"
          rate={4.8}
          price="Rp. 450.000"
          onPress={() => navigation.navigate('DetailHotel')}
        />
        <Gap height={12} />
        <Card
          img={Hotel2}
          title="Star Horel"
          location="Pasar Minggu, Jakarta Utara"
          rate={4.8}
          price="Rp. 450.000"
        />
        <Gap height={12} />
        <Card
          img={Hotel3}
          title="Hotel Santika"
          location="Tebet, Jakarta Utara"
          rate={4.8}
          price="Rp. 450.000"
        />
      </View>
      <Gap height={30} />
    </ScrollView>
  );
};

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default Beranda;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    width: 44,
    height: 44,
    backgroundColor: 'grey',
    borderRadius: 22,
  },
  containerHeader: {
    paddingTop: 40,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textHello: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary,
  },
  textGreeting: {
    fontFamily: fonts.primary[400],
    fontSize: 12,
    color: colors.text.secondary,
  },
  wrapper: {
    height: HEIGHT * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  imageSlider: {
    width: '100%',
    height: '100%',
  },
  containerPickBooking: {
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  cityPopular: {
    paddingLeft: 20,
  },
  city: {
    flexDirection: 'row',
  },
  tourTrending: {
    paddingLeft: 20,
  },
  tour: {
    flexDirection: 'row',
  },
});
