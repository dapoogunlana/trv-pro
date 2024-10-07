import { number, string } from "yup/lib/locale"

export interface iBasicInfo {
    apartment_name: string,
    country: string,
    state: string,
    lga: string,
    address: string,
    email: string,
    phone: string,
    website: string,
}

export interface iAdvancedInfo {
    single: number,
    suites: number,
    executive: number,
    double_chambers: number,
    description: string,
    bedrooms: number,
    bathrooms: number,
    parking: number,
    pool: number,
    bathtube: number,
    bidet: number,
    body_soap: number,
    cleaning_products: number,
    hot_water: number,
    bed_linens: number,
    clothing_storage: number,
    drying_rack: number,
    essentials: number,
    extra_pillows: number,
    free_dryer: number,
    free_washer: number,
    hangers: number,
    iron: number,
    darkening_shades: number,
    archade_games: number,
    bluetooth: number,
    reading: number,
    game_console: number,
    ping_pong_table: number,
    pool_table: number,
    tv: number,
    ac: number,
    fans: number,
    monoxide_alarm: number,
    fire_extinguisher: number,
    first_aid_kit: number,
    security_cameras: number,
    smoke_alarm: number,
    dedicated_workspace: number,
    wifi: number,
    bbq_grill: number,
    outdoor_dining: number,
    outdoor_furniture: number,
    patio_balcony: number,
    backyard_fenced: number,
    carpot: number,
    street_parking: number,
    private_pool: number,
    lockbox: number,
    self_checkin: number,
    images: Blob[]
}

export const sampleBasicInfo: iBasicInfo = {
    apartment_name: '',
    country: '',
    state: '',
    lga: '',
    address: '',
    email: '',
    phone: '',
    website: '',
}

export const sampleAdvancedInfo: iAdvancedInfo = {
    single: 0,
    suites: 0,
    executive: 0,
    double_chambers: 0,
    description: '',
    bedrooms: 1,
    bathrooms: 1,
    parking: 0,
    pool: 0,
    bathtube: 0,
    bidet: 0,
    body_soap: 0,
    cleaning_products: 0,
    hot_water: 0,
    bed_linens: 0,
    clothing_storage: 0,
    drying_rack: 0,
    essentials: 0,
    extra_pillows: 0,
    free_dryer: 0,
    free_washer: 0,
    hangers: 0,
    iron: 0,
    darkening_shades: 0,
    archade_games: 0,
    bluetooth: 0,
    reading: 0,
    game_console: 0,
    ping_pong_table: 0,
    pool_table: 0,
    tv: 0,
    ac: 0,
    fans: 0,
    monoxide_alarm: 0,
    fire_extinguisher: 0,
    first_aid_kit: 0,
    security_cameras: 0,
    smoke_alarm: 0,
    dedicated_workspace: 0,
    wifi: 0,
    bbq_grill: 0,
    outdoor_dining: 0,
    outdoor_furniture: 0,
    patio_balcony: 0,
    backyard_fenced: 0,
    carpot: 0,
    street_parking: 0,
    private_pool: 0,
    lockbox: 0,
    self_checkin: 0,
    images: []

}

export const preparePropertyData = (basicInfo: iBasicInfo, advancedInfo: iAdvancedInfo) => {
    const formData = new FormData();
    formData.append('apartment_name', basicInfo.apartment_name);
    formData.append('country', basicInfo.country);
    formData.append('state', basicInfo.state);
    formData.append('lga', basicInfo.lga);
    formData.append('address', basicInfo.address);
    formData.append('email', basicInfo.email);
    formData.append('phone', basicInfo.phone);
    formData.append('website', basicInfo.website);
    formData.append('single', advancedInfo.single.toString())
    formData.append('suites', advancedInfo.suites.toString())
    formData.append('executive', advancedInfo.executive.toString())
    formData.append('double_chambers', advancedInfo.double_chambers.toString())
    formData.append('description', advancedInfo.description)
    formData.append('bedrooms', advancedInfo.bedrooms.toString())
    formData.append('bathrooms', advancedInfo.bathrooms.toString())
    formData.append('parking', advancedInfo.parking.toString())
    formData.append('pool', advancedInfo.pool.toString())
    formData.append('bathtube', advancedInfo.bathtube.toString())
    formData.append('bidet', advancedInfo.bidet.toString())
    formData.append('body_soap', advancedInfo.body_soap.toString())
    formData.append('cleaning_products', advancedInfo.cleaning_products.toString())
    formData.append('hot_water', advancedInfo.hot_water.toString())
    formData.append('bed_linens', advancedInfo.bed_linens.toString())
    formData.append('clothing_storage', advancedInfo.clothing_storage.toString())
    formData.append('drying_rack', advancedInfo.drying_rack.toString())
    formData.append('essentials', advancedInfo.essentials.toString())
    formData.append('extra_pillows', advancedInfo.extra_pillows.toString())
    formData.append('free_dryer', advancedInfo.free_dryer.toString())
    formData.append('free_washer', advancedInfo.free_washer.toString())
    formData.append('hangers', advancedInfo.hangers.toString())
    formData.append('iron', advancedInfo.iron.toString())
    formData.append('darkening_shades', advancedInfo.darkening_shades.toString())
    formData.append('archade_games', advancedInfo.archade_games.toString())
    formData.append('bluetooth', advancedInfo.bluetooth.toString())
    formData.append('reading', advancedInfo.reading.toString())
    formData.append('game_console', advancedInfo.game_console.toString())
    formData.append('ping_pong_table', advancedInfo.ping_pong_table.toString())
    formData.append('pool_table', advancedInfo.pool_table.toString())
    formData.append('tv', advancedInfo.tv.toString())
    formData.append('ac', advancedInfo.ac.toString())
    formData.append('fans', advancedInfo.fans.toString())
    formData.append('monoxide_alarm', advancedInfo.monoxide_alarm.toString())
    formData.append('fire_extinguisher', advancedInfo.fire_extinguisher.toString())
    formData.append('first_aid_kit', advancedInfo.first_aid_kit.toString())
    formData.append('security_cameras', advancedInfo.security_cameras.toString())
    formData.append('smoke_alarm', advancedInfo.smoke_alarm.toString())
    formData.append('dedicated_workspace', advancedInfo.dedicated_workspace.toString())
    formData.append('wifi', advancedInfo.wifi.toString())
    formData.append('bbq_grill', advancedInfo.bbq_grill.toString())
    formData.append('outdoor_dining', advancedInfo.outdoor_dining.toString())
    formData.append('outdoor_furniture', advancedInfo.outdoor_furniture.toString())
    formData.append('patio_balcony', advancedInfo.patio_balcony.toString())
    formData.append('backyard_fenced', advancedInfo.backyard_fenced.toString())
    formData.append('carpot', advancedInfo.carpot.toString())
    formData.append('street_parking', advancedInfo.street_parking.toString())
    formData.append('private_pool', advancedInfo.private_pool.toString())
    formData.append('lockbox', advancedInfo.lockbox.toString())
    formData.append('self_checkin', advancedInfo.self_checkin.toString())
    formData.append('images', advancedInfo.images[0])

    return formData;
}