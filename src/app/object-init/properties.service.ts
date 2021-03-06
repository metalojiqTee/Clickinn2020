import { Injectable } from '@angular/core';
import { Property } from '../models/property.model';
import { PropertyPreview } from '../models/property-preview.model';
import { Address } from '../models/address.model';
import { Room } from '../models/room.model';
import { RoomPreview } from '../models/room-preview.model';
import { RoomCount } from '../models/room.count.interface';
import { FileUpload } from '../models/file-upload.model';


@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  constructor() { }

  defaultRoomCount(){
  	let room_count: RoomCount = {
  		singles: null,
  		two_sharings: null,
  		three_sharings: null,
  		cottages: null,
  		apartments: null,
  		backrooms: null,
  		ensuites: null
  	}
  	return room_count;
  }

  defaultPropertyPreview(){
  	let property: PropertyPreview = {
  		address: this.defaultAddress(),
		parking: false,
		wifi: false,
		payment_methods: "",
		pool: false,
		gym: false,
		laundry: false,
		tv_room: false,
		security: false,
		electricity_inclusive_in_rent: false,
		property_id: "",
		property_type: "",
		nearby_landmarks: [],
		deposit_specifics: [],
		other_amenities: "",
		genders_housed: ""
	}
  	return property;
  }

  defaultAddress(): Address{
  	let address: Address ={
  		lat: 0,
  		lng: 0,
  		country: "",
  		province: "",
  		city: "",
  		neighbourhood: "",
  		street: "",
  		house_number: "",
  		place_name: ""
  	}
  	return address
  }

  defaultRoom(): Room{
  	let room: Room = {
  		available: true,
  		accredited: false,
		display_pic_url: "",
		dp_loaded: false,
		description: "",
		pictures: [],
		video_url: "",
		room_id: "",
		occupants: [],
		furnished: false,
		room_type: "",
		search_rating: 0,  
		demand_index: 0,   
		rent: null,
		deposit: null,
		room_number: "",
		sub_rooms: 0,
		property: this.defaultProperty()
  	}
  	return room;
  }

  defaultRoomPreview(){
  	let room: RoomPreview = {
	  	available: true,
		room_id: "",
		furnished: false,
		room_type: "",
		search_rating: 0, //calculated per individual search
		demand_index: 0, //aggregated over all searches
		rent: 0,
		deposit: 0,
		property: this.defaultPropertyPreview()
  	}
  	return room;
  }

  initializedRoom(type: string,  rm_number: string, is_furnished?: boolean){
  	let room: Room = {
  		available: true,
  		accredited: false,
		display_pic_url: "",
		dp_loaded: false,
		description: "",
		pictures: [],
		video_url: "",
		room_id: "",
		occupants: [],
		furnished: is_furnished || false,
		room_type: type,
		search_rating: 0,  
		demand_index: 0,   
		rent: null,
		deposit: null,
		room_number: rm_number,
		sub_rooms: 0,
		property: this.defaultProperty()
  	}
  	return room;
  }

  defaultProperty():Property{
  	let property: Property = {
  		address: this.defaultAddress(),
  		accredited: false,
		parking: false,
		wifi: false,
		payment_methods: "",
		pool: false,
		gym: false,
		laundry: false,
		tv_room: false,
		security: false,
		electricity_inclusive_in_rent: false,
		landlord_id: "",
		agents: [],
		property_id: "",
		service_package: "",
		display_pic_url: "",
		dp_loaded: false,
		pictures: [],
		shared_area_pics: [],
		num_pics_downloaded: 0,
		num_pics_uploaded: 0,
		video_url: "",
		property_type: "",
		property_paid_off: false,
		nearby_landmarks: [],
		minutes_from_campus: null,
		upload_complete: 0,
		uploader_id: "",
		deposit_specifics: "",
		uploader_contact_number: "",
		other_amenities: "",
		genders_housed: "",
		rooms: this.defaultRoomCount()
  	}
  	return property;
  }

  defaultFileUpload(){
  	let fl: FileUpload = {
  		file: null,
		path: "",
		url: "",
		name: "",
		progress: 0,
		loaded: false
	}
	return fl;
  }
  
}
