export interface IRestaurantData {
    blurhash: string,
    launch_date: string,
    location: number[],
    name: string,
    online: boolean,
    popularity: number
}

export interface IRestaurantProp {
    key: String,
    data: IRestaurantData
}

export interface ISectionObject {
    title: string,
    restaurants: IRestaurantData[]
}

export interface ISectionData {
    sectionData: ISectionObject
}

export interface ISectionProp {
    key: string,
    sectionData: ISectionObject
}

export interface ISectionsProp {
    sections: ISectionObject[] | null
}