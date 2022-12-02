// Todo refactoring api
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const baseUrl = 'https://apidojo-booking-v1.p.rapidapi.com';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'aaf7299a18msh1a27f3297707611p1d12eejsn5573b60b061f',
        'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
    }
};

export const getDataLocation = createAsyncThunk(
    'locations/auto-complete',
    async (city) => {
        try {
            const response = await fetch(`${baseUrl}/locations/auto-complete?text=${city}&languagecode=id`, options);
            const data = await response.json();
            console.log('locations/auto-complete', data);
            return data;
        }
        catch (error) {
            throw new Error(error);
        }
    }
);

export const getDataPropertiesList = createAsyncThunk(
    'properties/list',
    async (args) => {
        const { arrivalDate, departureDate, roomQty, guestQty, childrenQty, destId } = args;
        try {
            const response = await fetch(`${baseUrl}/properties/list?offset=0&arrival_date=${arrivalDate}&departure_date=${departureDate}&room_qty=${roomQty}&guest_qty=${guestQty}&children_qty=${childrenQty}&dest_ids=${destId}&search_type=city&price_filter_currencycode=IDR&languagecode=id&order_by=popularity&travel_purpose=leisure`, options);
            const data = await response.json();
            console.log('properties/list ', data);
            return { ...data, arrival_date: arrivalDate, departure_date: departureDate, room_qty: roomQty, guest_qty: guestQty, children_qty: childrenQty, dest_id: destId };
        } catch (error) {
            throw new Error(error);
        }
    }
);

export const getDataPropertiesDetail = createAsyncThunk(
    'properties/detail,photos,description',
    async (args) => {
        const { hotelId, searchId, departureDate, arrivalDate, recGuestQty, recRoomQty, recChildrenQty } = args;
        try {
            const resDetail = await fetch(`${baseUrl}/properties/detail?hotel_id=${hotelId}&search_id=${searchId}&departure_date=${departureDate}&arrival_date=${arrivalDate}&rec_guest_qty=${recGuestQty}&rec_room_qty=${recRoomQty}&rec_children_qty=${recChildrenQty}&languagecode=id&currency_code=IDR`, options);
            const resDesc = await fetch(`${baseUrl}/properties/get-description?hotel_ids=${hotelId}&languagecode=id`, options);
            const respPhotos = await fetch(`${baseUrl}/properties/get-hotel-photos?hotel_ids=${hotelId}&languagecode=id`, options)

            const dataDetail = await resDetail.json();
            const dataDesc = await resDesc.json();
            const dataPhotos = await respPhotos.json();

            return [{ details: { ...dataDetail }, description: { ...dataDesc }, photos: { ...dataPhotos } }];
        } catch (error) {
            throw new Error(error);
        }
    }
);

export const getDataPropertiesRoom = createAsyncThunk(
    'properties/get-room',
    async (args) => {
        const { hotelId, departureDate, arrivalDate, recGuestQty, recRoomQty, recChildrenQty } = args;
        try {
            const response = await fetch(`${baseUrl}/properties/v2/get-rooms?hotel_id=${hotelId}&departure_date=${departureDate}&arrival_date=${arrivalDate}&rec_guest_qty=${recGuestQty}&rec_room_qty=${recRoomQty}&rec_children_qty=${recChildrenQty}&currency_code=IDR&languagecode=id`, options);
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error(error);
        }
    }
);



const initialState = {
    data: [],
    searchResult: [],
    hotelAbout: [],
    hotelRoom: [],
    loading: false,
    fulfilled: false,
    error: null
};

export const ApiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDataLocation.pending, (state) => {
                state.loading = true;
            })
            .addCase(getDataLocation.fulfilled, (state, action) => {
                state.loading = false;
                state.fulfilled = true;
                state.data = action.payload;
            })
            .addCase(getDataLocation.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(getDataPropertiesList.pending, (state) => {
                state.loading = true;
                state.fulfilled = true;
            })
            .addCase(getDataPropertiesList.fulfilled, (state, action) => {
                state.loading = false;
                state.fulfilled = true;
                state.searchResult = action.payload;
            })
            .addCase(getDataPropertiesList.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(getDataPropertiesDetail.pending, (state) => {
                state.loading = true;
            }
            )
            .addCase(getDataPropertiesDetail.fulfilled, (state, action) => {
                state.loading = false;
                state.fulfilled = true;
                state.hotelAbout = action.payload;
            }
            )
            .addCase(getDataPropertiesDetail.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            }
        )
            .addCase(getDataPropertiesRoom.pending, (state) => {
                state.loading = true;
            }
            )
            .addCase(getDataPropertiesRoom.fulfilled, (state, action) => {
                state.loading = false;
                state.fulfilled = true;
                state.hotelRoom = action.payload;
            }
            )
            .addCase(getDataPropertiesRoom.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            }
            )
    }
});

export default ApiSlice.reducer;



