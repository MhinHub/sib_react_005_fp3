import moment from 'moment';
import {
  Dimensions,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Swiper from 'react-native-swiper';
import {colors, fonts} from '../../utils';
import {Intro1, Intro2, Intro3} from '../../assets/Image';
import {
  IconCalendarBlue,
  IconDoorBlue,
  IconLocation,
  IconNightBlue,
  IconPersonBlue,
  IconStar,
} from '../../assets/Icon';
import {Button, Fasilitas, Gap, Header, Review} from '../../components';
import {HotelDummy1} from '../../assets/Dummy';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Calendar} from 'react-native-calendars';
import CounterInput from 'react-native-counter-input';
import {getDataPropertiesDetail} from '../../context/api/reducer';
import {useDispatch, useSelector} from 'react-redux';

const HotelInfo = ({title, location, rate, price}) => {
  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.wrapperLocation}>
          <IconLocation />
          <Text style={styles.location}>{location}</Text>
        </View>
        <View style={styles.wrapperRate}>
          <IconStar />
          <Text style={styles.rate}>{rate}</Text>
        </View>
      </View>
      <View style={styles.wrapperPrice}>
        <Text style={styles.price}>Rp {price}</Text>
        <Text style={styles.night}>/malam</Text>
      </View>
    </View>
  );
};

