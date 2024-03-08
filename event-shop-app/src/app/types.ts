export interface Event {
    id: string;
    title: string;
    imageUrl?: string;
    locationName: string;
    location: string;
    date: Date;
    start: Date;
    end: Date;
}