




export type Config = {
    title:string,
    logoSrc:string,
    head:string,
    subHead:string,
    baseColor:string,
    accentColor:string
    bgColor:string,
    links:Link[]
}

export type Link = {
    imgSrc:string,
    name:string,
    link:string,
}