const Title = ({title}) => {
  return (
    <View style={{paddingLeft: 20}}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const Desc = ({desc}) => {
  return (
    <View style={{paddingHorizontal: 20}}>
      <Text style={styles.textGrey}>{desc}</Text>
    </View>
  );
};

const DetailHotel = ({navigation}) => {
  const dispatch = useDispatch();
  const {hotelAbout, fulfilled} = useSelector(state => state.api);

  const [hotelDetails, setHotelDetails] = useState('');
  const [hotelPhotos, setHotelPhotos] = useState([]);
  const [hotelDesc, setHotelDesc] = useState('');
  const [showModalDate, setShowModalDate] = useState(false);
  const [markedDates, setMarkedDates] = useState({});
  const [startDay, setStartDay] = useState('');
  const [endDay, setEndDay] = useState('');
  const [showModalPerson, setShowModalPerson] = useState(false);
  const [room, setRoom] = useState(1);
  const [guest, setguest] = useState(0);

  const toggleModalCalendar = () => {
    setShowModalDate(!showModalDate);
  };

  const toggleModalPerson = () => {
    setShowModalPerson(!showModalPerson);
  };

  const args = {
    hotelId: '2439030',
    searchId: 'bdfb81b98d1669427737520bbca6fbd2173:2:101',
    departureDate: '2022-12-25',
    arrivalDate: '2022-12-24',
    recGuestQty: '1',
    recRoomQty: '1',
    recChildrenQty: '0',
  };
  useEffect(() => {
    dispatch(getDataPropertiesDetail(args));
  }, []);

  // const objectMap = (obj) =>
  //   Object.fromEntries(
  //     Object.entries(obj).map(i => i)
  //   )

  useEffect(() => {
    if (fulfilled === true) {
      console.log('HOTEL ABOUT', hotelAbout);

      hotelAbout.map(item => {
        setHotelDetails(Object.values(item.details)[0]);
        setHotelPhotos(item.photos);
        setHotelDesc(
          Object.values(item.description).find(
            item => item.descriptiontype_id === 6,
          ),
        );
      });

      // console.log('hotelDetails asdjfbslkdjbfds', hotelDetails)
      // console.log('hotelPhotos', hotelPhotos);
      // console.log('hotelDesc', hotelDesc);

      // console.log('URL IMage jhgcjhgx', hotelPhotos.data[2439030].map((item) => `https://cf.bstatic.com${item[4]}`));
    }
  }, [hotelAbout]);

  const rpFormatter = new Intl.NumberFormat('id-ID', {
    maximumFractionDigits: 0,
  });

  return (
    <>
      <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
        <Header title="Detail Hotel" onPress={() => navigation.goBack()} />
        {/* Box Pick Date */}
        <View style={styles.containerBox}>
          <TouchableOpacity style={styles.wrapperBox}>
            <IconCalendarBlue />
            <Text style={styles.textLabel}>19 Nov 2022</Text>
          </TouchableOpacity>
          <View
            style={{borderRightColor: colors.greymedium, borderRightWidth: 1}}
          />
          <TouchableOpacity style={styles.wrapperBox}>
            <IconNightBlue />
            <Text style={styles.textLabel}>2 Malam</Text>
          </TouchableOpacity>
          <View
            style={{borderRightColor: colors.greymedium, borderRightWidth: 1}}
          />
          <TouchableOpacity style={styles.wrapperBox}>
            <IconPersonBlue style={{marginHorizontal: 3}} />
            <Text style={styles.textLabel}>1</Text>
            <IconDoorBlue style={{marginHorizontal: 6}} />
            <Text style={styles.textLabel}>1</Text>
          </TouchableOpacity>
        </View>
        <Swiper
          style={styles.wrapperSwipper}
          showsButtons={true}
          loop={false}
          autoplay={true}>
          {/* {hotelPhotos.data[2439030].map((item, idx) => (
          item[4].map((img) => (
            <ImageBackground
              key={idx}
              source={{ uri: `https://cf.bstatic.com${img}` }}
              style={styles.imageSwipper}
            />
          ))
        ))} */}
          <Image source={Intro2} style={styles.container} />
          <Image source={Intro3} style={styles.container} />
        </Swiper>
        <HotelInfo
          title={hotelDetails.hotel_name}
          rate="4.9"
          location={hotelDetails.city}
          price={hotelDetails.block?.map(item =>
            rpFormatter.format(item.min_price.price),
          )}
        />
        <View style={styles.line} />
        <Gap height={15} />
        <Title title="Deskipsi" />
        <Gap height={12} />
        <Desc desc={hotelDesc.description} />
        <Gap height={12} />
        <Title title="Fasilitas" />
        <Gap height={15} />
        <Fasilitas
          apartment="Apartment"
          bathrooms="1"
          kitchen="Kitchen"
          bedrooms="2"
        />
        <Gap height={12} />

        <View style={styles.wrapperReview}>
          <Title title="Ulasan" />
          <Text style={styles.textRate}>(378)</Text>
        </View>
        <Gap height={15} />
        <Review
          name="John Hawkins"
          img={HotelDummy1}
          rate="4.9"
          desc=" Very nice and comfortable hotel. thank you for accompanying my vacation"
        />
        <Gap height={30} />
        <Review
          name="John Hawkins"
          img={HotelDummy1}
          rate="4.9"
          desc=" Very nice and comfortable hotel. thank you for accompanying my vacation"
        />
        <Gap height={30} />
        <Button title="Pesan Sekarang" />
        <Gap height={30} />
      </ScrollView>

      {/* Modal Date */}
      <Modal
        visible={showModalDate}
        backdropColor="transparent"
        animationType="slide">
        <View style={{backgroundColor: 'white', flex: 1}}>
          <View style={styles.headerModal}>
            <Text style={styles.textHeaderModal}>Tanggal Menginap</Text>
          </View>
          <Gap height={30} />
          <Calendar
            onDayPress={day => {
              console.log('day : ', day);
              if (startDay && !endDay) {
                const date = {};
                for (
                  const d = moment(startDay);
                  d.isSameOrBefore(day.dateString);
                  d.add(1, 'days')
                ) {
                  date[d.format('YYYY-MM-DD')] = {
                    marked: true,
                    color: colors.primary,
                    textColor: 'white',
                  };

                  if (d.format('YYYY-MM-DD') === startDay) {
                    date[d.format('YYYY-MM-DD')].startingDay = true;
                  }
                  if (d.format('YYYY-MM-DD') === day.dateString) {
                    date[d.format('YYYY-MM-DD')].endingDay = true;
                  }
                }

                setMarkedDates(date);
                setEndDay(day.dateString);
              } else {
                setStartDay(day.dateString);
                setEndDay(null);
                setMarkedDates({
                  [day.dateString]: {
                    marked: true,
                    color: colors.primary,
                    textColor: 'white',
                    startingDay: true,
                    endingDay: true,
                  },
                });
              }
            }}
            minDate={moment().format('YYYY-MM-DD')}
            monthFormat={'MMM yyyy'}
            hideDayNames={false}
            markingType={'period'}
            markedDates={markedDates}
            theme={{
              selectedDayBackgroundColor: colors.primary,
              selectedDayTextColor: 'white',
              monthTextColor: colors.primary,
              dayTextColor: 'black',
              textMonthFontSize: 18,
              textDayHeaderFontSize: 16,
              arrowColor: colors.secondary,
              dotColor: colors.white,
            }}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.wrapperButtonModal}
          onPress={toggleModalCalendar}>
          <Text style={styles.textButtonModal}>TERAPKAN</Text>
        </TouchableOpacity>
      </Modal>

      {/* Modal Person */}
      <Modal
        visible={showModalPerson}
        animationType="slide"
        backdropColor="transparent">
        <View style={{backgroundColor: 'white', flex: 1}}>
          <View style={styles.headerModal}>
            <Text style={styles.textHeaderModal}>Tambahkan Kamar dan Tamu</Text>
          </View>
          <Gap height={15} />

          <View style={styles.containerCounter}>
            <Text style={styles.labelCounter}>Kamar</Text>
            <CounterInput
              initial={1}
              onChange={counter => {
                console.log('onChange Counter:', counter);
                setRoom(counter);
              }}
              min={1}
              style={styles.counter}
              horizontal
              increaseButtonBackgroundColor={colors.primary}
              decreaseButtonBackgroundColor={colors.primary}
            />
          </View>
          <Gap height={15} />
          <View
            style={{borderBottomWidth: 1, borderBottomColor: colors.border}}
          />

          <Gap height={15} />
          <View style={styles.containerCounter}>
            <Text style={styles.labelCounter}>Tamu</Text>
            <CounterInput
              initial={0}
              onChange={counter => {
                console.log('Guest Counter:', counter);
                setguest(counter);
              }}
              min={0}
              style={styles.counter}
              horizontal
              increaseButtonBackgroundColor={colors.primary}
              decreaseButtonBackgroundColor={colors.primary}
            />
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.wrapperButtonModal}
          onPress={toggleModalPerson}>
          <Text style={styles.textButtonModal}>TERAPKAN</Text>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default DetailHotel;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  container: {
    width: WIDTH,
    height: HEIGHT * 0.4,
  },
  title: {
    fontFamily: fonts.primary[600],
    color: colors.secondary,
    fontSize: 16,
  },
  location: {
    fontFamily: fonts.primary[400],
    color: colors.greymedium,
    fontSize: 14,
    paddingLeft: 8,
  },
  rate: {
    fontFamily: fonts.primary[600],
    color: colors.yellow,
    fontSize: 14,
    paddingLeft: 8,
  },
  price: {
    fontFamily: fonts.primary[600],
    color: colors.primary,
    fontSize: 16,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  wrapperPrice: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  wrapperRate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperReview: {
    flexDirection: 'row',
  },
  wrapperLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  night: {
    fontFamily: fonts.primary[400],
    color: colors.greymedium,
    fontSize: 14,
    paddingLeft: 10,
  },
  iconFavorit: {
    position: 'absolute',
    marginTop: 15,
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.secondary,
  },
  textGrey: {
    fontFamily: fonts.primary[400],
    color: colors.greymedium,
    fontSize: 14,
  },
  textRate: {
    fontFamily: fonts.primary[400],
    color: colors.greymedium,
    fontSize: 14,
    paddingLeft: 10,
  },
  line: {
    height: 0.3,
    borderBottomColor: colors.border,
    borderWidth: 0.2,
  },
  wrapperSwipper: {
    height: HEIGHT * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerBox: {
    flexDirection: 'row',
    alignContent: 'space-between',
    borderTopColor: colors.greymedium,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flex: 1,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  wrapperBox: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    flex: 1,
  },

  textLabel: {
    fontFamily: fonts.primary[500],
    color: colors.primary,
    marginLeft: 3,
    fontSize: 14,
  },

  textLabelNumber: {
    fontFamily: fonts.primary[500],
    color: colors.primary,
    paddingHorizontal: 5,
    fontSize: 14,
  },
  linePick: {
    borderRightColor: colors.greymedium,
    borderRightWidth: 1,
  },
  headerModal: {
    backgroundColor: colors.primary,
  },
  textHeaderModal: {
    fontFamily: fonts.primary[500],
    color: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 20,
    fontSize: 20,
  },
  wrapperButtonModal: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    // alignSelf: 'flex-end',
    marginBottom: 20,
    marginHorizontal: 20,
  },
  textButtonModal: {
    fontFamily: fonts.primary[500],
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: colors.white,
  },
  counter: {
    borderRadius: 15,
  },
  labelCounter: {
    fontFamily: fonts.primary[500],
    color: colors.secondary,
    alignSelf: 'flex-start',
    paddingVertical: 20,
    fontSize: 20,
    justifyContent: 'flex-start',

    flex: 1,
  },
  containerCounter: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
