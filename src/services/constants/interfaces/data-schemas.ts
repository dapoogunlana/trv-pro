export interface IindustryNews {
    id: number,
    image: string | undefined,
    title: string,
    content: {
        topic: string,
        subTopic?: string,
        point: string,
        subPoints: string[],
    }[],
    date: string,
}[]

export interface Ioperator {
    title: string,
    code: string,
    type: number,
    icon: string,
    image: string,
    bannerImage: string,
    data: {
        title: string,
        brief: string,
        countries?: {
            country: string,
            active: boolean,
            operators: {
                title: string,
                image: string,
            }[]
        }[],
        operators?: {
            title: string,
            image: string,
        }[]
    }
}
export interface IoperatorCountry {
    country: string,
    active: boolean,
    operators: {
        title: string,
        image: string,
    }[]
}[]
export interface IoperatorOperator {
    title: string,
    image: string,
}[]